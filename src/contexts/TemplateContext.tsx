import { Loading } from '@/components/Loading'
import { getSubdomain } from '@/lib/utils'
import { getWebsite } from '@/services/api'
import { useFallingImagesStore } from '@/store/useWidgetsStore'
import { templatesFields } from '@/templates'
import { UpdateField } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { TemplateName } from '@/types/templates'
import { useQuery } from '@tanstack/react-query'
import { cloneDeep, set } from 'lodash'
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useState
} from 'react'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'

export const TemplateContext = createContext<TemplateContextValues | null>(null)

const subdomain = getSubdomain()
export const TemplateContextProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? ''
  const template = searchParams.get('template')

  const { pathname } = useLocation()
  const isEditor = pathname === '/edit'
  const isCreator = pathname === '/create'

  const isValidTemplate = templatesFields.hasOwnProperty(template ?? '')
  const addInputValue = useFallingImagesStore((state) => state.addInputValue)

  if (isCreator && !isValidTemplate) {
    return <Navigate to='/templates' />
  }

  if (isEditor && !isValidTemplate) {
    return <Navigate to='/account' />
  }

  const selectedTemplate = template as TemplateName
  const isExist = !!subdomain || isEditor

  const [data, setData] = useState(templatesFields[selectedTemplate])

  useLayoutEffect(() => {
    if (isCreator) setData(templatesFields[selectedTemplate])
  }, [isCreator, templatesFields, selectedTemplate])

  const {
    data: fetchedData,
    isSuccess,
    isFetching
  } = useQuery({
    queryKey: ['templateData'],
    queryFn: async () => {
      return getWebsite((subdomain as string) || name)
    },
    enabled: isExist && !isCreator,
    refetchOnWindowFocus: false
  })

  const fetchedTemplate = fetchedData && (fetchedData.template as TemplateName)

  useLayoutEffect(() => {
    if (isSuccess && isExist) setData(fetchedData.data)
  }, [isFetching])

  const updateField: UpdateField = useCallback((path, value) => {
    setData((data) => set(cloneDeep(data), path, value))
  }, [])

  const dataInput = data?.ticker || ''
  addInputValue(dataInput)

  if (isFetching) {
    return (
      <div className='flex h-dvh w-full items-center justify-center'>
        <Loading size={48} />
      </div>
    )
  }

  const value = {
    data,
    setData,
    updateField: isCreator || isEditor ? updateField : null,
    selectedTemplate:
      isExist && fetchedTemplate ? fetchedTemplate : selectedTemplate
  }

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  )
}
