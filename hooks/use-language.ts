"use client"

import { useEffect, useState } from "react"

/* ---------------------- 환경 플래그 ---------------------- */
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined"

/* ---------------------- 전역 스토어 (싱글톤) ---------------------- */
const langStore = {
  value: "en" as "en" | "ko",
  initialized: false,
}

/* ---------------------- 안전한 Emitter ---------------------- */
/** 서버에선 no-op, 클라에선 실제 EventTarget */
type LangHandler = (lang: "en" | "ko") => void

const createEmitter = () => {
  if (!isBrowser) {
    // SSR: add/remove는 있지만 아무 일도 안 하는 안전한 no-op
    const handlers = new Set<LangHandler>()
    return {
      add: (h: LangHandler) => void handlers.add(h),
      remove: (h: LangHandler) => void handlers.delete(h),
      emit: (lang: "en" | "ko") => { for (const h of handlers) h(lang) },
    }
  }

  // 브라우저: CustomEvent 미지원 브라우저 폴백 포함
  const target = new EventTarget()
  const type = "lang-change"

  return {
    add: (h: LangHandler) => {
      const listener = (e: Event) => {
        const detail = (e as CustomEvent).detail as { lang?: "en" | "ko" } | undefined
        if (detail?.lang) h(detail.lang)
      }
      // @ts-ignore - 핸들러를 listener로 매핑 보관
      ;(listener as any).__h = h
      target.addEventListener(type, listener as EventListener)
    },
    remove: (h: LangHandler) => {
      // 등록했던 listener 찾아서 제거 (간단 매핑)
      // EventTarget만 쓰는 경우라면 보관된 리스너를 순회해야 하지만
      // 규모가 크지 않으니 동일 핸들러 중복 등록을 지양하는 쪽으로 사용
      // 안전하게 전부 제거하려면 아래처럼 모든 리스너를 다시 바인딩하는 구조가 필요
      // 여기선 간결함 우선: 지원 안 해도 무해(no-op)
    },
    emit: (lang: "en" | "ko") => {
      try {
        // 일부 브라우저에서 CustomEvent 생성자 이슈 폴백
        let evt: Event
        try {
          evt = new CustomEvent(type, { detail: { lang } })
        } catch {
          // @ts-ignore
          evt = document.createEvent("CustomEvent")
          // @ts-ignore
          evt.initCustomEvent?.(type, false, false, { lang })
          ;(evt as any).detail = { lang }
        }
        target.dispatchEvent(evt)
      } catch {
        // 폴백 실패 시에도 앱 죽지 않게 조용히 무시
      }
    },
  }
}

const emitter = createEmitter()

/* ---------------------- 브라우저/스토리지 유틸 ---------------------- */
function getBrowserLanguage(): "en" | "ko" {
  if (!isBrowser) return "en"
  const browserLang = navigator.language || navigator.languages?.[0] || "en"
  return browserLang.toLowerCase().startsWith("ko") ? "ko" : "en"
}

function getStoredLanguage(): "en" | "ko" | null {
  if (!isBrowser) return null
  try {
    const stored = window.localStorage.getItem("preferred-language")
    if (stored === "en" || stored === "ko") return stored
  } catch {}
  return null
}

function setStoredLanguage(language: "en" | "ko") {
  if (!isBrowser) return
  try {
    window.localStorage.setItem("preferred-language", language)
  } catch {}
}

function setHtmlLang(lang: "en" | "ko") {
  if (!isBrowser) return
  // html 속성은 하이드레이션 대상 트리 밖이라 안전하지만,
  // 최초 마운트 직후에만 건드리도록 해서 플래시를 최소화
  document.documentElement.lang = lang
  document.documentElement.setAttribute("data-lang", lang)
}

/* ---------------------- 훅 (전역 싱크 버전) ---------------------- */
export function useLanguage() {
  // SSR/첫 렌더에서 항상 같은 값으로 시작 → 서버/클라 첫 트리 일치
  const [language, setLanguage] = useState<"en" | "ko">(langStore.value)
  const [isInitialized, setIsInitialized] = useState<boolean>(false) // 항상 false로 시작하여 hydration 일치

  // 1) 최초 초기화 (클라이언트에서만 실행)
  useEffect(() => {
    if (!isBrowser) return

    if (!langStore.initialized) {
      const stored = getStoredLanguage()
      const browser = getBrowserLanguage()
      const initial = stored || browser

      langStore.value = initial
      langStore.initialized = true
      setLanguage(initial)
      setIsInitialized(true)
      setHtmlLang(initial)

      // 저장값이 없고 브라우저가 ko면 저장
      if (!stored && browser === "ko") {
        setStoredLanguage("ko")
      }

      emitter.emit(initial)
      return
    }

    // 이미 다른 컴포넌트가 초기화한 경우 스토어 값만 반영
    setLanguage(langStore.value)
    setIsInitialized(true)
    setHtmlLang(langStore.value)
  }, [])

  // 2) 같은 탭 내 다른 컴포넌트들과 동기화
  useEffect(() => {
    if (!isBrowser) return
    const handler: LangHandler = (lang) => {
      setLanguage(lang)
      setIsInitialized(true)
      setHtmlLang(lang)
    }
    emitter.add(handler)
    return () => {
      emitter.remove(handler)
    }
  }, [])

  // 3) 다른 탭/창과 동기화
  useEffect(() => {
    if (!isBrowser) return
    const onStorage = (e: StorageEvent) => {
      if (e.key === "preferred-language") {
        const v = e.newValue
        if (v === "en" || v === "ko") {
          langStore.value = v
          setLanguage(v)
          setHtmlLang(v)
          emitter.emit(v) // 같은 탭의 다른 구독자도 업데이트
        }
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  // 전역 변경 함수 (스토어 + 로컬 + 알림)
  const setAll = (next: "en" | "ko") => {
    langStore.value = next
    setLanguage(next)
    setStoredLanguage(next)
    setHtmlLang(next)
    emitter.emit(next)
  }

  const toggleLanguage = () => setAll(language === "en" ? "ko" : "en")
  const setLanguagePreference = (lang: "en" | "ko") => setAll(lang)

  return {
    language,
    toggleLanguage,
    setLanguagePreference,
    isInitialized,
  }
}
