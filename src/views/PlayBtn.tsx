import { handleStartPlaying, handleStopPlaying } from '@src/controls/play'
import { $currentPlayPosition } from '@src/models/$currentPlayPosition'
import { F$isPatternPlaying } from '@src/models/F$isPatternPlaying'
import { useFlagStore } from '@src/utils/store/useFlagStore'
import { useStore } from '@src/utils/store/useStore'

export const PlayBtn = () => {
  const isPlaying = useFlagStore(F$isPatternPlaying)
  const position = useStore($currentPlayPosition)

  return (
    <button
      className={'border p-3 rounded'}
      onClick={isPlaying ? handleStopPlaying : handleStartPlaying}
    >
      {isPlaying ? 'Stop' : 'Play'} - {position}
    </button>
  )
}
