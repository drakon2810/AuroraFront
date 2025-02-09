import { BASE_URL, GOOGLE_API_BASE_URL } from '@/consts'
import {
  CreateWebsiteFn,
  ErrorResponse,
  GetFontsResponse,
  GetWebsiteFn,
  GetUserWebsitesFn,
  Website,
  DeleteWebsiteFn,
  UpdateWebsite
} from '@/types/api'

const handleError = (data: ErrorResponse) => {
  if (typeof data.message === 'string') {
    throw new Error(data.message)
  } else {
    throw new Error(data.message[0])
  }
}

export const getFonts = async (): Promise<Pick<GetFontsResponse, 'items'>> => {
  const url = `${GOOGLE_API_BASE_URL}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`
  const data: GetFontsResponse = await fetch(url).then((res) => res.json())

  if (data.error) {
    throw data.error.message
  }

  return data
}

const uploadFiles = async (
  name: string,
  files: { [key: string]: File },
  publicKey: string
) => {
  const url = `${BASE_URL}/files/upload`

  const formData = new FormData()
  formData.append('name', name)

  for (const fileName of Object.keys(files)) {
    const file = files[fileName]
    formData.append(fileName, file)
  }

  await fetch(url, {
    method: 'POST',
    headers: { 'Public-Key': publicKey },
    body: formData,
    credentials: 'include'
  })
}

export const createWebsite: CreateWebsiteFn = async ({
  name,
  templateName,
  templateData,
  uploadedFiles,
  publicKey,
  signature
}) => {
  await uploadFiles(name, uploadedFiles, publicKey)

  const url = `${BASE_URL}/websites/create/${name}`
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Public-Key': publicKey },
    credentials: 'include',
    body: JSON.stringify({
      template: templateName,
      data: templateData,
      signature
    })
  })
  const data: Website | ErrorResponse = await response.json()

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website
}

export const getWebsite: GetWebsiteFn = async (name: string) => {
  const url = `${BASE_URL}/websites/${name}`
  const response = await fetch(url)
  const data: Website | ErrorResponse = await response.json()

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website
}

export const getUserWebsites: GetUserWebsitesFn = async (publicKey: string) => {
  const url = `${BASE_URL}/websites`
  const response = await fetch(url, {
    headers: { 'Public-Key': publicKey },
    credentials: 'include'
  })
  const data: Website[] | ErrorResponse = await response.json()

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website[]
}

export const updateWebsite: UpdateWebsite = async ({
  currentName,
  newName,
  data: templateData,
  uploadedFiles,
  publicKey
}) => {
  if (uploadedFiles) await uploadFiles(currentName, uploadedFiles, publicKey)

  const url = `${BASE_URL}/websites/${currentName}`
  const response = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Public-Key': publicKey },
    credentials: 'include',
    body: JSON.stringify({ name: newName, data: templateData })
  })
  const data: Website | ErrorResponse = await response.json()

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website
}

export const deleteWebsite: DeleteWebsiteFn = async ({ name, publicKey }) => {
  const url = `${BASE_URL}/websites/${name}`
  const response = await fetch(url, {
    method: 'DELETE',
    headers: { 'Public-Key': publicKey },
    credentials: 'include'
  })

  if (!response.ok) {
    const data: ErrorResponse = await response.json()
    handleError(data)
  }
}
