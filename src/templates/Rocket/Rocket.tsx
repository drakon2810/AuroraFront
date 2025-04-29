import { RocketFAQ } from './FAQ'
import { RocketHeader } from './Header'
import { RocketHero } from './Hero'
import { RocketJoin } from './Join'
import { RocketMissionControl } from './MissionControl'
import { RocketRoadmap } from './Roadmap'
import { RocketTokenomics } from './Tokenomics'
import { TemplateContext } from '@/contexts/TemplateContext'
import { loadFonts } from '@/lib/utils'
import { useTimelineStore } from '@/store/useMissionTimeline'
import { useStylesStore } from '@/store/useStulesStore'
import { useTokenomicsStoreRocet } from '@/store/useTokenomicsStoreRocet'
import { TemplateContextValues } from '@/types/contexts'
import { ColorData } from '@/types/templates'
import { FC, useContext } from 'react'

loadFonts(['Orbitron'])

export const Rocket: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  if (!data) return <span>Something went wrong...</span>

  const { isActiveTokRocet } = useTokenomicsStoreRocet((state) => state)
  const { isActiveMissonRoc } = useTimelineStore((state) => state)

  const {
    colorBackground,
    backgroundGradient,
    imgBackground,
    activeSize,
    overlayColor,
    overlayOpacity
  } = useStylesStore((state) => state)

  const primaryColor = (data?.primaryColor as ColorData)?.value
  const secondaryColor = (data?.secondaryColor as ColorData)?.value

  const backgroundStyle = imgBackground
    ? {
        backgroundImage: `url(${imgBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }
    : backgroundGradient
      ? { backgroundImage: backgroundGradient }
      : colorBackground
        ? { backgroundColor: colorBackground }
        : { backgroundColor: '#0e1019' }

  const blurValue =
    activeSize === 'small'
      ? 'blur(4px)'
      : activeSize === 'medium'
        ? 'blur(8px)'
        : activeSize === 'large'
          ? 'blur(12px)'
          : 'none'

  const overlayStyle: React.CSSProperties = overlayColor
    ? {
        backgroundColor: `rgba(${parseInt(overlayColor.slice(1, 3), 16)}, 
                               ${parseInt(overlayColor.slice(3, 5), 16)}, 
                               ${parseInt(overlayColor.slice(5, 7), 16)}, 
                               ${overlayOpacity})`,
        mixBlendMode: 'multiply'
      }
    : {}

  return (
    <div className='relative flex h-full min-h-dvh flex-col overflow-y-auto'>
      {/* Фоновый слой */}
      <div className='absolute inset-0 -z-10' style={{ ...backgroundStyle }} />

      {/* Наложение с прозрачностью */}
      {overlayColor && (
        <div className='absolute inset-0' style={overlayStyle} />
      )}

      {/* Слой с размытием */}
      <div
        className='absolute inset-0 -z-[5]'
        style={{
          backdropFilter: blurValue,
          WebkitBackdropFilter: blurValue // Для Safari
        }}
      />

      {/* Основной контент */}
      <div className='relative flex flex-col overflow-y-auto'>
        <RocketHeader />
        <RocketHero
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />

        {isActiveTokRocet && (
          <RocketTokenomics
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        )}
        {isActiveMissonRoc && <RocketRoadmap primaryColor={primaryColor} />}

        <RocketMissionControl
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />

        <RocketFAQ primaryColor={primaryColor} />
        <RocketJoin primaryColor={primaryColor} />
      </div>
    </div>
  )
}
