import ImagePlaceholder from '@/assets/images/placeholder.webp'
import { templatesData } from '@/consts/templatesData'
import {
  DefaultValues,
  TemplateData,
  TemplateName,
  TemplateSubCategoryField
} from '@/types/templates'
import { cloneDeep, merge, set } from 'lodash'

export const defaultFieldValues: DefaultValues = {
  text: {
    value: '',
    fontFamily: 'Inter',
    fontSizeValue: 24,
    sizeUnit: 'px',
    color: '',
    styles: [],
    strokeColor: '#ff0000',
    strokeWidth: 0,
    backgroundColor: 'transparent',
    rotation: 0,
    animation: null,
    animationDuration: 1000
  },
  image: {
    src: '',
    slideshowItems: [],
    width: 300,
    height: 'auto',
    sizeUnit: 'px',
    rotation: 0,
    opacity: 100,
    borderColor: '#ff0000',
    borderWidth: 0,
    slideshowInterval: 2000,
    animation: null,
    animationDuration: 1000,
    imagePlaceholder: ImagePlaceholder
  },
  link: {
    url: '',
    size: 70,
    visibility: 'main',
    rotation: 0,
    animation: null,
    animationDuration: 1000
  },
  toggle: {
    value: true
  },
  color: {
    value: '#ff0000'
  }
}

const parseTemplateFields = (templateName: string): TemplateData => {
  const results = {} as TemplateData

  if (!templatesData.hasOwnProperty(templateName)) return results
  const template = templateName as TemplateName
  const templatesCategories = templatesData[template].categories

  for (const category of templatesCategories) {
    for (const field of category.fields) {
      const { type, name, defaultValues } = field as TemplateSubCategoryField
      if (results.hasOwnProperty(name)) continue

      const data = merge(
        field,
        cloneDeep(defaultFieldValues[type]),
        defaultValues
      )

      if (type === 'link') {
        set(results, `links.${name}`, data)
      } else {
        set(results, name, data)
      }
    }
  }

  return results
}

const getTemplatesFields = () => {
  const results: { [key: string]: TemplateData } = {}

  const templateNames = Object.keys(templatesData)
  templateNames.forEach((name) => {
    results[name] = parseTemplateFields(name)
  })

  return results
}

export const templatesFields = getTemplatesFields()
