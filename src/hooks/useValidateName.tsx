import { getWebsite } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

const messages = {
  isNameTaken: 'This name is already taken',
  isValidLength: 'Name must be between 2 and 20 characters'
}

export const useValidateName = (value: string) => {
  const { isSuccess: isNameTaken, refetch } = useQuery({
    queryKey: ['websiteName'],
    queryFn: () => {
      return getWebsite(value)
    },
    enabled: !!value,
    retry: false
  })

  const isValidLength = value.length >= 2 && value.length <= 20

  const errors = {
    isNameTaken: !!value && isNameTaken ? messages.isNameTaken : null,
    isValidLength: !isValidLength ? messages.isValidLength : null
  }

  const isValid = Object.values(errors).filter((value) => value).length === 0

  return {
    errors,
    isValid,
    revalidate: refetch
  }
}
