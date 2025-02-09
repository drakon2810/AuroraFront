import { SmallLogo, Telegram, Twitter } from '@/components/Icons'
import { Section } from '@/components/Sections/Section'
import { StartItems } from '@/components/Start/StartItems'
import { useTranslation } from 'react-i18next'

export const Start = () => {
  const { t } = useTranslation()

  return (
    <Section className='container flex items-center justify-between'>
      <div className='flex flex-col gap-12 font-kanit'>
        <StartItems />
        <div className='flex max-w-sm flex-col gap-2'>
          <p>{t('start.contacts.message')}</p>
          <span>{t('start.contacts.email')}: admin@aurorabuild.pro</span>
          <div className='flex items-center gap-4'>
            <a href='https://t.me/aurorabuild' target='_blank'>
              <Telegram />
            </a>
            <a href='https://x.com/AuroraBuildd' target='_blank'>
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <SmallLogo size={500} className='-mr-48' />
    </Section>
  )
}
