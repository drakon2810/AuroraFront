import { Section } from '@/components/Sections/Section'
import { PinContainer } from '@/components/ui/3d-pin'
import { useQuery } from '@tanstack/react-query'

export const Exhibition = () => {
  const {} = useQuery({
    queryKey: ['websites'],
    queryFn: () => {}
  })

  return (
    <Section className='container'>
      <div className='flex gap-4'>
        <PinContainer title='/hello-wprld' href='https://google.com'>
          <div className='flex h-[18rem] w-[18rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2'>
            <h3 className='!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100'>
              Coin title
            </h3>
            <div className='mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
          </div>
        </PinContainer>
      </div>
    </Section>
  )
}
