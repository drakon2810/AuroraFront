import { FontsPickerItem } from './FontsPickerItem'
import { Loading } from '@/components/Loading'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { fallbackFonts } from '@/consts'
import { loadFonts } from '@/lib/utils'
import { getFonts } from '@/services/api'
import { useStylesStore } from '@/store/useStulesStore'
import { useQuery } from '@tanstack/react-query'
import { ChevronsUpDownIcon } from 'lucide-react'
import { FC, useState } from 'react'

interface FontsPickerProps {
  onChange?: (value: string) => void
}

export const FontsPickerPrim: FC<FontsPickerProps> = ({ onChange }) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['fonts'],
    queryFn: getFonts
  })

  const [open, setOpen] = useState(false)
  const [currentFontFamily, setCurrentFontFamily] = useState('')
  const { setPrimary } = useStylesStore((state) => state)

  const selectFont = (value: string) => {
    setCurrentFontFamily(value)
    setPrimary(value)
    setOpen(false)
    onChange && onChange(value)

    loadFonts([value])
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {currentFontFamily || 'Select font'}
          <ChevronsUpDownIcon className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search font...' className='h-9' />
          <CommandList>
            {isLoading && (
              <Loading className='flex h-full items-center justify-center py-4' />
            )}
            {isSuccess && <CommandEmpty>No font found.</CommandEmpty>}
            <CommandGroup>
              {isSuccess &&
                data?.items?.map(({ family: name }) => (
                  <FontsPickerItem
                    key={name}
                    name={name}
                    selectFont={selectFont}
                    isSelected={name === currentFontFamily}
                  />
                ))}

              {isError &&
                fallbackFonts.map((name) => (
                  <FontsPickerItem
                    key={name}
                    name={name}
                    selectFont={selectFont}
                    isSelected={name === currentFontFamily}
                  />
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
