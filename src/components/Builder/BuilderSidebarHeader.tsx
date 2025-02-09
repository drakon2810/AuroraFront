import { Badge } from '../Badge'
import { Button } from '../ui/button'
import { MoveLeft } from 'lucide-react'
import { FC, MouseEvent } from 'react'

interface BuilderSidebarHeaderProps {
  title?: string
  buttonLabel?: string
  onClick: (e: MouseEvent) => void
}

export const BuilderSidebarHeader: FC<BuilderSidebarHeaderProps> = ({
  title,
  buttonLabel = 'Back',
  onClick
}) => {
  return (
    <div className='sticky top-0 z-10 flex w-full items-center justify-between gap-2 border-b border-neutral-200 bg-white/70 px-4 py-6 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/70'>
      <Button
        onClick={onClick}
        variant='ghost'
        className='flex items-center gap-4 text-base'
      >
        <MoveLeft />
        <span>{buttonLabel}</span>
      </Button>
      {title && <Badge>{title}</Badge>}
    </div>
  )
}
