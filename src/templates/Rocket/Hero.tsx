import { AnimateCircle } from './AnimatedCircle'
import { RocketButton } from './Button'
import { RocketCopyButton } from './CopyButton'
import { Text } from '@/components/TemplateItems/Text'
import { cursor } from '@/components/cursor/cursor'
import { MarqueeStr } from '@/components/ui/MarqueeStr'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useGeneralStore } from '@/store/useGeneralStore'
import { useMarqueeStore } from '@/store/useMarqueeStore'
import { useStylesStore } from '@/store/useStulesStore'
import { useFallingImagesStore } from '@/store/useWidgetsStore'
import { TemplateContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { FC, useContext } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

interface RocketHeroProps {
  primaryColor: string
  secondaryColor: string
}

export const RocketHero: FC<RocketHeroProps> = ({
  primaryColor,
  secondaryColor
}) => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const { customPointer } = useFallingImagesStore((state) => state)
  const { colorPrim, colorSec } = useStylesStore((state) => state)
  const tickerData = data?.['ticker'] as TextData | undefined
  const { isHideToken } = useGeneralStore((state) => state)
  const { isActiveMarquee, marqueeUp, marqueeMidle } = useMarqueeStore(
    (state) => state
  )
  const getCursorValue = (cursorConfig: number | string | null) => {
    if (cursorConfig === null) return null

    if (typeof cursorConfig === 'number') {
      return cursor[cursorConfig]
    }

    return cursorConfig
  }

  const elementToDataUrl = (element: React.ReactElement) => {
    const svgString = renderToStaticMarkup(element)
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`
  }
  const currentPointer = getCursorValue(customPointer)
  const pointerStyle = {
    cursor: currentPointer
      ? `url("${
          typeof currentPointer === 'string'
            ? currentPointer
            : elementToDataUrl(currentPointer)
        }"), pointer`
      : 'pointer'
  }
  if (!data) return

  return (
    <div className='mx-auto flex min-h-dvh w-full max-w-6xl flex-auto items-center gap-40 py-24'>
      <div className='max-w-screen absolute left-1/2 top-[70px] z-50 w-full -translate-x-1/2 overflow-hidden px-4'>
        {isActiveMarquee && marqueeUp && (
          <MarqueeStr
            text={tickerData?.value || 'Ticker'}
            style={{
              fontFamily: colorSec,
              color: colorSec || 'green',
              fontWeight: 600
            }}
          />
        )}
      </div>

      <div className='flex max-w-lg flex-col gap-6'>
        <Text
          fieldName='heroTitle'
          style={{ color: colorPrim || primaryColor }}
          className={{ text: 'tracking-wider' }}
          as='h1'
        />
        <Text fieldName='ticker' style={{ color: colorSec }} />
        <Text
          fieldName='description'
          placeholder='Description...'
          style={{ color: colorSec }}
        />
        <div className='flex flex-col gap-2'>
          <Text fieldName='contractAddressLabel' style={{ color: colorSec }} />
          <RocketCopyButton color={colorPrim || primaryColor} />
        </div>
        <div className='flex gap-4'>
          <RocketButton
            href={data.links?.buyNowLink?.url}
            className='px-8 py-4'
            style={{
              background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
              ...pointerStyle
            }}
          >
            <Text fieldName='buyNow' style={{ color: colorPrim }} />
          </RocketButton>
          <RocketButton
            href={data.links?.joinUsLink?.url}
            className='px-8 py-4'
            style={pointerStyle}
          >
            <Text fieldName='joinUs' style={{ color: colorPrim }} />
          </RocketButton>
        </div>
      </div>
      {!isHideToken && <AnimateCircle color={primaryColor} />}

      <div className='max-w-screen absolute left-1/2 top-[880px] z-50 w-full -translate-x-1/2 overflow-hidden px-4'>
        {isActiveMarquee && marqueeMidle && (
          <MarqueeStr
            text={tickerData?.value || 'Ticker'}
            style={{
              fontFamily: colorSec,
              color: colorSec || 'green',
              fontWeight: 600,
              whiteSpace: 'nowrap'
            }}
          />
        )}
      </div>
    </div>
  )
}
