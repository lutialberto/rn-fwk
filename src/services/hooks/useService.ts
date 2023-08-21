import { useEffect, useState } from 'react'

interface Props<T> {
  promiseFn: () => Promise<T>
  onSuccess?: (data: T) => void,
  onError?: (error: any) => void,
  executeOnInit?: boolean
}

export function useService<T>({
  promiseFn,
  onSuccess = () => {},
  onError = () => {},
  executeOnInit = true
}:Props<T>) {
  const [data, setData] = useState<T | undefined>(undefined)
  const [error, setError] = useState<any | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
 
  useEffect(() => {
    if (executeOnInit) execFn()
  }, [])
  
  const execFn = () => {
    setIsLoading(true)
    promiseFn()
      .then(response => {
        setIsLoading(false)
        setData(response)
        onSuccess(response)
      })
      .catch(err => {
        setIsLoading(false)
        setError(err)
        onError(err);
      })
      .finally(() => setIsLoading(false))
  }

  return {
    data,
    error,
    isLoading,
    execFn
  }
}