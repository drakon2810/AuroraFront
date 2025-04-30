import { RocketCard } from './Card'
import { Text } from '@/components/TemplateItems/Text'
import { cn } from '@/lib/utils'
import { useStylesStore } from '@/store/useStulesStore'
import { useTokenomicsStoreRocet } from '@/store/useTokenomicsStoreRocet'
import { FC } from 'react'

interface RocketTokenomicsProps {
  primaryColor: string
  secondaryColor: string
}

export const RocketTokenomics: FC<RocketTokenomicsProps> = ({
  primaryColor
}) => {
  const {
    colorBackgroundSec,
    gradientBackgroundSec,
    imgBackgroundSec,
    activeSizeSec,
    overlayColorSec,
    overlayOpacitySec,
    colorPrim,
    colorSec
  } = useStylesStore((state) => state)
  const {
    titleRocet,
    blocksFirst,
    blocksFirstTilte,
    blocksSecond,
    blocksSecondTilte,
    blocksTherd,
    blocksTherdTilte,
    blocksFour,
    blocksFourTilte
  } = useTokenomicsStoreRocet((state) => state)

  // Применение стилей фона с типами
  const backgroundStyle: React.CSSProperties = imgBackgroundSec
    ? { backgroundImage: `url(${imgBackgroundSec})` }
    : gradientBackgroundSec
      ? { backgroundImage: gradientBackgroundSec }
      : colorBackgroundSec
        ? { backgroundColor: colorBackgroundSec }
        : { backgroundColor: '#0a0a0a' }

  // Динамическое размытие
  const blurValue =
    activeSizeSec === 'small'
      ? 'blur(4px)'
      : activeSizeSec === 'medium'
        ? 'blur(8px)'
        : activeSizeSec === 'large'
          ? 'blur(12px)'
          : 'none'

  // Функция для преобразования цвета hex и прозрачности в rgba
  const convertToRGBA = (hex: string, opacity: number): string => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  // Стили для оверлея с прозрачностью
  const overlayStyle: React.CSSProperties = overlayColorSec
    ? {
        backgroundColor: convertToRGBA(overlayColorSec, overlayOpacitySec),
        mixBlendMode: 'multiply'
      }
    : {}

  return (
    <section
      style={{ ...backgroundStyle }}
      className={cn('py-24', {
        'backdrop-blur-sm': activeSizeSec === 'small',
        'backdrop-blur-md': activeSizeSec === 'medium',
        'backdrop-blur-lg': activeSizeSec === 'large'
      })}
    >
      {/* Слой с размытие */}
      <div
        className='absolute inset-0 -z-[5]'
        style={{
          backdropFilter: blurValue,
          WebkitBackdropFilter: blurValue // Для Safari
        }}
      />

      {/* Слой с оверлеем */}
      {overlayColorSec && (
        <div className='absolute inset-0' style={overlayStyle} />
      )}

      <div className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12'>
        <h2
          style={{
            fontFamily: 'Orbitron',
            fontSize: '48px',
            color: colorPrim || 'rgb(59, 130, 246)',
            WebkitTextStroke: '0px rgb(255, 0, 0)',
            backgroundColor: 'transparent'
          }}
        >
          {titleRocet}
        </h2>

        <div className='flex flex-wrap justify-center gap-4'>
          {[
            {
              iconField: 'firstTokenomicsIcon',
              title: blocksFirstTilte,
              value: blocksFirst
            },
            {
              iconField: 'secondTokenomicsIcon',
              title: blocksSecondTilte,
              value: blocksSecond
            },
            {
              iconField: 'thirdTokenomicsIcon',
              title: blocksTherdTilte,
              value: blocksTherd
            },
            {
              iconField: 'fourthTokenomicsIcon',
              title: blocksFourTilte,
              value: blocksFour
            }
          ].map((item, index) => (
            <RocketCard key={index} className='items-center'>
              <Text
                fieldName={item.iconField}
                defaultColor={primaryColor}
                style={{ filter: `drop-shadow(0 0 10px ${primaryColor})` }}
              />
              <p
                style={{
                  fontFamily: 'Orbitron',
                  fontSize: '20px',
                  color: colorPrim || 'rgb(59, 130, 246)',
                  WebkitTextStroke: '0px rgb(255, 0, 0)',
                  backgroundColor: 'transparent'
                }}
              >
                {item.value}
              </p>
              <h4
                style={{
                  fontFamily: 'Orbitron',
                  fontSize: '32px',
                  color: colorSec || 'rgb(192, 191, 188)',
                  WebkitTextStroke: '0px rgb(255, 0, 0)',
                  backgroundColor: 'transparent'
                }}
              >
                {item.title}
              </h4>
            </RocketCard>
          ))}
        </div>
      </div>
    </section>
  )
}
