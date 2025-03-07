export const CustomDomainInfo = () => {
  return (
    <div className='space-y-4'>
      <details className='group'>
        <summary className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-300 bg-white px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            Custom domain
          </span>
          <svg
            className='h-6 w-6 transform transition-transform group-open:rotate-180'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </summary>
      </details>
    </div>
  )
}
