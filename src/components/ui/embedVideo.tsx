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
    tiktok: 'https://www.tiktok.com/embed/7012178757775592706'
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
    if (embedChoiseBtn === 'tiktok' && emberTictok) {
      const scriptSrc = 'https://www.tiktok.com/embed.js'

      if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
        const script = document.createElement('script')
        script.src = scriptSrc
        script.async = true
        document.body.appendChild(script)
      }
    }
  }, [embedChoiseBtn, emberTictok])

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
        <blockquote className='twitter-tweet' data-theme='dark'>
          <a href={emberX || defaultVideo.twitter}></a>
        </blockquote>
      </div>
    )
  } else if (embedChoiseBtn === 'tiktok') {
    embedContent = emberTictok ? (
      <blockquote
        className='tiktok-embed'
        cite={emberTictok}
        data-video-id={emberTictok.split('/').pop()}
      >
        <a href={emberTictok}></a>
      </blockquote>
    ) : (
      <iframe
        src={defaultVideo.tiktok}
        width='330'
        height='800'
        className='rounded-lg shadow-md'
        allowFullScreen
      />
    )
  }

  return (
    <div
      className={
        embedChoiseBtn === 'youtube' || embedChoiseBtn === 'x'
          ? 'mx-auto w-full max-w-3xl'
          : ''
      }
    >
      {embedContent}
    </div>
  )
}
