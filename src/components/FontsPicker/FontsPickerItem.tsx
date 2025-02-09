import { CommandItem } from '../ui/command'
import { Check } from 'lucide-react'
import { FC } from 'react'

interface FontsPickerItemProps {
  name: string
  selectFont: (value: string) => void
  isSelected: boolean
}

export const FontsPickerItem: FC<FontsPickerItemProps> = ({
  name,
  selectFont,
  isSelected
}) => {
  return (
    <CommandItem value={name} onSelect={selectFont}>
      {name}
      {isSelected && <Check className='ml-auto' />}
    </CommandItem>
  )
}
