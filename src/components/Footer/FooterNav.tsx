import { NavLink } from '../NavLink'
import { NavLink as NavLinkType } from '@/types'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const FooterNav: FC = () => {
  const { t } = useTranslation()
  const footerNavLinks = t('footer.navigation.items', {
    returnObjects: true
  }) as NavLinkType[]

  return (
    <nav>
      <ul className='grid grid-cols-2 gap-x-24 gap-y-3'>
        {footerNavLinks.map(({ label, path }) => (
          <li key={path}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
