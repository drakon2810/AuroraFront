import { ClassicHowToBuy } from '../Classic/HowToBuy'
import { ContractAddressButton } from '../ContractAddressButton'
import { SocialLinks } from '../SocialLinks'
import { TemplateLayout } from '../TemplateLayout'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { cursor } from '@/components/cursor/cursor'
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
import { TextData } from '@/types/templates'
import { ToggleData } from '@/types/templates'
import { FC, useContext } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export const Simple: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const { primary, secondary, colorPrim, colorSec } = useStylesStore(
    (state) => state
  )
  const { isHideToken } = useGeneralStore((state) => state)

  const { isActiveAnimations, customPointer } = useFallingImagesStore(
    (state) => state
  )
  const { isActiveEmbed, embedTitle, howToBuyBtn } = useBlocksStore(
    (state) => state
  )
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

  const getCursorValue = (cursorConfig: number | string | null) => {
    if (cursorConfig === null) return null

    if (typeof cursorConfig === 'number') {
      return cursor[cursorConfig]
    }

    return cursorConfig
  }

  const elementToDataUrl = (element: React.ReactElement) => {
    const svgString = renderToStaticMarkup(element)
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`
  }

  const currentPointer = getCursorValue(customPointer)
  const pointerStyle = {
    cursor: currentPointer
      ? `url("${
          typeof currentPointer === 'string'
            ? currentPointer
            : elementToDataUrl(currentPointer)
        }"), pointer`
      : 'pointer'
  }
  return (
    <TemplateLayout className='flex h-dvh w-full flex-col overflow-y-auto'>
      <SocialLinks visibility='header' className='self-end' />
      <div>
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
      <div className='mx-auto flex w-full max-w-5xl flex-auto flex-wrap items-center justify-center gap-12'>
        {!isHideToken && (
          <Image
            fieldName='tokenImage'
            className={{
              image: `rounded-full ${isActiveAnimations ? 'animate-bounce' : ''}`
            }}
            style={pointerStyle}
          />
        )}

        <div className='flex flex-auto flex-col items-center'>
          <Text
            fieldName='ticker'
            as='h1'
            placeholder='Ticker'
            style={{ fontFamily: primary, color: colorPrim }}
          />
          <ContractAddressButton className='w-full' />
          <hr className='my-4 w-full border border-white' />
          <SocialLinks />
        </div>
      </div>
      {howToBuyBtn && (data?.showHowToBuy as ToggleData)?.value && (
        <ClassicHowToBuy />
      )}

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
      <div>
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
      </div>
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
    </TemplateLayout>
  )
}
