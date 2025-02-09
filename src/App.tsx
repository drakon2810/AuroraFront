import { Layout } from './components/Layout'
import { TemplateContextProvider } from './contexts/TemplateContext'
import { TemplateEditorContextProvider } from './contexts/TemplateEditorContext'
import { Account } from './pages/Account'
import { Builder } from './pages/Builder'
import { Pricing } from './pages/Pricing'
import { Start } from './pages/Start'
import { Templates } from './pages/Templates'
import { Main } from '@/pages/Main'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route
        element={
          <TemplateContextProvider>
            <Outlet />
          </TemplateContextProvider>
        }
      >
        <Route
          element={
            <TemplateEditorContextProvider>
              <Outlet />
            </TemplateEditorContextProvider>
          }
        >
          <Route path='/create' element={<Builder />} />
          <Route path='/edit' element={<Builder />} />
        </Route>
        <Route path='/' element={<Main />} />
        <Route path='/account' element={<Account />} />
      </Route>
      <Route element={<Layout />}>
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/templates' element={<Templates />} />
        <Route path='/start' element={<Start />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
