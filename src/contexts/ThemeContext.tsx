import { ThemeContextValues } from '@/types/contexts'
import { FC, ReactNode, createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext<ThemeContextValues | null>(null)

const getTheme = () => {
  const storedTheme = localStorage.getItem('theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return 'light'
}

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(getTheme())
  const root = window.document.documentElement

  const changeTheme = (theme: 'dark' | 'light') => {
    root.classList.remove('light', 'dark')
    root.classList.add(theme)

    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    changeTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
