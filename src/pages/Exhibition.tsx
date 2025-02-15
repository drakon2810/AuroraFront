import { ExhibitionItems } from '@/components/Exhibition/ExhibitionItems'
import { Loading } from '@/components/Loading'
import { Section } from '@/components/Sections/Section'
import { getWebsites } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const Exhibition = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['websites'],
    queryFn: () => getWebsites()
  })

  return (
    <Section className='container flex w-full items-center justify-center'>
      {isLoading && <Loading size={48} />}
      {isError && (
        <span className='text-red-500'>Unable to fetch websites</span>
      )}
      {!!data?.length && <ExhibitionItems />}
    </Section>
  )
}
