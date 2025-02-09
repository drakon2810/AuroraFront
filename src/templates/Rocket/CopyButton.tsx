import { Text } from '@/components/TemplateItems/Text'
import { useCopy } from '@/hooks/useCopy'
import { Check, Copy } from 'lucide-react'
import { FC } from 'react'

export const RocketCopyButton: FC<{ color: string }> = ({ color }) => {
  const { isCopied, copy } = useCopy()

  return (
    <div
      onClick={copy}
      className='flex items-center justify-between gap-4 rounded-xl border border-neutral-800 bg-black/40 p-3'
    >
      <Text
        fieldName='contractAddress'
        placeholder='Contract Address'
        defaultColor={color}
      />
      <button
        className='pointer-events-none rounded-md bg-neutral-700 p-2 font-bold uppercase'
        style={{ color }}
      >
        {isCopied ? <Check size={18} /> : <Copy size={18} />}
      </button>
    </div>
  )
}
