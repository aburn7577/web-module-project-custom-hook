import { useLocalStorage } from '../hooks/useLocalStorage'

export const useDarkMode = (key, initialValues) => {
  const [state, setState] = useLocalStorage(key, initialValues)
  return [state, setState]
}