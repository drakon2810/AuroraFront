import { useBlocksStore } from '@/store/useBlocksStore'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void
      }
    }
  }
}

export const EmbedVideo = () => {
  const { emberVideo, emberX, emberTictok, embedChoiseBtn } = useBlocksStore(
    (state) => state
  )

  const defaultVideo = {
    youtube: 'https://www.youtube.com/embed/QCJGIz7ROUI?si=MxEWxZGg7xfoc4f1',
    twitter: 'https://twitter.com/Interior/status/463440424141459456',
    tiktok: 'https://vm.tiktok.com/ZNdda2pwC/'
  }

  const twitterRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (embedChoiseBtn === 'x') {
      const scriptSrc = 'https://platform.twitter.com/widgets.js'

      if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
        const script = document.createElement('script')
        script.src = scriptSrc
        script.async = true
        script.onload = () => {
          if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load()
          }
        }
        document.body.appendChild(script)
      } else {
        const checkTwttr = setInterval(() => {
          if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load()
            clearInterval(checkTwttr)
          }
        }, 500)
      }
    }
  }, [embedChoiseBtn, emberX])

  useEffect(() => {
    if (embedChoiseBtn === 'tiktok') {
      const script = document.createElement('script')
      script.src = 'https://www.tiktok.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [embedChoiseBtn])

  let embedContent: JSX.Element | null = null

  if (embedChoiseBtn === 'youtube') {
    embedContent = (
      <iframe
        width='100%'
        height='415'
        src={emberVideo || defaultVideo.youtube}
        title='YouTube Video'
        frameBorder='0'
        allowFullScreen
        className='rounded-lg shadow-md'
      />
    )
  } else if (embedChoiseBtn === 'x') {
    embedContent = (
      <div ref={twitterRef} className='flex justify-center'>
        <blockquote className='twitter-tweet'>
          <a href={emberX || defaultVideo.twitter}></a>
        </blockquote>
      </div>
    )
  } else if (embedChoiseBtn === 'tiktok') {
    embedContent = (
      <blockquote
        className='tiktok-embed'
        cite={emberTictok || defaultVideo.tiktok}
        data-video-id={
          emberTictok?.split('/').pop() || defaultVideo.tiktok.split('/').pop()
        }
      >
        <a href={emberTictok || defaultVideo.tiktok}></a>
      </blockquote>
    )
  }

  return <div className='mx-auto w-full max-w-3xl'>{embedContent}</div>
}
