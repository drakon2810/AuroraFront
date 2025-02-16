import { Marquee } from '../magicui/marquee'
import { RecentlyCreatedMarqueeItem } from './RecentlyCreatedMarqueeItem'
import { getWebsites } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const RecentlyCreatedMarquee = () => {
  const { data } = useQuery({
    queryKey: ['websites'],
    queryFn: () => getWebsites()
  })

  const firstRow = data?.slice(0, data.length / 2)
  const secondRow = data?.slice(data.length / 2)

  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      <Marquee pauseOnHover repeat={10} className='w-full [--duration:5s]'>
        {firstRow?.map(({ name, data, createdAt }) => (
          <RecentlyCreatedMarqueeItem
            key={name}
            name={name}
            data={data}
            createdAt={createdAt}
          />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        repeat={10}
        className='w-full [--duration:5s]'
      >
        {secondRow?.map(({ name, data, createdAt }) => (
          <RecentlyCreatedMarqueeItem
            key={name}
            name={name}
            data={data}
            createdAt={createdAt}
          />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-900'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-900'></div>
    </div>
  )
}
