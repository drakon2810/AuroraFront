import { Badge } from '../Badge'
import { Button } from '../Button'
import { Description } from '../Description'
import { WebsiteNameInput } from '../WebsiteNameInput'
import { FlipWords } from '../ui/flip-words'
import { Section } from './Section'
import Video from '@/assets/video.mp4'
import { useValidateName } from '@/hooks/useValidateName'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const LaunchSection = () => {
  const [name, setName] = useState('')
  const { errors, isValid, revalidate } = useValidateName(name)

  const navigate = useNavigate()
  const { t } = useTranslation()
  const titleWords = t('home.launch.titleWords', {
    returnObjects: true
  }) as string[]

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
          <form
            onSubmit={(e) => {
              e.preventDefault()
              navigate(`/templates?name=${name}`)
            }}
            className='flex items-center gap-4'
          >
            <div className='h-12 w-full max-w-sm'>
              <WebsiteNameInput
                value={name}
                setValue={setName}
                errors={errors}
                revalidate={revalidate}
              />
            </div>
            <Button
              type='submit'
              className='whitespace-nowrap'
              disabled={!isValid}
            >
              {t('home.launch.startBuildingButton')}
            </Button>
          </form>
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
