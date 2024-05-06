import {
  $currentPlayPosition,
  incrementCurrentPlayPosition,
  resetCurrentPlayPosition,
} from '@src/models/$currentPlayPosition'
import { $patternMatrix } from '@src/models/$patternMatrix'
import { $tempo } from '@src/models/$tempo'
import { A$samples } from '@src/models/A$samples'
import { F$isPatternPlaying } from '@src/models/F$isPatternPlaying'
import { playAudioBuffer } from '@src/utils/playAudioBuffer'

let interval: any = null
export const handleStartPlaying = () => {
  F$isPatternPlaying.on()
  const samples = A$samples.getValue().data
  interval = setInterval(() => {
    const currentPosition = $currentPlayPosition.getValue()
    const matrix = $patternMatrix.getValue()
    matrix.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        if (
          value &&
          currentPosition % matrix[0].length === colIndex &&
          samples
        ) {
          playAudioBuffer(samples[rowIndex].audioBuffer)
        }
      })
    })

    incrementCurrentPlayPosition()
  }, $tempo.getValue().ms)
}

export const handleStopPlaying = () => {
  F$isPatternPlaying.off()
  clearInterval(interval)
  resetCurrentPlayPosition()
  interval = null
}

export const changeBpmWhilePlaying = () => {
  clearInterval(interval)
  interval = setInterval(() => {
    incrementCurrentPlayPosition()
  }, $tempo.getValue().ms)
}
