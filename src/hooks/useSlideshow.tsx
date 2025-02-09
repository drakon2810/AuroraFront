import { useEffect, useState } from 'react'

export const useSlideshow = (length: number, interval: number) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (length < 2) return
    setCurrentImageIndex(0)

    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevImageIndex) => {
        if (prevImageIndex === length - 1) {
          return 0
        }

        return prevImageIndex + 1
      })
    }, interval)

    return () => clearInterval(slideshowInterval)
  }, [length, interval])

  return currentImageIndex
}
