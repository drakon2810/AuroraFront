import { RocketCard } from './Card'
import { useTimelineStore } from '@/store/useMissionTimeline'
import { useStylesStore } from '@/store/useStulesStore'
import { FC } from 'react'

export const RocketRoadmap: FC<{ primaryColor: string }> = ({
  primaryColor
}) => {
  const {
    titleTimeline,
    blocksFirstPhase,
    blocksFirstTitle,
    blocksFirstDesc,
    blocksFirstData,
    blocksSecondPhase,
    blocksSecondTitle,
    blocksSecondDesc,
    blocksSecondData,
    blocksThirdPhase,
    blocksThirdTitle,
    blocksThirdDesc,
    blocksThirdData
  } = useTimelineStore()
  const { colorPrim, colorSec } = useStylesStore((state) => state)

  const blocks = [
    {
      phase: blocksFirstPhase,
      title: blocksFirstTitle,
      desc: blocksFirstDesc,
      data: blocksFirstData
    },
    {
      phase: blocksSecondPhase,
      title: blocksSecondTitle,
      desc: blocksSecondDesc,
      data: blocksSecondData
    },
    {
      phase: blocksThirdPhase,
      title: blocksThirdTitle,
      desc: blocksThirdDesc,
      data: blocksThirdData
    }
  ]

  const textBaseStyle = {
    WebkitTextStroke: '0px rgb(255, 0, 0)',
    backgroundColor: 'transparent',
    wordBreak: 'break-word' as const,
    whiteSpace: 'pre-wrap' as const
  }

  return (
    <section className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 py-24'>
      <h2
        style={{
          ...textBaseStyle,
          fontFamily: 'Orbitron',
          fontSize: '48px',
          color: colorPrim || 'rgb(59, 130, 246)'
        }}
      >
        {titleTimeline}
      </h2>
      <div className='flex w-full flex-wrap justify-center gap-4'>
        {blocks.map((block, index) => (
          <RocketCard key={index} className='max-w-[370px] flex-auto'>
            <div
              className='max-w-max rounded-full px-4 py-2'
              style={{ background: primaryColor }}
            >
              <p
                style={{
                  ...textBaseStyle,
                  fontFamily: 'Orbitron',
                  fontSize: '14px',
                  color: colorSec || 'rgb(255, 255, 255)'
                }}
              >
                {block.phase}
              </p>
            </div>

            <p
              style={{
                ...textBaseStyle,
                fontFamily: 'Orbitron',
                fontSize: '24px',
                color: colorSec || 'rgb(255, 255, 255)'
              }}
            >
              {block.title}
            </p>

            <p
              style={{
                ...textBaseStyle,
                fontFamily: 'Inter',
                fontSize: '16px',
                color: colorSec || 'rgb(192, 191, 188)'
              }}
            >
              {block.desc}
            </p>

            <p
              style={{
                ...textBaseStyle,
                fontFamily: 'Orbitron',
                fontSize: '14px',
                color: colorSec || 'rgb(255, 255, 255)'
              }}
            >
              {block.data}
            </p>
          </RocketCard>
        ))}
      </div>
    </section>
  )
}
