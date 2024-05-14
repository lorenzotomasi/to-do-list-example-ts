import { useEffect, useState } from "react"

interface UseFetchHookReturnType<T> {
  isLoading: boolean
  error: unknown
  data: T | undefined
}

interface UseFetchHookProps<T, P extends []> {
  promise: (...params: P) => Promise<T>
  params: P
}

function useFetchHook<T, P extends []>(props: UseFetchHookProps<T,P>): UseFetchHookReturnType<T> {
  const [state, setState] = useState<UseFetchHookReturnType<T>>({
    data: undefined,
    error: undefined,
    isLoading: true
  })

  useEffect(() => {
    props.promise(...props.params).then((result) => {
      setState({
        data: result,
        error: undefined,
        isLoading: false
      })
    }).catch((error) => {
      setState({
        data: undefined,
        error: error,
        isLoading: false
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}

export { useFetchHook }