import { useFallingImagesStore } from '../../store/useFallingImagesStore'
import styles from '../Styles/RotatingImages.module.css'

const RotatingImages = () => {
  const fallingImages = useFallingImagesStore((state) => state.fallingImages)

  return (
    <div className='images-container'>
      {fallingImages.length > 0
        ? fallingImages.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`Falling Image ${index}`}
              className={styles.fallingimage}
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))
        : null}
    </div>
  )
}

export default RotatingImages
