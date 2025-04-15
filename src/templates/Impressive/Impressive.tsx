import { BuyButton } from '../BuyButton'
import { ClassicHowToBuy } from '../Classic/HowToBuy'
import { SocialLinks } from '../SocialLinks'
import { TemplateLayout } from '../TemplateLayout'
import { ImpressiveCopyButton } from './CopyButton'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { cursor } from '@/components/cursor/cursor'
import { ImageGallery } from '@/components/ui/ImageGalery'
import { MarqueeStr } from '@/components/ui/MarqueeStr'
import { TokenomicsDisplay } from '@/components/ui/TokenomicsDisplay'
import { TokenomicsPieChart } from '@/components/ui/TokenomicsPieChart'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Chart } from '@/components/ui/chart'
import { EmbedVideo } from '@/components/ui/embedVideo'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useBlocksStore } from '@/store/useBlocksStore'
import { useChartStore } from '@/store/useChartStore'
import { useGallaryStore } from '@/store/useGalleryStore'
import { useGeneralStore } from '@/store/useGeneralStore'
import { useMarqueeStore } from '@/store/useMarqueeStore'
import { useRoadMapImpressiveStore } from '@/store/useRoadMapStoreImpressive'
import { useStylesStore } from '@/store/useStulesStore'
import { useTokenDistributionStore } from '@/store/useTokenDistribution'
import { useTokenomicsStore } from '@/store/useTokenomicsStore'
import { useFallingImagesStore } from '@/store/useWidgetsStore'
import { TemplateContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { ToggleData } from '@/types/templates'
import { FC, useContext } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const howToBuySteps = [
  'howToBuyFirstStep',
  'howToBuySecondStep',
  'howToBuyThirdStep',
  'howToBuyFourthStep'
]

const FAQItems = [
  {
    question: 'firstQuestion',
    answer: 'firstAnswer'
  },
  {
    question: 'secondQuestion',
    answer: 'secondAnswer'
  },
  {
    question: 'thirdQuestion',
    answer: 'thirdAnswer'
  },
  {
    question: 'fourthQuestion',
    answer: 'fourthAnswer'
  }
]

export const Impressive: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues

  const { primary, secondary, colorPrim, colorSec } = useStylesStore(
    (state) => state
  )
  const { isHideToken, isLogo } = useGeneralStore((state) => state)

  const { isActiveAnimations, customPointer } = useFallingImagesStore(
    (state) => state
  )
  const {
    isActiveEmbed,
    embedTitle,
    howToBuyBtn,
    titleHowToBuyBlock,
    firstBlock,
    secondBlock,
    thirdBlock,
    fourthBlock,
    colorBackgrondBlock
  } = useBlocksStore((state) => state)
  const { isActiveChart, titleChart } = useChartStore((state) => state)
  const {
    roadmapFirstStepTitle,
    roadmapSecondStepTitle,
    roadmapThirdStepTitle,
    roadmapFirstStepDescription,
    roadmapSecondStepDescription,
    roadmapThirdStepDescription,
    titleRMImp
  } = useRoadMapImpressiveStore((state) => state)
  const { isActiveMarquee, marqueeUp, marqueeDown, marqueeMidle } =
    useMarqueeStore((state) => state)
  const { isActiveGallary, titleGallary } = useGallaryStore((state) => state)
  const { title, isActiveTK, textArea } = useTokenomicsStore((state) => state)
  const { isActiveDes, titleDes, textAreaDes } = useTokenDistributionStore(
    (state) => state
  )
  const roadmapSteps = [
    {
      title: roadmapFirstStepTitle,
      description: roadmapFirstStepDescription
    },
    {
      title: roadmapSecondStepTitle,
      description: roadmapSecondStepDescription
    },
    {
      title: roadmapThirdStepTitle,
      description: roadmapThirdStepDescription
    }
  ]

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

  if (!data) return <span>Something went wrong...</span>

  return (
    <div className='flex h-full flex-col overflow-auto'>
      <TemplateLayout
        backgroundFieldName='primaryBackground'
        className='flex h-full min-h-dvh flex-col'
      >
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

        <div className='mx-auto flex h-full w-full max-w-7xl flex-auto flex-col'>
          <header className='flex w-full items-center justify-between'>
            {!isLogo && <Image fieldName='logo' />}

            <div className='flex items-center gap-4'>
              <BuyButton className='rounded-xl bg-orange-500' />
              <SocialLinks visibility='header' />
            </div>
          </header>
          <section className='-mt-[102px] flex h-full w-full flex-auto flex-col items-center gap-32 md:flex-row'>
            <div className='flex flex-auto flex-col'>
              <Text
                fieldName='ticker'
                as='h1'
                className={{
                  text: 'shadow-black drop-shadow-[0px_6px_0px_rgba(0,_0,_0,_1)]'
                }}
                style={{ fontFamily: primary, color: colorPrim }}
                placeholder='Ticker'
              />
              <ImpressiveCopyButton />
              <SocialLinks className='pt-4' />
            </div>
            <div className='w-full max-w-full md:max-w-md'>
              {!isHideToken && (
                <Image
                  fieldName='tokenImage'
                  className={{
                    image: `rounded-full ${isActiveAnimations ? 'animate-bounce' : ''}`
                  }}
                  style={pointerStyle}
                />
              )}
            </div>
          </section>
        </div>
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
      </TemplateLayout>
      <TemplateLayout
        backgroundFieldName='secondaryBackground'
        className='pb-48 pt-28'
      >
        <section className='mx-auto flex max-w-7xl items-center gap-32'>
          <div className='w-full max-w-full md:max-w-md'>
            <Image fieldName='aboutUsPreview' />
          </div>
          <div className='flex flex-col'>
            <Text
              fieldName='aboutUsTitle'
              as='h2'
              className={{ text: 'font-dino' }}
              placeholder='Heading...'
            />
            <Text fieldName='aboutUsDescription' placeholder='Info...' />
          </div>
        </section>
      </TemplateLayout>
      <TemplateLayout backgroundFieldName='primaryBackground'>
        <section className='mx-auto flex max-w-7xl flex-col'>
          <div className='flex flex-col items-center justify-center gap-8 py-24'>
            <h2
              style={{
                fontFamily: 'Dino',
                fontSize: '72px',
                color: 'rgb(0, 0, 0)',
                WebkitTextStroke: '0px rgb(255, 0, 0)',
                backgroundColor: 'transparent'
              }}
            >
              {titleRMImp}
            </h2>

            <div className='flex flex-wrap justify-center gap-8'>
              {roadmapSteps.map((step, index) => (
                <div
                  key={index}
                  className='impressive-block flex h-96 w-96 flex-col items-center gap-4 bg-white px-10 py-8'
                >
                  <div className='flex w-full justify-center rounded-full border-4 border-black bg-orange-500 text-center text-2xl'>
                    <h3>{step.title}</h3>
                  </div>
                  <div className='h-full w-full'>
                    <p className='break-words text-lg text-black'>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-center gap-8 py-24'>
            <h1
              style={{
                fontFamily: 'Dino',
                fontSize: '72px',
                color: 'rgb(0, 0, 0)',
                WebkitTextStroke: '0px rgb(255, 0, 0)',
                backgroundColor: 'transparent'
              }}
            >
              {titleHowToBuyBlock}
            </h1>

            <div className='flex flex-wrap justify-center gap-8'>
              {howToBuySteps.map((fieldName, index) => (
                <div
                  key={fieldName}
                  className='impressive-block flex w-full flex-col items-center gap-4 bg-white p-8'
                >
                  <h3
                    className='flex min-h-14 min-w-14 items-center justify-center rounded-full border-4 border-black text-center text-2xl text-white'
                    style={{ backgroundColor: colorBackgrondBlock }}
                  >
                    {index + 1}
                  </h3>

                  {index === 0 && (
                    <h3
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        color: 'rgb(0, 0, 0)',
                        WebkitTextStroke: '0px rgb(255, 0, 0)',
                        backgroundColor: 'transparent'
                      }}
                    >
                      {firstBlock}
                    </h3>
                  )}

                  {index === 1 && (
                    <h3
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        color: 'rgb(0, 0, 0)',
                        WebkitTextStroke: '0px rgb(255, 0, 0)',
                        backgroundColor: 'transparent'
                      }}
                    >
                      {secondBlock}
                    </h3>
                  )}

                  {index === 2 && (
                    <h3
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        color: 'rgb(0, 0, 0)',
                        WebkitTextStroke: '0px rgb(255, 0, 0)',
                        backgroundColor: 'transparent'
                      }}
                    >
                      {thirdBlock}
                    </h3>
                  )}

                  {index === 3 && (
                    <h3
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        color: 'rgb(0, 0, 0)',
                        WebkitTextStroke: '0px rgb(255, 0, 0)',
                        backgroundColor: 'transparent'
                      }}
                    >
                      {fourthBlock}
                    </h3>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            {howToBuyBtn && (data?.showHowToBuy as ToggleData)?.value && (
              <ClassicHowToBuy />
            )}
          </div>
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
        </section>
      </TemplateLayout>
      <TemplateLayout
        backgroundFieldName='secondaryBackground'
        className='py-24'
      >
        <section className='mx-auto flex max-w-7xl flex-col items-center gap-8'>
          <Text fieldName='FAQTitle' as='h2' />
          <Accordion
            type='single'
            collapsible
            className='flex w-full flex-col gap-4'
          >
            {FAQItems.map(({ question, answer }) => (
              <AccordionItem
                key={question}
                value={question}
                className='impressive-block w-full bg-white px-6 py-4 text-black dark:border-black dark:bg-white dark:text-black'
              >
                <AccordionTrigger iconSize={32}>
                  <Text fieldName={question} />
                </AccordionTrigger>
                <AccordionContent>
                  <Text fieldName={answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </TemplateLayout>
      <TemplateLayout
        backgroundFieldName='primaryBackground'
        className='h-full p-8'
      >
        <section className='flex justify-center'>
          <span className='font-dino text-2xl text-white'>
            {(data?.ticker as TextData)?.value || 'ticker'}
          </span>
        </section>
      </TemplateLayout>
    </div>
  )
}
