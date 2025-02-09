import { Button } from '../Button'
import { Description } from '../Description'
import { FancyButton } from '../FancyButton'
import { Section } from './Section'
import { PROJECT_NAME } from '@/consts'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export const HeroSection = () => {
  const { connected } = useWallet()
  const { setVisible } = useWalletModal()

  const navigate = useNavigate()
  const { t } = useTranslation()

  const goToDashboard = () => {
    if (connected) return navigate('/account')
    setVisible(true)
  }

  return (
    <Section
      id='hero'
      className='relative -mt-[75px] flex items-center justify-center gap-8 pt-[75px]'
    >
      <div className='flex flex-auto flex-col items-center justify-center text-center'>
        <h1 className='select-none text-8xl font-black uppercase leading-normal sm:text-7xl md:text-8xl lg:text-9xl xl:text-[18.7rem]'>
          {PROJECT_NAME}
        </h1>
        <h2 className='py-2 xl:text-5xl'>{t('home.hero.title')}</h2>
        <Description className='my-6'>{t('home.hero.description')}</Description>
        <div className='flex items-center gap-4'>
          <FancyButton onClick={goToDashboard}>
            {t('home.hero.dashboardButton')}
          </FancyButton>
          <Button to='/start' variant='outline'>
            {t('home.hero.howToButton')}
          </Button>
        </div>
      </div>
      <a
        href='/#launch'
        className='absolute bottom-8 flex animate-bounce flex-col items-center'
      >
        <span className='text-sm'>{t('home.hero.scrollToExploreButton')}</span>
        <IoIosArrowDown size={24} />
      </a>
    </Section>
  )
}
