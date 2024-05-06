import { constrainBpm } from '@src/utils/constrainBpm'
import { createStore } from '@src/utils/store/createStore'

export const $tempo = createStore({
  bpm: 120,
  ms: 125,
})

export const setTempoByBpm = (bpm: number) => {
  $tempo.setData({
    bpm: constrainBpm(bpm),
    ms: Math.floor(15_000 / constrainBpm(bpm)),
  })
}

export const setTempoByIntervalMs = (ms: number) => {
  const constrainedBpm = constrainBpm(Math.floor(60_000 / ms))
  $tempo.setData({
    bpm: constrainedBpm,
    ms: Math.floor(15_000 / constrainedBpm),
  })
}
