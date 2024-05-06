import { FlagStore } from '@src/utils/store/types'

export const createFlagStore = (initValue: boolean): FlagStore => {
  let value = initValue
  const cbs = new Set()
  return {
    subscribe: (cb: unknown) => {
      cbs.add(cb)
      return () => {
        cbs.delete(cb)
      }
    },
    on: () => {
      value = true
      cbs.forEach((cb: any) => {
        cb(value)
      })
    },
    off: () => {
      value = false
      cbs.forEach((cb: any) => {
        cb(value)
      })
    },
    toggle: () => {
      value = !value
      cbs.forEach((cb: any) => {
        cb(value)
      })
    },
    getValue: () => {
      return value
    },
  }
}
