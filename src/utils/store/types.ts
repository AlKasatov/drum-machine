export type Store<T> = {
  subscribe: (cb: () => void) => () => void
  setData: (data: ((arg: T) => T) | T) => void
  getValue: () => T
}

export type Flag = {
  subscribe: (cb: () => void) => () => void
  on: () => void
  off: () => void
  toggle: () => void
  getValue: () => boolean
}
