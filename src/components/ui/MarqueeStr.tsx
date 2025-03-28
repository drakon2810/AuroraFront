import { useStylesStore } from '@/store/useStulesStore'
import { motion } from 'framer-motion'
import { FC, useRef, useEffect, useState } from 'react'

type MarqueeProps = {
  text?: string
  speed?: number
  className?: string
  showDollarBadge?: boolean
  style?: React.CSSProperties
}

export const MarqueeStr: FC<MarqueeProps> = ({
  text = 'Ticker',
  speed = 80,
  className = '',
  showDollarBadge = true,
  style
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const [key, setKey] = useState(0)
  const { secondary, colorSec } = useStylesStore((state) => state)

  useEffect(() => {
    const updateSizes = () => {
      if (containerRef.current && contentRef.current) {
        const contentW = contentRef.current.offsetWidth
        setContentWidth(contentW)
        setKey((prev) => prev + 1)
      }
    }

    updateSizes()
    const resizeObserver = new ResizeObserver(updateSizes)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [text, showDollarBadge])

  const DollarBadge = () => (
    <span
      className='mx-2 inline-flex h-6 w-6 items-center justify-center rounded-full font-bold'
      style={{
        border: `2px solid ${colorSec}`,
        color: colorSec,
        backgroundColor: 'transparent'
      }}
    >
      $
    </span>
  )

  const renderContentUnit = () => (
    <span className='inline-flex items-center'>
      <DollarBadge />
      <span
        className='mx-2 text-[23px] font-bold uppercase'
        style={{ color: colorSec }}
      >
        BUY
      </span>
      <span className='text-[23px]' style={{ fontFamily: secondary }}>
        {`$${text}`}
      </span>
    </span>
  )

  const renderDuplicates = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => <span key={i}>{renderContentUnit()}</span>)
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden whitespace-nowrap ${className}`}
      style={style}
    >
      <div
        ref={contentRef}
        className='absolute inline-flex items-center text-[23px] opacity-0'
      >
        {renderContentUnit()}
      </div>

      <motion.div
        key={key}
        className='inline-flex items-center will-change-transform'
        initial={{ x: 0 }}
        animate={{ x: -contentWidth }}
        transition={{
          repeat: Infinity,
          duration: contentWidth / speed,
          ease: 'linear'
        }}
      >
        {renderDuplicates()}
        {renderDuplicates()}
        {renderDuplicates()}
      </motion.div>
    </div>
  )
}
