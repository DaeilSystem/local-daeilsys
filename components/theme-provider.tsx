// components/theme-provider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// next-themes 컴포넌트의 실제 props를 가져오고,
// 여기에 children을 확실히 포함시킵니다.
type NextThemesActualProps = React.ComponentProps<typeof NextThemesProvider>
export type ThemeProviderProps = React.PropsWithChildren<NextThemesActualProps>

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
