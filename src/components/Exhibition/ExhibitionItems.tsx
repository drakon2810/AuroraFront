import { ExhibitionItem } from './ExhibitionItem'
import { getWebsites } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const ExhibitionItems = () => {
  const { data } = useQuery({
    queryKey: ['websites'],
    queryFn: () => getWebsites()
  })

  return (
    <div className='flex flex-wrap gap-4'>
      {data?.map(({ data, name, createdAt }) => (
        <ExhibitionItem
          key={name}
          name={name}
          data={data}
          createdAt={createdAt}
        />
      ))}
    </div>
  )
}
