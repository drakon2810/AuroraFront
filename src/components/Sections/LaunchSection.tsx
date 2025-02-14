import { Badge } from '../Badge'
import { Button } from '../Button'
import { Description } from '../Description'
import { FancyButton } from '../FancyButton'
import { FlipWords } from '../ui/flip-words'
import { Section } from './Section'
import Video from '@/assets/video.mp4'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const LaunchSection = () => {
  const { connected } = useWallet()
  const { setVisible } = useWalletModal()

  const navigate = useNavigate()
  const { t } = useTranslation()
  const titleWords = t('home.launch.titleWords', {
    returnObjects: true
  }) as string[]

  const goToDashboard = () => {
    if (connected) return navigate('/account')
    setVisible(true)
  }

  return (
    <Section
      id='launch'
      className='flex items-center justify-center bg-neutral-100 dark:bg-neutral-800'
    >
      <div className='container flex items-center justify-between gap-12'>
        <div className='flex flex-col gap-4'>
          <Badge>{t('home.launch.badge')}</Badge>
          <div className='font-bold tracking-tighter sm:text-5xl xl:text-6xl'>
            <span>{t('home.launch.title')}</span>
            <br />
            <FlipWords className='px-0 -tracking-[0.10em]' words={titleWords} />
          </div>
          <Description className='max-w-[600px]'>
            {t('home.launch.description')}
          </Description>
          <div className='flex items-center gap-4'>
            <FancyButton onClick={goToDashboard}>
              {t('home.hero.dashboardButton')}
            </FancyButton>
            <Button to='/start' variant='outline' className='whitespace-nowrap'>
              {t('home.hero.howToButton')}
            </Button>
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          className='w-full max-w-3xl flex-auto rounded-md'
        >
          <source src={Video} type='video/mp4' />
        </video>
      </div>
    </Section>
  )
}
