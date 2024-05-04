import { useSyncExternalStore } from 'react'

import { Flag } from '@src/utils/store/types'

export const useFlagStore = (store: Flag) => {
  return useSyncExternalStore(store.subscribe, store.getValue)
}
