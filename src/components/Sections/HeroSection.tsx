import { StartBuilding } from '../StartBuilding'
import { TextAnimate } from '../magicui/text-animate'
import { TypingAnimation } from '../magicui/typing-animation'
import { Section } from './Section'
import { PROJECT_NAME } from '@/consts'
import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

export const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <Section
      id='hero'
      className='-mt-[75px] flex flex-col items-center justify-center gap-8 pt-[75px]'
    >
      <div className='flex flex-auto flex-col items-center justify-center text-center'>
        <TextAnimate
          as='h1'
          animation='fadeIn'
          by='character'
          className='select-none text-8xl font-black uppercase leading-normal sm:text-7xl md:text-8xl lg:text-9xl xl:text-[18.7rem]'
        >
          {PROJECT_NAME}
        </TextAnimate>
        <TypingAnimation as='h2' duration={70} className='py-2 xl:text-5xl'>
          {t('home.hero.title')}
        </TypingAnimation>
        <StartBuilding />
      </div>
      <a href='/#launch' className='flex animate-bounce flex-col items-center'>
        <span className='text-sm'>{t('home.hero.scrollToExploreButton')}</span>
        <IoIosArrowDown size={24} />
      </a>
    </Section>
  )
}
