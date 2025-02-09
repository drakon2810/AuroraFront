import { SmallLogo } from '../Icons'
import { BuilderCategoriesItem } from './BuilderCategoriesItem'
import { categoriesFields } from '@/consts/editor'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const BuilderCategories: FC = () => {
  return (
    <div className='flex flex-col items-center gap-4 overflow-y-auto bg-neutral-100 p-2 py-4 dark:bg-neutral-800'>
      <Link to='/' className='mb-6'>
        <SmallLogo />
      </Link>
      {Object.keys(categoriesFields).map((categoryName) => (
        <BuilderCategoriesItem
          key={categoryName}
          categoryName={categoryName as keyof typeof categoriesFields}
        />
      ))}
    </div>
  )
}
