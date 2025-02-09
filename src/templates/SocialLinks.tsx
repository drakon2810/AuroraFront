import { TemplateItemError } from '@/components/TemplateItems/Error'
import { Link } from '@/components/TemplateItems/Link'
import { TemplateContext } from '@/contexts/TemplateContext'
import { cn } from '@/lib/utils'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

interface SocialLinksProps {
  visibility?: 'header' | 'main'
  className?: string
}

export const SocialLinks: FC<SocialLinksProps> = ({
  visibility = 'main',
  className
}) => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  if (!data) return <TemplateItemError />

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-4',
        className
      )}
    >
      {Object.keys(data.links).map((key) => {
        if (data.links[key].visibility !== visibility) return

        return data.links[key].url && <Link key={key} fieldName={key} />
      })}
    </div>
  )
}
