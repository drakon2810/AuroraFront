import { FAQSection } from '@/components/Sections/FAQSection'
import { FeaturesSection } from '@/components/Sections/FeaturesSection'
import { HeroSection } from '@/components/Sections/HeroSection'
import { LaunchSection } from '@/components/Sections/LaunchSection'
import { Logos3 } from '@/components/blocks/logos3'

export const Home = () => {
  return (
    <div className='flex h-full flex-col'>
      <HeroSection />
      <LaunchSection />
      <FeaturesSection />
      <FAQSection />
      <Logos3 className='bg-neutral-100 pt-0 dark:bg-neutral-800' />
    </div>
  )
}
