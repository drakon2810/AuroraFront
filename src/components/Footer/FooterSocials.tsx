import { Button } from '../ui/button'
import { footerSocialLinks } from '@/consts'
import { FC } from 'react'

export const FooterSocials: FC = () => {
  return (
    <ul className='flex items-center gap-4'>
      {footerSocialLinks.map(({ href, icon: Icon }) => (
        <li key={href}>
          <Button asChild variant='outline' size='icon'>
            <a href={href} target='_blank'>
              <Icon />
            </a>
          </Button>
        </li>
      ))}
    </ul>
  )
}
