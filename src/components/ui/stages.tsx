import { useRoadMapStore } from '@/store/useRoadMapStore'
import { useStylesStore } from '@/store/useStulesStore'

export const Stages = () => {
  const { secondary, colorSec } = useStylesStore((state) => state)
  const {
    stageOneRM,
    stageTwoRM,
    stageFreeRM,
    teaxtAreaOneRM,
    teaxtAreaTwoRM,
    teaxtAreaFreeRM,
    colorBackgrond
  } = useRoadMapStore((state) => state)

  return (
    <div className='mx-auto flex gap-4 p-5 font-sans'>
      <div
        className='mb-8 w-[290px] flex-1 overflow-hidden rounded-[20px] p-4'
        style={{ backgroundColor: colorBackgrond }}
      >
        <h1
          className='mb-4 whitespace-pre-wrap break-words text-2xl font-bold'
          style={{ color: colorSec || 'black', fontFamily: secondary }}
        >
          {stageOneRM || 'Stage 1'}
        </h1>
        <p
          className='break-words text-base leading-relaxed'
          style={{ color: colorSec || 'black', fontFamily: secondary }}
        >
          {teaxtAreaOneRM || 'STAGE DESCRIPTION GOES HERE/MYFA'}
        </p>
      </div>

      <div
        className='mb-8 w-[290px] flex-1 overflow-hidden rounded-[20px] p-4'
        style={{ backgroundColor: colorBackgrond }}
      >
        <h1
          className='mb-4 whitespace-pre-wrap break-words text-2xl font-bold'
          style={{ color: colorSec || 'black', fontFamily: secondary }}
        >
          {stageTwoRM || 'Stage 2'}
        </h1>
        <p
          className='break-words text-base leading-relaxed'
          style={{ color: colorSec || 'black', fontFamily: secondary }}
        >
          {teaxtAreaTwoRM || 'STAGE DESCRIPTION GOES HERE'}
        </p>
      </div>

      <div
        className='mb-8 w-[290px] flex-1 overflow-hidden rounded-[20px] p-4'
        style={{ backgroundColor: colorBackgrond }}
      >
        <h1
          className='mb-4 whitespace-pre-wrap break-words text-2xl font-bold'
          style={{ color: colorSec || 'black', fontFamily: secondary }}
        >
          {stageFreeRM || 'Stage 3'}
        </h1>
        <p
          className='break-words text-base leading-relaxed'
          style={{ color: colorSec || 'black', fontFamily: secondary }}
        >
          {teaxtAreaFreeRM || 'STAGE DESCRIPTION GOES HERE'}
        </p>
      </div>
    </div>
  )
}
