import { useSyncExternalStore } from 'react'

import { FlagStore } from '@src/utils/store/types'

export const useFlagStore = (store: FlagStore) => {
  return useSyncExternalStore(store.subscribe, store.getValue)
}
