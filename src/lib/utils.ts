import { BASE_URL, dateLocales } from '@/consts'
import { ImageData, TemplateData } from '@/types/templates'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import webFontLoader from 'webfontloader'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getSubdomain = () => {
  const hostnameParts = window.location.host.split(/[.:]/)
  if (hostnameParts.length > 2) return hostnameParts[0]

  return null
}

export const loadFonts = (fonts: string[]) => {
  webFontLoader.load({
    google: {
      families: fonts
    }
  })
}

export const getUploadedImageURL = (
  fieldName: string,
  websiteName: string,
  data: TemplateData
) => {
  const fieldData = data?.[fieldName] as ImageData
  if (!fieldData?.isUploaded) return null

  const uploadedLocallyFile = data?.uploads?.[fieldName]
  if (!uploadedLocallyFile) {
    return `${BASE_URL}/uploads/${websiteName}/${fieldName}`
  }

  return URL.createObjectURL(uploadedLocallyFile)
}

export const getTemplateTokenImageSrc = (
  data: TemplateData,
  websiteName: string
) => {
  const fieldData = data?.tokenImage as ImageData
  if (!fieldData) return null

  if (fieldData.isUploaded) {
    return getUploadedImageURL('tokenImage', websiteName, data)
  }

  return fieldData.src
}

export const getWebsiteURL = (name: string) => {
  const { host, protocol } = window.location
  return `${protocol}//${name}.${host}`
}

export const getDateLocale = (locale: string) => {
  if (dateLocales.hasOwnProperty(locale)) {
    return dateLocales[locale as keyof typeof dateLocales]
  }

  return dateLocales.en
}
