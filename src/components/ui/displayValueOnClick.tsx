import { useFallingImagesStore } from '../../store/useWidgetsStore'
import { useState } from 'react'

export const DisplayValueOnClick = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })

  const value = useFallingImagesStore((state) => state.value)

  const handleScreenClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()

    // Получаем координаты клика относительно окна браузера
    const clientX = event.clientX
    const clientY = event.clientY

    // Получаем координаты родительского элемента (div)
    const rect = event.currentTarget.getBoundingClientRect()

    // Вычисляем координаты клика относительно родительского элемента
    const x = clientX - rect.left
    const y = clientY - rect.top

    // Обновляем состояние
    setIsClicked(true)
    setClickPosition({ x, y })
  }

  console.log(value.value || 'Ticker')

  return (
    <div
      onClick={handleScreenClick}
      style={{
        height: '100vh',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'auto', // Разрешаем клики на родительском элементе
        cursor: 'pointer' // Добавляем курсор, чтобы было понятно, что можно кликать
      }}
    >
      {isClicked && (
        <div
          style={{
            position: 'absolute', // Позиционируем текст относительно клика
            left: clickPosition.x,
            top: clickPosition.y,
            padding: '20px',
            backgroundColor: 'transparent', // Без фона
            color: 'black', // Черный цвет текста
            fontSize: '48px', // Большой размер шрифта
            fontWeight: 'bold', // Жирный шрифт
            transform: 'translate(-50%, -50%)', // Центрируем текст относительно клика
            whiteSpace: 'nowrap', // Чтобы текст не переносился на новую строку
            pointerEvents: 'none', // Отключаем взаимодействие с этим текстом
            zIndex: 1000 // Чтобы текст был поверх остальных элементов
          }}
        >
          <p>{value.value || 'Ticker'}</p>
        </div>
      )}
    </div>
  )
}
