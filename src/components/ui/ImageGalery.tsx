import { useGallaryStore } from '@/store/useGalleryStore'

export const ImageGallery = () => {
  const { photosGallary, toggleGallary } = useGallaryStore((state) => state)

  const placeholders = 8
  const hasPhotos = photosGallary.some((photo) => photo instanceof File)

  const renderImageOrPlaceholder = (image: any, index: any) => {
    if (image instanceof File) {
      return (
        <div
          key={index}
          className='relative min-w-[23%] overflow-hidden rounded-lg border bg-white shadow-sm'
        >
          <img
            src={URL.createObjectURL(image)}
            alt={`Gallery item ${index}`}
            className='h-[215px] w-full object-cover'
          />
        </div>
      )
    }

    if (hasPhotos) return null

    return (
      <div
        key={index}
        className='relative ml-3 flex h-[215px] min-w-[23%] flex-col items-center justify-center overflow-hidden rounded-lg border bg-white shadow-sm'
      >
        <span className='mb-2 text-xl font-bold text-gray-400'>IMAGE</span>
        <span className='text-gray-400'>PLACEHOLDER</span>
      </div>
    )
  }

  return (
    <div className='flex justify-center p-4'>
      <div className='w-full max-w-[1000px]'>
        {toggleGallary === 'grid' ? (
          <div className='mr-2 grid grid-cols-4 gap-2'>
            {(hasPhotos
              ? photosGallary
              : Array.from({ length: placeholders })
            ).map(renderImageOrPlaceholder)}
          </div>
        ) : (
          <div className='flex flex-col gap-2'>
            <div className='flex w-full gap-2 overflow-x-auto'>
              {(hasPhotos
                ? photosGallary
                : Array.from({ length: Math.max(placeholders, 8) })
              )
                .slice(0, 4)
                .map(renderImageOrPlaceholder)}
            </div>

            <div className='flex w-full gap-2 overflow-x-auto'>
              {(hasPhotos
                ? photosGallary
                : Array.from({ length: Math.max(placeholders, 8) })
              )
                .slice(4, 8)
                .map(renderImageOrPlaceholder)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
