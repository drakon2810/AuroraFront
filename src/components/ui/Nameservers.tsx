import { useState } from 'react'

export const Nameservers = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [btn, setBtn] = useState('')

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative'>
      <button
        onClick={toggleModal}
        className='relative inline-block rounded-lg text-violet-700 transition-colors duration-300 hover:text-violet-600 focus:outline-none'
      >
        <span className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full'>
          Nameservers
        </span>
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4'
          onClick={toggleModal}
        >
          <div
            className='relative h-full max-h-64 w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className='absolute right-4 top-4 text-2xl font-bold text-gray-500 hover:text-red-500 focus:outline-none'
            >
              &times;
            </button>
            <div>
              <h3 className='mb-4 text-xl font-semibold'>
                Update your nameservers
              </h3>
            </div>
            <div>
              <p className='text-sm font-normal text-gray-600'>
                Find the list of nameservers at your registrar. Add both of
                these nameservers, remove any other nameservers, and save your
                changes.
              </p>
              <p className='mt-3 text-orange-400'>
                Nameservers will be available after the site is created and the
                custom domain is set.
              </p>
              <p className='mt-3 text-sm font-normal text-gray-600'>
                🛈 Registrars take up to 24 hours to process nameserver changes
                (quicker in most cases). We will update the site status when
                your site is active.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
