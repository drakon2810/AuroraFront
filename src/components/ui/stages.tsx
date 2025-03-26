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
    teaxtAreaFreeRM
  } = useRoadMapStore((state) => state)

  return (
    <div className='mx-auto flex gap-4 p-5 font-sans'>
      {/* Stage 1 - с закруглением слева */}
      <div className='mb-8 w-[290px] flex-1 overflow-hidden rounded-[20px] bg-white p-4'>
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

      {/* Stage 2 */}
      <div className='mb-8 w-[290px] flex-1 overflow-hidden rounded-[20px] bg-white p-4'>
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

      {/* Stage 3 - с закруглением справа */}
      <div className='mb-8 w-[290px] flex-1 overflow-hidden rounded-[20px] bg-white p-4'>
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
