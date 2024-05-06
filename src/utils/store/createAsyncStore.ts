import { AsyncStore } from '@src/utils/store/types'

export const createAsyncStore = <T>(
  asyncFunc: any,
  initData?: T
): AsyncStore<T> => {
  let value = {
    isLoading: false,
    isError: false,
    data: initData ?? null,
    error: null,
  }
  const cbs = new Set()
  return {
    startChange: (...args) => {
      value = {
        ...value,
        isLoading: true,
        isError: false,
        error: null,
      }
      cbs.forEach((cb: any) => {
        cb(value)
      })
      asyncFunc(...args)
        .then((result: any) => {
          value = {
            isLoading: false,
            isError: false,
            error: null,
            data: result,
          }
          cbs.forEach((cb: any) => {
            cb(value)
          })
        })
        .catch((error: any) => {
          value = {
            error,
            isError: true,
            isLoading: false,
            data: initData as null,
          }
          cbs.forEach((cb: any) => {
            cb(value)
          })
        })
    },
    subscribe: (cb: unknown) => {
      cbs.add(cb)
      return () => {
        cbs.delete(cb)
      }
    },
    setData: (data: any) => {
      value = data
      cbs.forEach((cb: any) => {
        cb(value)
      })
    },
    getValue: () => {
      return value
    },
  }
}
