import { EditorWidgets } from '../components/Builder/Test/EditorWidgets'
import { EditorButtons } from '@/components/Builder/Test/EditorButtons'
import { EditorImage } from '@/components/Builder/Test/EditorImg'
import { Editorlinks } from '@/components/Builder/Test/EditorLinks'
import { EditorText } from '@/components/Builder/Test/EditorText'
import { EditorAnimations } from '@/components/Editor/EditorAnimations'
import { EditorRotate } from '@/components/Editor/EditorRotate'
import { EditorBorder } from '@/components/Editor/Image/EditorBorder'
import { EditorOpacity } from '@/components/Editor/Image/EditorOpacity'
import { EditorSize } from '@/components/Editor/Image/EditorSize'
import { EditorSlideshow } from '@/components/Editor/Image/EditorSlideshow'
import { EditorURL as EditorImageURL } from '@/components/Editor/Image/EditorURL'
import { EditorUpload } from '@/components/Editor/Image/EditorUpload'
import { EditorURL as EditorLinkURL } from '@/components/Editor/Link/EditorURL'
import { EditorAlign } from '@/components/Editor/Text/EditorAlign'
import { EditorBackground } from '@/components/Editor/Text/EditorBackground'
import { EditorColor } from '@/components/Editor/Text/EditorColor'
import { EditorContent } from '@/components/Editor/Text/EditorContent'
import { EditorFontSize } from '@/components/Editor/Text/EditorFontSize'
import { EditorFontsPicker } from '@/components/Editor/Text/EditorFontsPicker'
import { EditorStroke } from '@/components/Editor/Text/EditorStroke'
import { EditorStyles } from '@/components/Editor/Text/EditorStyles'
import { TemplatesSelector } from '@/components/TemplatesSelector'
import { Categories } from '@/types'
import {
  GalleryVerticalEnd,
  LetterText,
  Image,
  Link,
  Grid2x2Plus,
  WandSparkles
} from 'lucide-react'

export const categoriesFields = {
  text: {
    label: 'text',
    icon: LetterText,
    element: EditorText
  },
  image: {
    label: 'images',
    icon: Image,
    element: EditorImage
  },
  links: {
    label: 'links',
    icon: Link,
    element: Editorlinks
  },
  blocks: {
    label: 'howToBuy',
    icon: Grid2x2Plus,
    element: EditorButtons
  },
  widgets: {
    label: 'widgets',
    icon: WandSparkles,
    element: EditorWidgets
  },
  templates: {
    label: 'Templates',
    icon: GalleryVerticalEnd,
    element: TemplatesSelector,
    creatorOnly: true
  }
} as const satisfies Categories

export const editorFields = {
  text: [
    {
      label: 'Content',
      element: EditorContent
    },
    {
      label: 'Font family',
      element: EditorFontsPicker
    },
    {
      label: 'Font size',
      element: EditorFontSize
    },
    {
      label: 'Color',
      element: EditorColor
    },
    {
      label: 'Background',
      element: EditorBackground
    },
    {
      label: 'Stroke',
      element: EditorStroke
    },
    {
      label: 'Align',
      element: EditorAlign
    },
    {
      label: 'Styles',
      element: EditorStyles
    },
    {
      label: 'Rotate',
      element: EditorRotate
    },
    {
      label: 'Animations',
      element: EditorAnimations
    }
  ],
  image: [
    {
      label: 'URL',
      element: EditorImageURL
    },
    {
      label: 'Upload',
      element: EditorUpload
    },
    {
      label: 'Slideshow',
      element: EditorSlideshow
    },
    {
      label: 'Size',
      element: EditorSize
    },
    {
      label: 'Rotation',
      element: EditorRotate
    },
    {
      label: 'Opacity',
      element: EditorOpacity
    },
    {
      label: 'Border',
      element: EditorBorder
    },
    {
      label: 'Animations',
      element: EditorAnimations
    }
  ],
  link: [
    {
      label: 'URL',
      element: EditorLinkURL
    },
    {
      label: 'Rotation',
      element: EditorRotate
    },
    {
      label: 'Animation',
      element: EditorAnimations
    }
  ],
  widgets: [
    {
      label: 'Content',
      element: EditorContent
    },
    {
      label: 'Font family',
      element: EditorFontsPicker
    },
    {
      label: 'Font size',
      element: EditorFontSize
    },
    {
      label: 'Color',
      element: EditorColor
    },
    {
      label: 'Background',
      element: EditorBackground
    },
    {
      label: 'Stroke',
      element: EditorStroke
    },
    {
      label: 'Align',
      element: EditorAlign
    },
    {
      label: 'Styles',
      element: EditorStyles
    },
    {
      label: 'Rotate',
      element: EditorRotate
    },
    {
      label: 'Animations',
      element: EditorAnimations
    }
  ]
}
