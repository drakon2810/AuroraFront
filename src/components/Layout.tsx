import { Footer } from './Footer/Footer'
import { Header } from './Header'
import { Particles } from './magicui/particles'
import { ThemeContext } from '@/contexts/ThemeContext'
import { ThemeContextValues } from '@/types/contexts'
import { FC, ReactNode, useContext } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextValues

  return (
    <div className='relative'>
      <div className='relative z-10 flex h-full flex-col'>
        <Header />
        <main className='h-full min-h-screen flex-auto overflow-x-hidden'>
          {children ? children : <Outlet />}
        </main>
        <Footer />
      </div>
      <Particles
        className='absolute inset-0 z-0'
        quantity={200}
        ease={100}
        color={theme === 'dark' ? '#ffffff' : '#000000'}
        refresh
      />
    </div>
  )
}
