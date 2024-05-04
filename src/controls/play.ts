import {
  incrementCurrentPlayPosition,
  resetCurrentPlayPosition,
} from '@src/models/$currentPlayPosition'
import { $tempo } from '@src/models/$tempo'
import { F$isPatternPlaying } from '@src/models/F$isPatternPlaying'

let interval: any = null
export const handleStartPlaying = () => {
  F$isPatternPlaying.on()
  interval = setInterval(() => {
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
