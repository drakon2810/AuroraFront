import { NavLink } from '../NavLink'
import { PROJECT_NAME } from '@/consts'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const FooterCopyrights: FC = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <div className='flex items-center justify-between'>
      <span>
        {currentYear} {PROJECT_NAME}. {t('footer.copyright')}
      </span>
      <div className='flex items-center gap-4'>
        <NavLink to='/terms'>{t('footer.terms')}</NavLink>
        <NavLink to='/privacy'>{t('footer.privacy')}</NavLink>
      </div>
    </div>
  )
}
