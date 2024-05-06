import { expect, test } from '@jest/globals'

import {
  $tempo,
  setTempoByBpm,
  setTempoByIntervalMs,
} from '../src/models/$tempo'

test('120 bpm', () => {
  setTempoByBpm(120)
  expect($tempo.getValue()).toEqual({
    bpm: 120,
    ms: 125,
  })
})

test('1000_000 ms', () => {
  setTempoByIntervalMs(1000_000)
  expect($tempo.getValue()).toEqual({
    bpm: 1,
    ms: 15_000,
  })
})

test('1 ms', () => {
  setTempoByIntervalMs(1)
  expect($tempo.getValue()).toEqual({
    bpm: 480,
    ms: 31,
  })
})

test('480 bpm', () => {
  setTempoByBpm(480)
  expect($tempo.getValue()).toEqual({
    bpm: 480,
    ms: 31,
  })
})

test('1 bpm', () => {
  setTempoByBpm(1)
  expect($tempo.getValue()).toEqual({
    bpm: 1,
    ms: 15_000,
  })
})

test('481 bpm', () => {
  setTempoByBpm(481)
  expect($tempo.getValue()).toEqual({
    bpm: 480,
    ms: 31,
  })
})

test('800 bpm', () => {
  setTempoByBpm(800)
  expect($tempo.getValue()).toEqual({
    bpm: 480,
    ms: 31,
  })
})
