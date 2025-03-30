import { useTokenomicsStore } from '../../store/useTokenomicsStore'

interface TokenomicsDisplayProps {
  style?: React.CSSProperties
}

export const TokenomicsDisplay = ({ style }: TokenomicsDisplayProps) => {
  const { items, colorTK, handleChooseTK } = useTokenomicsStore()

  // Функция для преобразования HEX в RGBA с прозрачностью 50%
  const hexToRgba = (hex: string, alpha = 0.5) => {
    let r = 0,
      g = 0,
      b = 0

    if (hex.length === 7) {
      r = parseInt(hex.substring(1, 3), 16)
      g = parseInt(hex.substring(3, 5), 16)
      b = parseInt(hex.substring(5, 7), 16)
    }

    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  return (
    <div className='flex w-full flex-col items-start space-y-4'>
      <div className='grid w-full grid-cols-2 gap-4'>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={` ${index % 2 === 0 && index === items.length - 1 ? 'col-span-2' : 'col-span-1'} flex min-h-32 items-start justify-start overflow-hidden break-words rounded-[20px] p-6`}
            style={{
              backgroundColor: handleChooseTK
                ? hexToRgba(colorTK, 0.5)
                : colorTK
            }}
          >
            <div className='flex w-full flex-col space-y-2'>
              <h1
                className='whitespace-normal break-words text-4xl font-semibold'
                style={style}
              >
                {item.value1}
              </h1>
              <span
                className='text-2xs whitespace-normal break-words font-semibold'
                style={style}
              >
                {item.value2}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
