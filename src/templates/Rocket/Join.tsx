import { RocketCard } from './Card'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useJoinTheMission } from '@/store/useJoinTheMission'
import { useStylesStore } from '@/store/useStulesStore'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

export const RocketJoin: FC<{ primaryColor: string }> = ({ primaryColor }) => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  if (!data) return null
  const {
    titleJoin,
    firstBlockTitleJoin,
    secondBlockTitleJoin,
    thierdBlockTitleJoin,
    firstBlockDescriptionJoin,
    secondBlockDescriptionJoin,
    thierdBlockDescriptionJoin,
    firstBlockLinkJoin,
    secondBlockLinkJoin,
    thierdBlockLinkJoin
  } = useJoinTheMission((state) => state)
  const {
    colorBackgroundSec,
    gradientBackgroundSec,
    imgBackgroundSec,
    activeSizeSec,
    overlayColorSec,
    overlayOpacitySec
  } = useStylesStore((state) => state)

  const items = [
    {
      title: firstBlockTitleJoin,
      description: firstBlockDescriptionJoin,
      URLFieldName: firstBlockLinkJoin
    },
    {
      title: secondBlockTitleJoin,
      description: secondBlockDescriptionJoin,
      URLFieldName: secondBlockLinkJoin
    },
    {
      title: thierdBlockTitleJoin,
      description: thierdBlockDescriptionJoin,
      URLFieldName: thierdBlockLinkJoin
    }
  ]

  const backgroundStyle = imgBackgroundSec
    ? {
        backgroundImage: `url(${imgBackgroundSec})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : gradientBackgroundSec
      ? { backgroundImage: gradientBackgroundSec }
      : colorBackgroundSec
        ? { backgroundColor: colorBackgroundSec }
        : { backgroundColor: '#0a0a0a' }

  const blurValue =
    activeSizeSec === 'small'
      ? 'blur(4px)'
      : activeSizeSec === 'medium'
        ? 'blur(8px)'
        : activeSizeSec === 'large'
          ? 'blur(12px)'
          : 'none'

  // Применение стилей для оверлея с прозрачностью
  const overlayStyle: React.CSSProperties = overlayColorSec
    ? {
        backgroundColor: `${overlayColorSec}${Math.round(
          overlayOpacitySec * 255
        )
          .toString(16)
          .padStart(2, '0')}`, // Преобразование opacity в формат hex
        mixBlendMode: 'multiply'
      }
    : {}

  // Функция для подсветки блока, если ссылка заполнена
  const highlightClass = (link: string) =>
    link
      ? 'hover:border-blue-500 hover:shadow-[0px_0px_40px_8px_rgba(255,_255,_255,_0.1)]'
      : ''

  return (
    <section className='relative py-24'>
      {/* Фоновый слой */}
      <div className='absolute inset-0 -z-10' style={backgroundStyle} />

      {/* Слой с размытием */}
      <div
        className='absolute inset-0 -z-[5]'
        style={{
          backdropFilter: blurValue,
          WebkitBackdropFilter: blurValue
        }}
      />

      {/* Слой с оверлеем */}
      {overlayColorSec && (
        <div className='absolute inset-0' style={overlayStyle} />
      )}

      {/* Контент */}
      <div className='relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-12'>
        <h2
          style={{
            fontFamily: 'Orbitron',
            fontSize: '48px',
            color: 'rgb(59, 130, 246)',
            backgroundColor: 'transparent'
          }}
        >
          {titleJoin}
        </h2>
        <button className='flex w-full flex-wrap justify-center gap-4'>
          {items.map(({ title, description, URLFieldName }) => (
            <a
              href={URLFieldName}
              key={title}
              target='_blank'
              rel='noopener noreferrer'
            >
              <RocketCard
                className={`max-w-[370px] flex-auto items-center transition-transform hover:scale-105 ${highlightClass(
                  URLFieldName
                )}`}
              >
                <h3 className='text-white'>{title}</h3>
                <p className='text-[#c0bfbc]'>{description}</p>
              </RocketCard>
            </a>
          ))}
        </button>
      </div>
    </section>
  )
}
