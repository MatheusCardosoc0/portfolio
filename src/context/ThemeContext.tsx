'use client'

import { ThemeProvider } from 'next-themes'

interface ThemeContextProps {
  children: React.ReactNode
}

const ThemeContext = ({ children }: ThemeContextProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default ThemeContext
