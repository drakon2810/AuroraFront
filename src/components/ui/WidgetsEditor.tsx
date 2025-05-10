import { FallingImageWidget } from '../ui/widgets'

const WidgetsEditor = () => {
  const initialFiles: (File | null)[] = []
  const handleChange = (newFiles: (File | null)[]) => {
    console.log('Files changed:', newFiles)
  }

  return <FallingImageWidget value={initialFiles} onChange={handleChange} />
}

export default WidgetsEditor
