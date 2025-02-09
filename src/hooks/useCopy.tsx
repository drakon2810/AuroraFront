import { MouseEvent, useState } from 'react'

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = (value: MouseEvent<HTMLElement> | string) => {
    if (typeof value === 'string') {
      navigator.clipboard.writeText(value)
    } else {
      const text = (value.target as HTMLElement).innerText
      navigator.clipboard.writeText(text)
    }

    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  return { isCopied, copy }
}
