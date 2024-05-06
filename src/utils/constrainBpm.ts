import { MAX_BPM, MIN_BPM } from '@src/constants'

export const constrainBpm = (bpm: number) => {
  if (bpm < MIN_BPM) {
    bpm = MIN_BPM
  } else if (bpm > MAX_BPM) {
    bpm = MAX_BPM
  }
  return bpm
}
