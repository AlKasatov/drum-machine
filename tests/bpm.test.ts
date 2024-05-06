import { expect, test } from '@jest/globals'

import { $tempo, setTempoByBpm } from '../src/models/$tempo'

test('120 bpm', () => {
  setTempoByBpm(120)
  expect($tempo.getValue()).toEqual({
    bpm: 120,
    ms: 125,
  })
})
