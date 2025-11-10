/**
 * 이미지 시퀀스 관련 유틸리티 함수들
 */

/**
 * 프레임 번호를 지정된 자릿수로 패딩합니다.
 * @param frame - 프레임 번호
 * @param padding - 패딩 자릿수 (기본값: 4)
 * @returns 패딩된 문자열 (예: "0001", "0120")
 */
export function padFrameNumber(frame: number, padding: number = 4): string {
  return String(frame).padStart(padding, "0")
}

/**
 * 이미지 시퀀스의 경로를 생성합니다.
 * @param basePath - 기본 경로
 * @param filename - 기본 파일명
 * @param frame - 프레임 번호
 * @param extension - 파일 확장자
 * @param padding - 패딩 자릿수
 * @returns 완전한 이미지 경로
 */
export function getImageSequencePath(
  basePath: string,
  filename: string,
  frame: number,
  extension: string = "jpg",
  padding: number = 4
): string {
  const paddedFrame = padFrameNumber(frame, padding)
  return `${basePath}/${filename}-${paddedFrame}.${extension}`
}

/**
 * 이미지 시퀀스를 미리 로드합니다.
 * @param basePath - 기본 경로
 * @param filename - 기본 파일명
 * @param startFrame - 시작 프레임
 * @param endFrame - 종료 프레임
 * @param options - 추가 옵션
 * @returns Promise<void>
 */
export async function preloadImageSequence(
  basePath: string,
  filename: string,
  startFrame: number,
  endFrame: number,
  options: {
    extension?: string
    padding?: number
    onProgress?: (loaded: number, total: number) => void
  } = {}
): Promise<void> {
  const { extension = "jpg", padding = 4, onProgress } = options
  const total = endFrame - startFrame + 1
  let loaded = 0

  const promises = []

  for (let i = startFrame; i <= endFrame; i++) {
    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        loaded++
        if (onProgress) {
          onProgress(loaded, total)
        }
        resolve()
      }
      img.onerror = reject
      img.src = getImageSequencePath(basePath, filename, i, extension, padding)
    })
    promises.push(promise)
  }

  await Promise.all(promises)
}

/**
 * 스크롤 진행도에 따른 프레임 번호를 계산합니다.
 * @param progress - 스크롤 진행도 (0-1)
 * @param frameCount - 총 프레임 수
 * @param startFrame - 시작 프레임 (기본값: 1)
 * @param roundMethod - 반올림 방법 ('ceil' | 'floor' | 'round')
 * @returns 계산된 프레임 번호
 */
export function calculateFrame(
  progress: number,
  frameCount: number,
  startFrame: number = 1,
  roundMethod: "ceil" | "floor" | "round" = "ceil"
): number {
  const rawFrame = progress * frameCount
  let frame: number

  switch (roundMethod) {
    case "ceil":
      frame = Math.ceil(rawFrame)
      break
    case "floor":
      frame = Math.floor(rawFrame)
      break
    case "round":
      frame = Math.round(rawFrame)
      break
  }

  // Clamp to valid range
  return Math.max(startFrame, Math.min(frame + startFrame - 1, startFrame + frameCount - 1))
}
