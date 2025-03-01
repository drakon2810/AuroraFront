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
            backgroundColor: 'transparent',
            color: 'black',
            fontSize: '48px',
            fontWeight: 'bold',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 1000
          }}
        >
          <p>{value.value || 'Ticker'}</p>
        </div>
      ))}
    </div>
  )
}
