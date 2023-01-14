import { useEffect, useState } from 'react'

const useDynamicScreen = () => {
  const [viewChecker, setViewChecker] = useState(window.innerWidth)

  const resizerFunction = () => {
    setViewChecker(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resizerFunction)

    return () => {
      window.removeEventListener('resize', resizerFunction)
    }
  }, [viewChecker])

  return {
    viewChecker,
  }
}
export default useDynamicScreen
