import { TemplateItemError } from '@/components/TemplateItems/Error'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useCopy } from '@/hooks/useCopy'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

export const ImpressiveCopyButton: FC = () => {
  const { isCopied, copy } = useCopy()
  const { data } = useContext(TemplateContext) as TemplateContextValues

  if (!data) return <TemplateItemError />

  return (
    <div
      onClick={copy}
      className='button flex items-center justify-between gap-4 rounded-2xl'
    >
      <Text fieldName='contractAddress' placeholder='Contract Address' />
      <button className='impressive-block pointer-events-none rounded-xl bg-orange-500 px-4 py-2 font-dino text-xl font-bold uppercase text-white'>
        {isCopied ? 'copied' : 'copy'}
      </button>
    </div>
  )
}
