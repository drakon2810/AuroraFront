import { BuyButton } from '../BuyButton'
import { ContractAddressButton } from '../ContractAddressButton'
import { SocialLinks } from '../SocialLinks'
import { TemplateLayout } from '../TemplateLayout'
import { ClassicHowToBuy } from './HowToBuy'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { ImageGallery } from '@/components/ui/ImageGalery'
import { MarqueeStr } from '@/components/ui/MarqueeStr'
import { TokenomicsDisplay } from '@/components/ui/TokenomicsDisplay'
import { TokenomicsPieChart } from '@/components/ui/TokenomicsPieChart'
import { Chart } from '@/components/ui/chart'
import { EmbedVideo } from '@/components/ui/embedVideo'
import { Stages } from '@/components/ui/stages'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useBlocksStore } from '@/store/useBlocksStore'
import { useChartStore } from '@/store/useChartStore'
import { useGallaryStore } from '@/store/useGalleryStore'
import { useGeneralStore } from '@/store/useGeneralStore'
import { useMarqueeStore } from '@/store/useMarqueeStore'
import { useRoadMapStore } from '@/store/useRoadMapStore'
import { useStylesStore } from '@/store/useStulesStore'
import { useTokenDistributionStore } from '@/store/useTokenDistribution'
import { useTokenomicsStore } from '@/store/useTokenomicsStore'
import { useFallingImagesStore } from '@/store/useWidgetsStore'
import { TemplateContextValues } from '@/types/contexts'
import { ToggleData } from '@/types/templates'
import { TextData } from '@/types/templates'
import { FC, useContext } from 'react'

export const Classic: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const { isHideLogo, isHideToken } = useGeneralStore((state) => state)
  const { primary, secondary, colorPrim, colorSec } = useStylesStore(
    (state) => state
  )
  const { isActiveAnimations } = useFallingImagesStore((state) => state)
  const { isActiveEmbed, embedTitle } = useBlocksStore((state) => state)
  const { isActiveChart, titleChart } = useChartStore((state) => state)
  const { isActiveRM, titleRM } = useRoadMapStore((state) => state)
  const { isActiveMarquee, marqueeUp, marqueeDown, marqueeMidle } =
    useMarqueeStore((state) => state)
  const { isActiveGallary, titleGallary } = useGallaryStore((state) => state)
  const { title, isActiveTK, textArea } = useTokenomicsStore((state) => state)
  const { isActiveDes, titleDes, textAreaDes } = useTokenDistributionStore(
    (state) => state
  )
  const tickerData = data?.['ticker'] as TextData | undefined

  if (!data) return <span>Something went wrong...</span>

  return (
    <TemplateLayout className='h-dvh overflow-y-auto'>
      <div className='mb-4'>
        {isActiveMarquee && marqueeUp && (
          <MarqueeStr
            text={tickerData?.value || 'Ticker'}
            style={{
              fontFamily: secondary,
              color: colorSec || 'green',
              fontWeight: 600
            }}
          />
        )}
      </div>
      <div className='mx-auto flex flex-col items-center gap-8'>
        <header className='flex w-full items-center justify-between gap-4 pb-12'>
          <div className='flex items-center gap-4'>
            {!isHideLogo && (
              <Image
                fieldName='logoImage'
                className={{
                  image: `rounded-full ${isActiveAnimations ? 'animate-bounce' : ''}`
                }}
              />
            )}
            <Text
              fieldName='logoText'
              placeholder='Name'
              style={{ fontFamily: primary, color: colorPrim }}
            />
          </div>

          <SocialLinks visibility='header' />
        </header>
        <Text
          fieldName='ticker'
          as='h1'
          placeholder='Ticker'
          style={{ fontFamily: primary, color: colorPrim }}
        />
        <ContractAddressButton />
        <SocialLinks />
        <Image
          fieldName='tokenImage'
          className={{
            image: `rounded-xl ${isActiveAnimations ? 'animate-bounce' : ''}`
          }}
        />
        <Text
          fieldName='description'
          className={{ wrapper: 'rounded-md bg-white p-1' }}
          placeholder='Description'
          style={{ fontFamily: secondary, color: colorSec || '#000000' }}
        />
        <BuyButton className='min-w-72 rounded-full text-center text-3xl uppercase text-black' />
        {isActiveMarquee && marqueeMidle && (
          <MarqueeStr
            text={tickerData?.value || 'Ticker'}
            style={{
              fontFamily: secondary,
              color: colorSec || 'green',
              fontWeight: 600
            }}
          />
        )}
        {(data?.showHowToBuy as ToggleData)?.value && <ClassicHowToBuy />}
        {isActiveEmbed && (
          <div className='mx-auto my-8 flex w-full max-w-4xl flex-col items-center justify-center'>
            <h3
              className='mb-4 text-center'
              style={{ fontFamily: secondary, color: colorSec || 'white' }}
            >
              {embedTitle}
            </h3>
            <EmbedVideo />
          </div>
        )}
      </div>
      <div>
        {isActiveChart && (
          <div className='mx-auto my-8 flex w-full flex-col items-center justify-center rounded-[70px]'>
            <h3
              className='mb-4 text-center'
              style={{ fontFamily: secondary, color: colorSec || 'white' }}
            >
              {titleChart}
            </h3>
            <Chart />
          </div>
        )}
        {isActiveRM && (
          <div className='mx-auto my-8 mb-4 mt-[150px] flex w-full flex-col items-center justify-center rounded-[70px]'>
            <h3
              className='mb-4 text-center'
              style={{ fontFamily: secondary, color: colorSec || 'white' }}
            >
              {titleRM}
            </h3>
            <Stages />
          </div>
        )}
        {isActiveGallary && (
          <div className='mt-8'>
            <h3
              className='mb-4 text-center'
              style={{ fontFamily: secondary, color: colorSec || 'white' }}
            >
              {titleGallary}
            </h3>
            <ImageGallery />
          </div>
        )}
        {isActiveTK && (
          <div className='mt-24'>
            <h3
              className='mb-4 text-center'
              style={{ fontFamily: secondary, color: colorSec || 'white' }}
            >
              {title}
            </h3>
            <p
              className='mb-4 text-center'
              style={{ fontFamily: secondary, color: colorSec || 'white' }}
            >
              {textArea}
            </p>
            <TokenomicsDisplay
              style={{ fontFamily: secondary, color: colorSec || 'black' }}
            />
          </div>
        )}
        {isActiveDes && (
          <div className='mt-24'>
            <h3
              className='mb-4 text-center'
              style={{ fontFamily: secondary, color: colorSec || 'white' }}
            >
              {titleDes}
            </h3>
            <p
              className='mb-4 text-center'
              style={{ fontFamily: secondary, color: colorSec || 'white' }}
            >
              {textAreaDes}
            </p>
            <TokenomicsPieChart />
          </div>
        )}

        <div className='mt-8'>
          {isActiveMarquee && marqueeDown && (
            <MarqueeStr
              text={tickerData?.value || 'Ticker'}
              style={{
                fontFamily: secondary,
                color: colorSec || 'green',
                fontWeight: 600
              }}
            />
          )}
        </div>
      </div>
    </TemplateLayout>
  )
}
