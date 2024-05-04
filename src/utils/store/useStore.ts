import { useSyncExternalStore } from 'react'

import { Store } from '@src/utils/store/types'

export const useStore = <T>(store: Store<T>) => {
  return useSyncExternalStore(store.subscribe, store.getValue)
}
