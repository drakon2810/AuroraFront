import { footerSocialLinks } from '@/consts'
import { FC } from 'react'

export const FooterSocials: FC = () => {
  return (
    <ul className='flex items-center gap-4'>
      {footerSocialLinks.map(({ href, icon: Icon }) => (
        <li key={href}>
          <a
            href={href}
            target='_blank'
            className='text-neutral-600 transition-colors duration-200 hover:text-black dark:text-neutral-300 dark:hover:text-white'
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  )
}
