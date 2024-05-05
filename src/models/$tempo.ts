import { createStore } from '@src/utils/store/createStore'

export const $tempo = createStore({
  bpm: 120,
  ms: 125,
})

export const setTempoByBpm = (bpm: number) => {
  $tempo.setData({
    bpm,
    ms: Math.floor(15_000 / bpm),
  })
}

export const setTempoByIntervalMs = (ms: number) => {
  $tempo.setData({
    bpm: Math.floor(15_000 / ms),
    ms,
  })
}
