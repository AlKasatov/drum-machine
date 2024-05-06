import { useSyncExternalStore } from 'react'

import { AsyncStore, Store } from '@src/utils/store/types'

export const useStore = <T>(store: Store<T>) => {
  return useSyncExternalStore(store.subscribe, store.getValue)
}

export const useAsyncStore = <T>(store: AsyncStore<T>) => {
  return useSyncExternalStore(store.subscribe, store.getValue)
}
