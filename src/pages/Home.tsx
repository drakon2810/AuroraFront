import { FAQSection } from '@/components/Sections/FAQSection'
import { FeaturesSection } from '@/components/Sections/FeaturesSection'
import { HeroSection } from '@/components/Sections/HeroSection'
import { LaunchSection } from '@/components/Sections/LaunchSection'
import { RecentlyCreatedSection } from '@/components/Sections/RecentlyCreatedSection'
import { TrustedSection } from '@/components/Sections/TrustedSection'

export const Home = () => {
  return (
    <div className='flex h-full flex-col'>
      <HeroSection />
      <RecentlyCreatedSection />
      <LaunchSection />
      <FeaturesSection />
      <FAQSection />
      <TrustedSection />
    </div>
  )
}
