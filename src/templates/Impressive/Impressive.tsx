import { BuyButton } from '../BuyButton'
import { SocialLinks } from '../SocialLinks'
import { TemplateLayout } from '../TemplateLayout'
import { ImpressiveCopyButton } from './CopyButton'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { FC, useContext } from 'react'

const roadmapSteps = [
  {
    title: 'roadmapFirstStepTitle',
    description: 'roadmapFirstStepDescription'
  },
  {
    title: 'roadmapSecondStepTitle',
    description: 'roadmapSecondStepDescription'
  },
  {
    title: 'roadmapThirdStepTitle',
    description: 'roadmapThirdStepDescription'
  }
]

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
  if (!data) return <span>Something went wrong...</span>

  return (
    <div className='flex h-full flex-col overflow-auto'>
      <TemplateLayout
        backgroundFieldName='primaryBackground'
        className='flex h-full min-h-dvh flex-col'
      >
        <div className='mx-auto flex h-full w-full max-w-7xl flex-auto flex-col'>
          <header className='flex w-full items-center justify-between'>
            <Image fieldName='logo' />
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
                placeholder='Ticker'
              />
              <ImpressiveCopyButton />
              <SocialLinks className='pt-4' />
            </div>
            <div className='w-full max-w-full md:max-w-md'>
              <Image fieldName='tokenImage' />
            </div>
          </section>
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
            <Text fieldName='roadmapTitle' as='h2' />
            <div className='flex flex-wrap justify-center gap-8'>
              {roadmapSteps.map(({ title, description }) => (
                <div
                  key={title}
                  className='impressive-block flex h-96 w-96 flex-col items-center gap-4 bg-white px-10 py-8'
                >
                  <div className='flex w-full justify-center rounded-full border-4 border-black bg-orange-500 text-center text-2xl'>
                    <Text fieldName={title} as='h3' />
                  </div>
                  <Text
                    fieldName={description}
                    className={{ wrapper: 'h-full w-full' }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center gap-8 py-24'>
            <Text fieldName='howToBuyTitle' as='h2' />
            <div className='flex flex-wrap justify-center gap-4'>
              {howToBuySteps.map((fieldName, index) => (
                <div
                  key={fieldName}
                  className='impressive-block flex w-full flex-col items-center gap-4 bg-white p-8'
                >
                  <h3 className='flex min-h-14 min-w-14 items-center justify-center rounded-full border-4 border-black bg-orange-500 text-center text-2xl text-white'>
                    {index + 1}
                  </h3>
                  <Text
                    fieldName={fieldName}
                    className={{ wrapper: 'h-full w-full' }}
                  />
                </div>
              ))}
            </div>
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
