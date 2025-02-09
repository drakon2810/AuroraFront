import { FooterCopyrights } from './FooterCopyrights'
import { FooterItem } from './FooterItem'
import { FooterNav } from './FooterNav'
import { FooterSocials } from './FooterSocials'
import { PROJECT_NAME } from '@/consts'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Footer: FC = () => {
  const { t } = useTranslation()

  return (
    <footer className='container flex flex-col py-12 text-sm'>
      <div className='flex justify-between gap-8'>
        <FooterItem title={PROJECT_NAME}>
          <p>{t('footer.description')}</p>
        </FooterItem>
        <FooterItem title={t('footer.navigation.label')}>
          <FooterNav />
        </FooterItem>
        <FooterItem title={t('footer.connect.label')}>
          <FooterSocials />
        </FooterItem>
      </div>
      <hr className='my-8 w-full border-neutral-200 dark:border-neutral-600' />
      <FooterCopyrights />
    </footer>
  )
}
