import { createStore } from '@src/utils/store/createStore'

export const $currentPlayPosition = createStore(0)
export const incrementCurrentPlayPosition = () => {
  $currentPlayPosition.setData((prev) => prev + 1)
}
export const resetCurrentPlayPosition = () => {
  $currentPlayPosition.setData(0)
}
