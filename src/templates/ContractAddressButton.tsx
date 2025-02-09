import { Button } from './Button'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useCopy } from '@/hooks/useCopy'
import { cn } from '@/lib/utils'
import { TemplateContextValues } from '@/types/contexts'
import { CircleCheckBig, Copy } from 'lucide-react'
import { FC, useContext } from 'react'

export const ContractAddressButton: FC<{ className?: string }> = ({
  className
}) => {
  const { isCopied, copy } = useCopy()
  const { data } = useContext(TemplateContext) as TemplateContextValues

  if (!data) return <span>Something went wrong...</span>

  return (
    <Button
      onClick={copy}
      className={cn(
        'flex items-center justify-center gap-4 hover:scale-[0.97] hover:opacity-80',
        className
      )}
    >
      <Text fieldName='contractAddress' placeholder='Contract address' />
      {isCopied && (
        <CircleCheckBig size={28} className='pointer-events-none text-black' />
      )}
      {!isCopied && (
        <Copy size={28} className='pointer-events-none text-black' />
      )}
    </Button>
  )
}
