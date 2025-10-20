/**
 * 브라우저 언어 감지 및 관리 유틸리티
 */

export const SUPPORTED_LANGUAGES = ["en", "ko"] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

/**
 * 브라우저의 기본 언어를 감지합니다
 */
export function detectBrowserLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return "en"

  const browserLanguages = [navigator.language, ...(navigator.languages || [])]

  for (const lang of browserLanguages) {
    const langCode = lang.toLowerCase().split("-")[0]

    if (SUPPORTED_LANGUAGES.includes(langCode as SupportedLanguage)) {
      return langCode as SupportedLanguage
    }
  }

  return "en" // 기본값
}

/**
 * 사용자의 언어 설정을 localStorage에서 가져옵니다
 */
export function getStoredLanguagePreference(): SupportedLanguage | null {
  if (typeof window === "undefined") return null

  try {
    const stored = localStorage.getItem("dvia-language-preference")
    if (stored && SUPPORTED_LANGUAGES.includes(stored as SupportedLanguage)) {
      return stored as SupportedLanguage
    }
  } catch (error) {
    console.warn("Failed to read language preference from localStorage:", error)
  }

  return null
}

/**
 * 사용자의 언어 설정을 localStorage에 저장합니다
 */
export function setStoredLanguagePreference(language: SupportedLanguage): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem("dvia-language-preference", language)
  } catch (error) {
    console.warn("Failed to save language preference to localStorage:", error)
  }
}

/**
 * 최적의 언어를 결정합니다
 * 우선순위: 저장된 설정 > 브라우저 언어 > 영어(기본값)
 */
export function determineOptimalLanguage(): SupportedLanguage {
  const storedLanguage = getStoredLanguagePreference()
  if (storedLanguage) {
    return storedLanguage
  }

  const browserLanguage = detectBrowserLanguage()
  return browserLanguage
}
