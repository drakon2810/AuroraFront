import { RocketFAQ } from './FAQ'
import { RocketHeader } from './Header'
import { RocketHero } from './Hero'
import { RocketJoin } from './Join'
import { RocketMissionControl } from './MissionControl'
import { RocketRoadmap } from './Roadmap'
import { RocketTokenomics } from './Tokenomics'
import { cursor } from '@/components/cursor/cursor'
import { TemplateContext } from '@/contexts/TemplateContext'
import { loadFonts } from '@/lib/utils'
import { useJoinTheMission } from '@/store/useJoinTheMission'
import { useMissionConrol } from '@/store/useMissionConroll'
import { useMissionFaq } from '@/store/useMissionFaq'
import { useTimelineStore } from '@/store/useMissionTimeline'
import { useStylesStore } from '@/store/useStulesStore'
import { useTokenomicsStoreRocet } from '@/store/useTokenomicsStoreRocet'
import { useFallingImagesStore } from '@/store/useWidgetsStore'
import { TemplateContextValues } from '@/types/contexts'
import { ColorData } from '@/types/templates'
import { FC, useContext } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

loadFonts(['Orbitron'])

export const Rocket: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  if (!data) return <span>Something went wrong...</span>

  const { isActiveTokRocet } = useTokenomicsStoreRocet((state) => state)
  const { isActiveMissonRoc } = useTimelineStore((state) => state)
  const { isActiveMissonControll } = useMissionConrol((state) => state)
  const { isActiveMissonFaq } = useMissionFaq((state) => state)
  const { isActiveMissonJoin } = useJoinTheMission((state) => state)

  const { customCursor } = useFallingImagesStore((state) => state)
  const getCursorValue = (cursorConfig: number | string | null) => {
    if (cursorConfig === null) return null
    if (typeof cursorConfig === 'number') return cursor[cursorConfig]
    return cursorConfig
  }
  const elementToDataUrl = (element: React.ReactElement) => {
    const svgString = renderToStaticMarkup(element)
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`
  }

  const currentCursor = getCursorValue(customCursor)

  const cursorStyle = currentCursor
    ? {
        cursor: `url("${
          typeof currentCursor === 'string'
            ? currentCursor
            : elementToDataUrl(currentCursor)
        }"), auto`
      }
    : {}
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
    <div
      className='relative flex h-full min-h-dvh flex-col overflow-y-auto'
      style={{ ...cursorStyle }}
    >
      <div className='absolute inset-0 -z-10' style={{ ...backgroundStyle }} />

      {overlayColor && (
        <div className='absolute inset-0' style={overlayStyle} />
      )}

      <div
        className='absolute inset-0 -z-[5]'
        style={{
          backdropFilter: blurValue,
          WebkitBackdropFilter: blurValue
        }}
      />

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

        {isActiveMissonControll && (
          <RocketMissionControl
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        )}
        {isActiveMissonFaq && <RocketFAQ primaryColor={primaryColor} />}
        {isActiveMissonJoin && <RocketJoin primaryColor={primaryColor} />}
      </div>
    </div>
  )
}
