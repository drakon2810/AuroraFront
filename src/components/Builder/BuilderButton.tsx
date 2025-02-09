import { CreateButton } from './CreateButton'
import { UpdateButton } from './UpdateButton'
import { useLocation } from 'react-router-dom'

export const BuilderButton = () => {
  const { pathname } = useLocation()
  const isCreator = pathname === '/create'

  if (isCreator) return <CreateButton />
  return <UpdateButton />
}
