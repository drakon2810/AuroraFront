import tiktokFirst from '../../../public/images/help/tiktok1.jpg'
import tiktokSecond from '../../../public/images/help/toktok2.jpg'
import youtubeFirst from '../../../public/images/help/youtube-1.jpg'
import youtubeSecond from '../../../public/images/help/youtube-2.jpg'
import youtubeTheerd from '../../../public/images/help/youtube-3.jpg'
import { useState } from 'react'

export const FullscreenModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [btn, setBtn] = useState<'youtube' | 'x' | 'tiktok'>('youtube')

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleToggle = (value: typeof btn) => {
    setBtn(value)
  }

  return (
    <div className='relative'>
      <button
        onClick={toggleModal}
        className='group relative rounded-lg px-6 py-3 text-blue-700 transition-colors duration-300 hover:text-blue-600 focus:outline-none'
      >
        Help
        <span className='absolute bottom-2 left-6 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-3rem)]'></span>
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4'
          onClick={toggleModal}
        >
          <div
            className='relative h-full max-h-full w-full max-w-xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className='absolute right-4 top-4 text-2xl font-bold text-gray-500 hover:text-red-500 focus:outline-none'
            >
              &times;
            </button>
            <div className='flex justify-center'>
              <h3 className='mb-4 text-xl font-semibold'>
                How to Embed a {btn.toUpperCase()}
              </h3>
            </div>

            <div className='mb-6 flex w-full justify-center'>
              <div className='flex w-full max-w-[500px] items-center justify-between rounded-md bg-gray-200 p-1'>
                <button
                  onClick={() => handleToggle('youtube')}
                  className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                    btn === 'youtube'
                      ? 'bg-white text-black'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Youtube
                </button>
                <button
                  onClick={() => handleToggle('x')}
                  className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                    btn === 'x'
                      ? 'bg-white text-black'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  X
                </button>
                <button
                  onClick={() => handleToggle('tiktok')}
                  className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                    btn === 'tiktok'
                      ? 'bg-white text-black'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  TikTok
                </button>
              </div>
            </div>

            <div className='space-y-4 text-left text-base font-medium'>
              {btn === 'youtube' && (
                <div>
                  <p className='pl-4 font-semibold'>
                    1. Go to the YouTube video you want to embed.
                  </p>
                  <p className='pl-4 font-semibold'>
                    2. Click <strong>SHARE</strong>.
                  </p>
                  <img
                    src={youtubeFirst}
                    alt='YouTube step 1'
                    className='my-2 pl-4'
                  />
                  <p className='pl-4 font-semibold'>
                    3. From the list of Share options, click{' '}
                    <strong>Embed</strong>.
                  </p>
                  <img
                    src={youtubeSecond}
                    alt='YouTube step 2'
                    className='my-2 pl-4'
                  />
                  <p className='pl-4 font-semibold'>
                    4. From the box that appears, copy the link like this:{' '}
                    <strong>https://www.youtube.com/embed/QCJGIz7ROUI</strong>
                  </p>
                  <img
                    src={youtubeTheerd}
                    alt='YouTube step 3'
                    className='my-2 pl-4'
                  />
                  <p className='pl-4 font-semibold'>
                    5. Paste this into the <strong>Embed link</strong> field.
                  </p>
                </div>
              )}
              {btn === 'tiktok' && (
                <div>
                  <p className='pl-4 font-semibold'>
                    1. Go to the TikTok video you want to embed.
                  </p>
                  <p className='pl-4 font-semibold'>
                    2. Click <strong>Paste</strong>.
                  </p>
                  <img
                    src={tiktokFirst}
                    alt='TikTok step 1'
                    className='my-2 pl-4'
                  />
                  <p className='pl-4 font-semibold'>
                    3. Select the link as shown in the photo:
                  </p>
                  <img
                    src={tiktokSecond}
                    alt='TikTok step 2'
                    className='my-2 pl-4'
                  />
                  <p className='pl-4 font-semibold'>
                    4. Paste this into the <strong>Embed link</strong> field.
                  </p>
                </div>
              )}
              {btn === 'x' && (
                <div>
                  <p className='pl-4 font-semibold'>
                    Инструкции пока не добавлены.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
