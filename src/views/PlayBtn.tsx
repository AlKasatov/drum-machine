import { handleStartPlaying, handleStopPlaying } from '@src/controls/play'
import { F$isPatternPlaying } from '@src/models/F$isPatternPlaying'
import { useFlagStore } from '@src/utils/store/useFlagStore'

export const PlayBtn = () => {
  const isPlaying = useFlagStore(F$isPatternPlaying)

  return (
    <button
      className={'bg-green-700 rounded text-green-50 py-1 px-4'}
      onClick={isPlaying ? handleStopPlaying : handleStartPlaying}
    >
      {isPlaying ? 'Stop' : 'Play'}
    </button>
  )
}
