import { RocketButton } from './Button'
import { Text } from '@/components/TemplateItems/Text'
import { cursor } from '@/components/cursor/cursor'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useStylesStore } from '@/store/useStulesStore'
import { useFallingImagesStore } from '@/store/useWidgetsStore'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export const RocketHeader: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const { customPointer } = useFallingImagesStore((state) => state)
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
  const { colorPrim } = useStylesStore((state) => state)
  if (!data) return

  return (
    <header className='sticky top-0 z-10 border-b border-neutral-800 bg-[#0a0a0a]/95 backdrop-blur-md'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3'>
        <Text fieldName='ticker' style={{ color: colorPrim }} />
        <RocketButton
          href={data.links?.buyTickerLink?.url}
          style={pointerStyle}
        >
          <Text fieldName='buyTicker' style={{ color: colorPrim }} />
        </RocketButton>
      </div>
    </header>
  )
}
