import { Card } from '../Cards/Card'
import { Description } from '../Description'
import { Logos3 } from '../blocks/logos3'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'
import { Section } from './Section'
import { useTranslation } from 'react-i18next'

export const FAQSection = () => {
  const { t } = useTranslation()
  const FAQs = t('home.FAQs.questions', { returnObjects: true })

  return (
    <Section
      id='FAQ'
      className='flex flex-col items-center justify-center gap-12 bg-neutral-100 dark:bg-neutral-800'
    >
      <div className='flex flex-col items-center gap-4'>
        <h3 className='text-4xl font-bold'>{t('home.FAQs.title')}</h3>
        <Description>{t('home.FAQs.description')}</Description>
      </div>
      <Accordion
        type='single'
        collapsible
        className='container flex flex-col gap-4'
      >
        {Object.values(FAQs).map(({ question, answer }) => (
          <AccordionItem key={question} value={question} asChild>
            <Card className='min-w-full px-6 py-0'>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
      <Logos3 className='bg-neutral-100 pt-0 dark:bg-neutral-800' />
    </Section>
  )
}
