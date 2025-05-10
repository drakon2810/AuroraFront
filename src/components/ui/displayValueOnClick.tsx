import { useFallingImagesStore } from '../../store/useWidgetsStore'
import '../Styles/DisplayValueOnClick.css'

export const DisplayValueOnClick = ({
  texts
}: {
  texts: { id: number; x: number; y: number; value: string }[]
}) => {
  const value = useFallingImagesStore((state) => state.value)
  const isPopTickerColor = useFallingImagesStore(
    (state) => state.isPopTickerColor
  )
  const fontSize = useFallingImagesStore((state) => state.fontSize)
  const isPopTickerFonts = useFallingImagesStore(
    (state) => state.isPopTickerFonts
  )

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none'
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
            fontSize: `${fontSize || 16}px`,
            fontWeight: '900',
            fontFamily: `${isPopTickerFonts}`,
            color: `${isPopTickerColor}`,
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 1000,
            animation:
              'appearAndGrow 0.5s ease-in-out, fadeOut 2s ease-in-out 0.5s forwards'
          }}
        >
          <p>{value.value || 'Ticker'}</p>
        </div>
      ))}
    </div>
  )
}
