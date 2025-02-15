import { TemplateData } from './templates'

interface Font {
  family: string
}

export interface GetFontsResponse {
  items?: Font[]
  error?: { message: string }
}

export type ErrorResponse = {
  error: string
  message: string | string[]
  statusCode: number
}

type UploadedFiles = { [key: string]: File }

export type Website = {
  name: string
  template: string
  data: TemplateData
  creator: string
}

export type CreateWebsiteResponse = Website | ErrorResponse
export type CreateWebsiteFn = ({
  name,
  templateName,
  templateData,
  uploadedFiles,
  publicKey,
  signature
}: {
  name: string
  templateName: string
  templateData: TemplateData
  uploadedFiles: UploadedFiles
  publicKey: string
  signature: string
}) => Promise<Website>

export type GetWebsiteFn = (name: string) => Promise<Website>

export type GetWebsitesFn = (user?: string) => Promise<Website[]>

export type DeleteWebsiteFn = ({
  name,
  publicKey
}: {
  name: string
  publicKey: string
}) => Promise<void>

export type UpdateWebsite = ({
  currentName,
  newName,
  data,
  publicKey
}: {
  currentName: string
  newName?: string
  data?: TemplateData
  uploadedFiles?: UploadedFiles
  publicKey: string
}) => Promise<Website | ErrorResponse>
