import { useCallback, useState } from 'react'

export const useSlider = (length: number) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationDirection, setAnimationDirection] = useState<
    'left' | 'right'
  >('left')

  const nextSlide = useCallback(() => {
    setAnimationDirection('left')
    setCurrentIndex((prev) => {
      if (prev + 1 >= length) return 0
      return prev + 1
    })
  }, [length])

  const prevSlide = useCallback(() => {
    setAnimationDirection('right')
    setCurrentIndex((prev) => {
      if (prev === 0) return length - 1
      return prev - 1
    })
  }, [length])

  return { currentIndex, animationDirection, nextSlide, prevSlide }
}
