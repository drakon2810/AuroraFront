import { Medium, Telegram, Twitter } from '@/components/Icons'
import type { PricingCard } from '@/types'
import { Animation } from '@/types/templates'
import {
  IN,
  ID,
  BD,
  VN,
  UA,
  RU,
  PK,
  CN,
  KR,
  ES,
  DE,
  US,
  FR,
  NL,
  IT,
  GR,
  TR,
  JP,
  PT,
  SA
} from 'country-flag-icons/react/3x2'
import { Book, LayoutDashboard, LayoutTemplate, Star } from 'lucide-react'
import { FaRocket, FaPalette, FaBoltLightning } from 'react-icons/fa6'

export const PROJECT_NAME = 'AURORA'
export const BASE_URL = 'https://aurorabuild.pro:3000'
export const GOOGLE_API_BASE_URL =
  'https://www.googleapis.com/webfonts/v1/webfonts'

export const featuresCardIcons = {
  rocket: FaRocket,
  palette: FaPalette,
  lightning: FaBoltLightning
}

export const navItems = [
  { name: 'dashboard', url: '/account', icon: LayoutDashboard },
  { name: 'templates', url: '/templates', icon: LayoutTemplate },
  { name: 'exhibition', url: '/pricing', icon: Star },
  { name: 'start', url: '/start', icon: Book }
]

export const languages = [
  { icon: IN, label: 'हिं', value: 'hi' }, // Индийский (Хинди)
  { icon: ID, label: 'Id', value: 'id' }, // Индонезийский язык
  { icon: BD, label: 'বাংলা', value: 'bn' }, // Бангладеш (Бенгальский)
  { icon: VN, label: 'Vi', value: 'vi' }, // Вьетнамский язык
  { icon: UA, label: 'Укр', value: 'uk' }, // Украинский
  { icon: RU, label: 'Ру', value: 'ru' }, // Русский
  { icon: PK, label: 'اردو', value: 'ur' }, // Пакистанский (Урду)
  { icon: CN, label: '汉语', value: 'zh' }, // Китай (Мандаринский)
  { icon: KR, label: '한국어', value: 'ko' }, // Южная Корея (Корейский)
  { icon: ES, label: 'Es', value: 'es' }, // Испанский
  { icon: DE, label: 'De', value: 'de' }, // Немецкий
  { icon: US, label: 'En', value: 'en' }, // Английский
  { icon: FR, label: 'Fr', value: 'fr' }, // Французский
  { icon: NL, label: 'Nl', value: 'nl' }, // Нидерландский
  { icon: IT, label: 'It', value: 'it' }, // Итальянский
  { icon: GR, label: 'Ελ', value: 'el' }, // Греческий
  { icon: TR, label: 'Tr', value: 'tr' }, // Турецкий
  { icon: JP, label: '日本語', value: 'ja' }, // Японский
  { icon: PT, label: 'Pt', value: 'pt' }, // Португальский
  { icon: SA, label: 'عربى', value: 'ar' } // Арабский
]

export const footerSocialLinks = [
  {
    icon: Twitter,
    href: 'https://x.com/AuroraBuildd'
  },
  /*
  {
    icon: Discord,
    href: 'https://discord.com/'
  },
  */
  {
    icon: Telegram,
    href: 'https://t.me/+RpT8pKZEDwJmOTBk'
  },
  {
    icon: Medium,
    href: 'https://medium.com/@marshallpricede'
  }
]

export const pricingCards: { [key: string]: PricingCard } = {
  standard: {
    price: 0.045,
    path: '/create?template=classic'
  },
  advanced: {
    price: 0.05,
    path: '/create?template=impressive'
  },
  professional: {
    price: 0.065,
    path: '/create?template=rocket'
  }
}

export const animations: Animation[] = [
  {
    label: 'pulse',
    value: 'pulse'
  },
  {
    label: 'ping',
    value: 'ping'
  },
  {
    label: 'spin',
    value: 'spin'
  },
  {
    label: 'bounce',
    value: 'bounce'
  },
  {
    label: 'in',
    value: 'in'
  },
  {
    label: 'wiggle',
    value: 'wiggle'
  },
  {
    label: 'heart beat',
    value: 'heartBeat'
  },
  {
    label: 'horizontal flip',
    value: 'hflip'
  },
  {
    label: 'vertical flip',
    value: 'vflip'
  },
  {
    label: 'swing',
    value: 'swing'
  },
  {
    label: 'rubber band',
    value: 'rubberBand'
  },
  {
    label: 'flash',
    value: 'flash'
  },
  {
    label: 'head shake',
    value: 'headShake'
  },
  {
    label: 'wobble',
    value: 'wobble'
  },
  {
    label: 'jello',
    value: 'jello'
  }
]

export const fallbackFonts = [
  'Roboto',
  'Open Sans',
  'Montserrat',
  'Poppins',
  'Lato',
  'Oswald',
  'Noto Sans',
  'Raleway',
  'Nunito',
  'Rubik',
  'Ubuntu',
  'Inter',
  'Arimo',
  'Lora',
  'Libre Baskerville',
  'Merriweather',
  'Playfair Display',
  'Mulish',
  'Fira Sans',
  'Quicksand',
  'Barlow'
]

export const fontSizeUnits = ['px', 'rem', 'cm', '%']
