import { useEffect } from 'react'

export const useTimeIntervals = (ms: number, callback: () => void) => {
  useEffect(() => {
    const interval = setInterval(callback, ms)
    return () => clearInterval(interval)
  }, [ms, callback])
}
