import { RocketCard } from './Card'
import { useMissionFaq } from '@/store/useMissionFaq'
import { useStylesStore } from '@/store/useStulesStore'
import { FC } from 'react'

export const RocketFAQ: FC<{ primaryColor: string }> = ({ primaryColor }) => {
  const {
    colorBackground,
    backgroundGradient,
    imgBackground,
    activeSize,
    overlayColor,
    overlayOpacity,
    colorPrim,
    colorSec
  } = useStylesStore((state) => state)

  const {
    titleFaq,
    firstBlockTitleFaq,
    secondBlockTitleFaq,
    thierdBlockTitleFaq,
    fourBlockTitleFaq,
    firstBlockDescriptionFaq,
    secondBlockDescriptionFaq,
    thierdBlockDescriptionFaq,
    fourBlockDescriptionFaq
  } = useMissionFaq()

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
        backgroundColor: `${overlayColor}${Math.round(overlayOpacity * 255)
          .toString(16)
          .padStart(2, '0')}`,
        mixBlendMode: 'multiply'
      }
    : {}

  const blocks = [
    {
      title: firstBlockTitleFaq,
      description: firstBlockDescriptionFaq
    },
    {
      title: secondBlockTitleFaq,
      description: secondBlockDescriptionFaq
    },
    {
      title: thierdBlockTitleFaq,
      description: thierdBlockDescriptionFaq
    },
    {
      title: fourBlockTitleFaq,
      description: fourBlockDescriptionFaq
    }
  ]

  return (
    <section
      style={{ ...backgroundStyle }}
      className={`relative py-24 ${
        activeSize === 'small'
          ? 'backdrop-blur-sm'
          : activeSize === 'medium'
            ? 'backdrop-blur-md'
            : activeSize === 'large'
              ? 'backdrop-blur-lg'
              : ''
      }`}
    >
      <div
        className='absolute inset-0 -z-[5]'
        style={{
          backdropFilter: blurValue,
          WebkitBackdropFilter: blurValue
        }}
      />
      {overlayColor && (
        <div className='absolute inset-0' style={overlayStyle} />
      )}

      <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-12'>
        <h2
          style={{
            fontFamily: 'Orbitron',
            fontSize: '48px',
            color: colorPrim || primaryColor,
            backgroundColor: 'transparent',
            textAlign: 'center'
          }}
        >
          {titleFaq}
        </h2>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {blocks.map((block, idx) => (
            <RocketCard key={idx} className='max-w-full'>
              <p
                style={{
                  fontFamily: 'Orbitron',
                  fontSize: '20px',
                  color: colorPrim || 'rgb(59, 130, 246)',
                  WebkitTextStroke: '0px rgb(255, 0, 0)',
                  backgroundColor: 'transparent',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  whiteSpace: 'normal',
                  textAlign: 'left'
                }}
              >
                {block.title}
              </p>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  color: colorSec || 'rgb(192, 191, 188)',
                  WebkitTextStroke: '0px rgb(255, 0, 0)',
                  backgroundColor: 'transparent',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  whiteSpace: 'normal',
                  textAlign: 'left'
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
