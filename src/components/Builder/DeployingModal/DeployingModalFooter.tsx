import {
  AlertDialogCancel,
  AlertDialogFooter
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useCopy } from '@/hooks/useCopy'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface DeployingModalFooterProps {
  websiteURL: string
  status: {
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
  }
}

export const DeployingModalFooter: FC<DeployingModalFooterProps> = ({
  websiteURL,
  status
}) => {
  const { copy, isCopied } = useCopy()

  return (
    <AlertDialogFooter className='sm:justify-between'>
      <AlertDialogCancel>Exit</AlertDialogCancel>
      {status.isSuccess && (
        <div className='flex items-center gap-2'>
          <Button onClick={() => copy(websiteURL)}>
            {isCopied ? 'Copied' : 'Copy link'}
          </Button>
          <Button asChild>
            <Link to={websiteURL} target='_blank'>
              Forward
            </Link>
          </Button>
        </div>
      )}
      {status.isError && <AlertDialogCancel>Try again</AlertDialogCancel>}
    </AlertDialogFooter>
  )
}
