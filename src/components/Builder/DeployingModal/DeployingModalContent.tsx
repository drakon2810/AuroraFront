import { Loading } from '@/components/Loading'
import { Check, X } from 'lucide-react'
import { FC } from 'react'

interface DeployingModalContentProps {
  name: string
  websiteURL: string
  status: {
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
  }
}

export const DeployingModalContent: FC<DeployingModalContentProps> = ({
  name,
  websiteURL,
  status
}) => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <h3>{name}</h3>
        <div className='rounded-md border border-neutral-200 px-4 py-2 dark:border-neutral-800'>
          {websiteURL}
        </div>
      </div>
      {status.isLoading && <Loading size={48} className='fill-neutral-200' />}
      {status.isSuccess && (
        <div className='flex items-center gap-2'>
          <div className='rounded-full bg-green-500 p-3'>
            <Check size={28} />
          </div>
          <span className='font-arial-black text-2xl'>Success</span>
        </div>
      )}
      {status.isError && (
        <div className='flex items-center gap-2'>
          <div className='rounded-full bg-red-500 p-3'>
            <X size={28} />
          </div>
          <span className='font-arial-black text-2xl'>Failed</span>
        </div>
      )}
    </div>
  )
}
