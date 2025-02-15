import { Telegram, Twitter } from '@/components/Icons'
import { Section } from '@/components/Sections/Section'
import { StartItems } from '@/components/Start/StartItems'
import { SplineScene } from '@/components/ui/splite'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

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
            <Link to='https://t.me/+RpT8pKZEDwJmOTBk' target='_blank'>
              <Telegram />
            </Link>
            <Link to='https://x.com/AuroraBuildd' target='_blank'>
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
      <div className='flex w-[500px] max-w-3xl flex-col items-center border-[10px] border-black dark:border-white'>
        <h3>Aurora</h3>
        <SplineScene
          scene='https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'
          className='!h-[600px]'
        />
      </div>
    </Section>
  )
}
