import { changeBpmWhilePlaying } from '@src/controls/play'
import { setTempoByBpm } from '@src/models/$tempo'
import { F$isPatternPlaying } from '@src/models/F$isPatternPlaying'

export const changeTempoBpm = (e: any) => {
  setTempoByBpm(+e.target.value)
  if (F$isPatternPlaying.getValue()) {
    changeBpmWhilePlaying()
  }
}
