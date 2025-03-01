import { useFallingImagesStore } from '../../store/useWidgetsStore'

export const DisplayValueOnClick = ({
  texts
}: {
  texts: { id: number; x: number; y: number; value: string }[]
}) => {
  const value = useFallingImagesStore((state) => state.value)

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none' // Контейнер не перехватывает клики
      }}
    >
      {texts.map((text) => (
        <div
          key={text.id}
          style={{
            position: 'absolute',
            left: text.x,
            top: text.y,
            padding: '20px',
            fontSize: '64px', // Увеличенный размер
            fontWeight: '900', // Очень жирный текст
            color: 'white', // Основной цвет текста
            textShadow: `
              0 0 10px rgba(255, 255, 255, 0.8),
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 0, 0, 0.5),
              0 0 40px rgba(255, 0, 0, 0.4),
              0 0 50px rgba(255, 0, 255, 0.3)
            `, // Создает эффект ряби
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 1000,
            animation: 'fadeOut 2s ease-in-out forwards' // Анимация затухания
          }}
        >
          <p>{value.value || 'Ticker'}</p>
        </div>
      ))}
    </div>
  )
}
