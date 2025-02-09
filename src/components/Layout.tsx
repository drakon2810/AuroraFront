import { Footer } from './Footer/Footer'
import { Header } from './Header'
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className='flex h-full flex-col'>
      <Header />
      <main className='h-full min-h-screen flex-auto overflow-x-hidden'>
        {children ? children : <Outlet />}
      </main>
      <Footer />
    </div>
  )
}
