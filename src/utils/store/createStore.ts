import { Store } from '@src/utils/store/types'

export const createStore = <T>(initValue: T): Store<T> => {
  let value = initValue
  const cbs = new Set()
  return {
    subscribe: (cb: unknown) => {
      cbs.add(cb)
      return () => {
        cbs.delete(cb)
      }
    },
    setData: (data: ((arg: T) => T) | T) => {
      if (typeof data === 'function') {
        value = (data as (arg: T) => T)(value)
      } else {
        value = data
      }
      cbs.forEach((cb: any) => {
        cb(value)
      })
    },
    getValue: () => {
      return value
    },
  }
}
