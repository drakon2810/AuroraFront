import { RocketCard } from './Card'
import { Text } from '@/components/TemplateItems/Text'
import { cn } from '@/lib/utils'
import { useStylesStore } from '@/store/useStulesStore'
import { FC } from 'react'

interface RocketTokenomicsProps {
  primaryColor: string
  secondaryColor: string
}

export const RocketTokenomics: FC<RocketTokenomicsProps> = ({
  primaryColor,
  secondaryColor
}) => {
  const {
    colorBackgroundSec,
    gradientBackgroundSec,
    imgBackgroundSec,
    activeSizeSec,
    overlayColorSec,
    overlayOpacitySec
  } = useStylesStore((state) => state)

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
        <Text
          fieldName='tokenomicsTitle'
          defaultColor={primaryColor}
          className={{ text: 'tracking-wider' }}
          as='h2'
        />
        <div className='flex flex-wrap justify-center gap-4'>
          {['first', 'second', 'third', 'fourth'].map((item) => (
            <RocketCard key={item} className='items-center'>
              <Text
                fieldName={`${item}TokenomicsIcon`}
                defaultColor={primaryColor}
                style={{ filter: `drop-shadow(0 0 10px ${primaryColor})` }}
              />
              <Text
                fieldName={`${item}TokenomicsTitle`}
                defaultColor={primaryColor}
              />
              <Text
                fieldName={`${item}TokenomicsValue`}
                defaultColor={secondaryColor}
              />
            </RocketCard>
          ))}
        </div>
      </div>
    </section>
  )
}
