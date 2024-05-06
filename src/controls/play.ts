import {
  $currentPlayPosition,
  incrementCurrentPlayPosition,
  resetCurrentPlayPosition,
} from '@src/models/$currentPlayPosition'
import { $patternMatrix } from '@src/models/$patternMatrix'
import { $tempo, setTempoByIntervalMs } from '@src/models/$tempo'
import { A$samples } from '@src/models/A$samples'
import { F$isPatternPlaying } from '@src/models/F$isPatternPlaying'
import { playAudioBuffer } from '@src/utils/playAudioBuffer'

let interval: any = null

const play = () => {
  const samples = A$samples.getValue().data
  const currentPosition = $currentPlayPosition.getValue()
  const matrix = $patternMatrix.getValue()
  matrix.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (value && currentPosition % matrix[0].length === colIndex && samples) {
        playAudioBuffer(samples[rowIndex].audioBuffer)
      }
    })
  })
}
export const handleStartPlaying = () => {
  F$isPatternPlaying.on()
  interval = setInterval(() => {
    play()
    incrementCurrentPlayPosition()
  }, $tempo.getValue().ms)
}

export const handleStopPlaying = () => {
  F$isPatternPlaying.off()
  clearInterval(interval)
  resetCurrentPlayPosition()
  interval = null
}

let stamp = Date.now()

export const tapTempo = () => {
  const currentStamp = Date.now()
  setTempoByIntervalMs(currentStamp - stamp)
  stamp = currentStamp
  if (F$isPatternPlaying.getValue()) {
    clearInterval(interval)
    interval = setInterval(() => {
      play()
      incrementCurrentPlayPosition()
    }, $tempo.getValue().ms)
  }
}
$tempo.subscribe((value) => {
  if (F$isPatternPlaying.getValue()) {
    clearInterval(interval)
    interval = setInterval(() => {
      play()
      incrementCurrentPlayPosition()
    }, value.ms)
  }
})
