import { Badge } from './Badge'
import { Button } from './Button'
import { Description } from './Description'
import { useSlider } from '@/hooks/useSlider'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FC } from 'react'

interface Card {
  label: string
  description: string
  badge?: string
}

interface SliderProps {
  cards: { [key: string]: Card }
  CardElement: FC<{ name: string }>
}

const cardVariants = {
  enter: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? -300 : 300,
    opacity: 0
  })
}

export const Slider: FC<SliderProps> = ({ cards, CardElement }) => {
  const { currentIndex, animationDirection, nextSlide, prevSlide } = useSlider(
    Object.values(cards).length
  )

  const currentName = Object.keys(cards)[currentIndex]
  const { description, label, badge } = cards[currentName]

  return (
    <div className='flex items-center'>
      <div className='flex-1 p-5'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className='flex flex-col gap-4'
          >
            <div className='flex items-center gap-4'>
              <h3>{label}</h3>
              {badge && <Badge className='uppercase'>{badge}</Badge>}
            </div>
            <Description className='whitespace-pre-line'>
              {description}
            </Description>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='flex h-[680px] items-center space-x-4'>
        <Button onClick={prevSlide} className='z-10 p-3'>
          <ChevronLeft size={28} />
        </Button>
        <div className='relative'>
          <AnimatePresence
            initial={false}
            custom={animationDirection}
            mode='wait'
          >
            <motion.div
              key={currentIndex}
              custom={animationDirection}
              variants={cardVariants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ opacity: { duration: 0.5 }, x: { duration: 0.7 } }}
            >
              <CardElement name={currentName} />
            </motion.div>
          </AnimatePresence>
        </div>
        <Button onClick={nextSlide} className='z-10 p-3'>
          <ChevronRight size={28} />
        </Button>
      </div>
    </div>
  )
}
