import { RocketCard } from './Card'
import { cn } from '@/lib/utils'
import { useMissionConrol } from '@/store/useMissionConroll'
import { useStylesStore } from '@/store/useStulesStore'
import { FC } from 'react'

interface RocketMissionControlProps {
  primaryColor: string
  secondaryColor: string
}

export const RocketMissionControl: FC<RocketMissionControlProps> = ({}) => {
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
    titleControl,
    firstBlockImg,
    secondBlockImg,
    thierdBlockImg,
    firstBlockTitle,
    secondBlockTitle,
    thierdBlockTitle,
    firstBlockDescription,
    secondBlockDescription,
    thierdBlockDescription
  } = useMissionConrol((state) => state)

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

  const overlayStyle: React.CSSProperties = overlayColorSec
    ? {
        backgroundColor: `${overlayColorSec}${Math.round(
          overlayOpacitySec * 255
        )
          .toString(16)
          .padStart(2, '0')}`,
        mixBlendMode: 'multiply'
      }
    : {}

  const blocks = [
    {
      img: firstBlockImg,
      title: firstBlockTitle,
      description: firstBlockDescription
    },
    {
      img: secondBlockImg,
      title: secondBlockTitle,
      description: secondBlockDescription
    },
    {
      img: thierdBlockImg,
      title: thierdBlockTitle,
      description: thierdBlockDescription
    }
  ]

  return (
    <section
      style={{ ...backgroundStyle }}
      className={cn('relative py-24', {
        'backdrop-blur-sm': activeSizeSec === 'small',
        'backdrop-blur-md': activeSizeSec === 'medium',
        'backdrop-blur-lg': activeSizeSec === 'large'
      })}
    >
      <div
        className='absolute inset-0 -z-[5]'
        style={{
          backdropFilter: blurValue,
          WebkitBackdropFilter: blurValue
        }}
      />
      {overlayColorSec && (
        <div className='absolute inset-0' style={overlayStyle} />
      )}
      <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-12'>
        <h2
          style={{
            fontFamily: 'Orbitron',
            fontSize: '48px',
            color: colorPrim || 'rgb(59, 130, 246)',
            backgroundColor: 'transparent'
          }}
        >
          {titleControl}
        </h2>

        <div className='flex w-full flex-wrap justify-center gap-4'>
          {blocks.map((block, idx) => (
            <RocketCard
              key={idx}
              className='max-w-[370px] flex-auto items-center'
            >
              <img
                src={
                  block.img
                    ? typeof block.img === 'string'
                      ? block.img
                      : URL.createObjectURL(block.img)
                    : '/src/assets/images/placeholder.webp'
                }
                alt={`block-img-${idx}`}
                className='mb-4 h-48 w-48 rounded-full object-cover'
              />
              <p
                style={{
                  fontFamily: 'Orbitron',
                  fontSize: '32px',
                  color: colorSec || 'rgb(192, 191, 188)',
                  backgroundColor: 'transparent',
                  wordWrap: 'break-word', // Перенос длинных слов
                  overflowWrap: 'break-word', // Альтернатива для wordWrap
                  whiteSpace: 'normal', // Разрешить перенос строк
                  textAlign: 'center', // Выравнивание по центру
                  maxWidth: '100%' // Ограничение по ширине
                }}
              >
                {block.title}
              </p>
              <p
                style={{
                  fontFamily: 'Orbitron',
                  fontSize: '20px',
                  color: colorPrim || 'rgb(59, 130, 246)',
                  backgroundColor: 'transparent',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  whiteSpace: 'normal',
                  textAlign: 'center',
                  maxWidth: '100%'
                }}
              >
                {block.description}
              </p>
            </RocketCard>
          ))}
        </div>
      </div>
    </section>
  )
}
