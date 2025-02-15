import { DeployingModalContent } from './DeployingModalContent'
import { DeployingModalFooter } from './DeployingModalFooter'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { getWebsiteURL } from '@/lib/utils'
import { FC, ReactNode } from 'react'

interface DeployingModalProps {
  children: ReactNode
  name: string
  status: {
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
  }
}

export const DeployingModal: FC<DeployingModalProps> = ({
  children,
  name,
  status
}) => {
  const websiteURL = getWebsiteURL(name)

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deploying the website</AlertDialogTitle>
          <AlertDialogDescription>
            Don’t forget to complete your payment while we deploy your website,
            otherwise the deployment will be canceled.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <DeployingModalContent
          name={name}
          websiteURL={websiteURL}
          status={status}
        />
        <DeployingModalFooter websiteURL={websiteURL} status={status} />
      </AlertDialogContent>
    </AlertDialog>
  )
}
