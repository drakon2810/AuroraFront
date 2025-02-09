import { BASE_URL } from '@/consts'
import { ImageData, TemplateData } from '@/types/templates'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import webFontLoader from 'webfontloader'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getSubdomain = () => {
  const hostnameParts = window.location.hostname.split('.')
  if (hostnameParts.length > 1) return hostnameParts[0]

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
