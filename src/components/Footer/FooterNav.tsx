import { NavLink } from '../NavLink'
import { navItems } from '@/consts'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const FooterNav: FC = () => {
  const { t } = useTranslation()

  return (
    <nav>
      <ul className='grid grid-cols-2 gap-x-24 gap-y-3'>
        {navItems.map(({ name, url }) => (
          <li key={url}>
            <NavLink to={url}>{t(`navLinks.${name}`)}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
