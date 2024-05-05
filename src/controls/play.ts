import {
  $currentPlayPosition,
  incrementCurrentPlayPosition,
  resetCurrentPlayPosition,
} from '@src/models/$currentPlayPosition'
import { $patternMatrix } from '@src/models/$patternMatrix'
import { $samples, playAudioBuffer } from '@src/models/$samples'
import { $tempo } from '@src/models/$tempo'
import { F$isPatternPlaying } from '@src/models/F$isPatternPlaying'

let interval: any = null
export const handleStartPlaying = () => {
  F$isPatternPlaying.on()
  const samples = $samples.getValue()
  interval = setInterval(() => {
    const currentPosition = $currentPlayPosition.getValue()
    const matrix = $patternMatrix.getValue()
    matrix.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        if (value && currentPosition % matrix[0].length === colIndex) {
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
