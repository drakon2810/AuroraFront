import { Customize } from './Icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from '@/components/ui/dropdown-menu'
import { languages } from '@/consts'
import { ThemeContext } from '@/contexts/ThemeContext'
import { ThemeContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

export const CustomizeMenu = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextValues
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Customize className='dark:fill-white' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-34'>
        <DropdownMenuItem onClick={toggleTheme} className='flex gap-2'>
          <span>{t('header.themeLabel')}</span>
          {theme === 'dark' && <IoSunnyOutline size={22} />}
          {theme === 'light' && <IoMoonOutline size={22} />}
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            {t('header.languageLabel')}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className='grid grid-cols-4'>
              {languages.map(({ label, value, icon: Icon }) => (
                <DropdownMenuItem
                  key={label}
                  onClick={() => changeLanguage(value)}
                >
                  <Icon />
                  <span>{label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
