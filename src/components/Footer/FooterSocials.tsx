import { Button } from '../ui/button'
import { footerSocialLinks } from '@/consts'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const FooterSocials: FC = () => {
  return (
    <ul className='flex items-center gap-4'>
      {footerSocialLinks.map(({ href, icon: Icon }) => (
        <li key={href}>
          <Button asChild variant='outline' size='icon'>
            <Link to={href} target='_blank'>
              <Icon />
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  )
}
