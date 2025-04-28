import { RocketCard } from './Card'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { cn } from '@/lib/utils'
import { useStylesStore } from '@/store/useStulesStore'
import { FC } from 'react'

interface RocketMissionControlProps {
  primaryColor: string
  secondaryColor: string
}

export const RocketMissionControl: FC<RocketMissionControlProps> = ({
  primaryColor
}) => {
  const {
    colorBackgroundSec,
    gradientBackgroundSec,
    imgBackgroundSec,
    activeSizeSec,
    overlayColorSec,
    overlayOpacitySec
  } = useStylesStore((state) => state)

  const backgroundStyle = imgBackgroundSec
    ? { backgroundImage: `url(${imgBackgroundSec})` }
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

  return (
    <section
      style={{ ...backgroundStyle }}
      className={cn('py-24', {
        'backdrop-blur-sm': activeSizeSec === 'small',
        'backdrop-blur-md': activeSizeSec === 'medium',
        'backdrop-blur-lg': activeSizeSec === 'large'
      })}
    >
      {/* Слой с размытием */}
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
          fieldName='missionControlTitle'
          defaultColor={primaryColor}
          className={{ text: 'tracking-wider' }}
          as='h2'
        />
        <div className='flex w-full flex-wrap justify-center gap-4'>
          {['first', 'second', 'third'].map((item) => (
            <RocketCard
              key={item}
              className='max-w-[370px] flex-auto items-center'
            >
              <Image
                fieldName={`${item}ControlAvatar`}
                className={{ image: 'rounded-full object-contain' }}
              />
              <Text
                fieldName={`${item}ControlName`}
                defaultColor={primaryColor}
              />
              <Text
                fieldName={`${item}ControlJob`}
                defaultColor={primaryColor}
              />
            </RocketCard>
          ))}
        </div>
      </div>
    </section>
  )
}
