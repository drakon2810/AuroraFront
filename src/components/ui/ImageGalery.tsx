import { useGallaryStore } from '@/store/useGalleryStore'

export const ImageGallery = () => {
  const { photosGallary, toggleGallary } = useGallaryStore((state) => state)

  const placeholders = 8
  const hasPhotos = photosGallary.some((photo) => photo instanceof File)
  const photoCount = photosGallary.filter(
    (photo) => photo instanceof File
  ).length

  const renderImageOrPlaceholder = (
    image: any,
    index: any,
    isGrid: boolean
  ) => {
    const size = isGrid
      ? { width: '215px', height: '215px' }
      : { width: '300px', height: '300px' }

    if (image instanceof File) {
      return (
        <div
          key={index}
          className='relative overflow-hidden rounded-lg border bg-white shadow-sm'
          style={size}
        >
          <img
            src={URL.createObjectURL(image)}
            alt={`Gallery item ${index}`}
            className='h-full w-full object-cover'
          />
        </div>
      )
    }

    if (hasPhotos) return null

    return (
      <div
        key={index}
        className='relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-white shadow-sm'
        style={size}
      >
        <span className='mb-2 text-xl font-bold text-gray-400'>IMAGE</span>
        <span className='text-gray-400'>PLACEHOLDER</span>
      </div>
    )
  }

  const renderGrid = () => {
    const items = hasPhotos
      ? photosGallary
      : Array.from({ length: placeholders })
    const itemCount = items.length

    if (itemCount === 0) return null

    if (photoCount === 6) {
      return (
        <div className='flex flex-col items-center'>
          <div className='mb-2 flex w-full justify-center gap-2'>
            {items.slice(0, 3).map((item, index) => (
              <div key={index}>
                {renderImageOrPlaceholder(item, index, true)}
              </div>
            ))}
          </div>
          <div className='flex w-full justify-center gap-2'>
            {items.slice(3, 6).map((item, index) => (
              <div key={index + 3}>
                {renderImageOrPlaceholder(item, index + 3, true)}
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className='flex flex-col items-center'>
        <div
          className={`mb-2 flex justify-center gap-2 ${itemCount > 4 ? 'w-full' : ''}`}
        >
          {items.slice(0, Math.min(4, itemCount)).map((item, index) => (
            <div key={index}>{renderImageOrPlaceholder(item, index, true)}</div>
          ))}
        </div>

        {itemCount > 4 && (
          <div className='flex w-full justify-center gap-2'>
            {items.slice(4, Math.min(8, itemCount)).map((item, index) => (
              <div key={index + 4}>
                {renderImageOrPlaceholder(item, index + 4, true)}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='flex justify-center p-4'>
      <div className='w-full max-w-[1000px]'>
        {toggleGallary === 'grid' ? (
          renderGrid()
        ) : (
          <div className='flex flex-col gap-2'>
            <div className='ml-14 flex w-full gap-2 overflow-x-auto'>
              {(hasPhotos
                ? photosGallary
                : Array.from({ length: Math.max(placeholders, 8) })
              )
                .slice(0, photoCount === 6 ? 3 : 4)
                .map((item, index) =>
                  renderImageOrPlaceholder(item, index, false)
                )}
            </div>

            <div className='ml-14 flex w-full gap-2 overflow-x-auto'>
              {(hasPhotos
                ? photosGallary
                : Array.from({ length: Math.max(placeholders, 8) })
              )
                .slice(photoCount === 6 ? 3 : 4, photoCount === 6 ? 6 : 8)
                .map((item, index) =>
                  renderImageOrPlaceholder(
                    item,
                    index + (photoCount === 6 ? 3 : 4),
                    false
                  )
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
