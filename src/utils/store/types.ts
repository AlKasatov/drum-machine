export type Store<T> = {
  subscribe: (cb: () => void) => () => void
  setData: (data: ((arg: T) => T) | T) => void
  getValue: () => T
}
type AsyncData<T> = {
  isLoading: boolean
  isError: boolean
  error: any
  data: T | null
}
export type AsyncStore<T> = {
  subscribe: (cb: () => void) => () => void
  startChange: (...args: any) => void
  getValue: () => AsyncData<T>
  setData: (data: AsyncData<T>) => void
}

export type FlagStore = {
  subscribe: (cb: () => void) => () => void
  on: () => void
  off: () => void
  toggle: () => void
  getValue: () => boolean
}
