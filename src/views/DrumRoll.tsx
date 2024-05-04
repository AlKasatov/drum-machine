import { handleToggleNote, keyboardHandler } from '@src/controls/drumPattern'
import { $currentNoteCoords } from '@src/models/$currentNoteCoords'
import { $currentPlayPosition } from '@src/models/$currentPlayPosition'
import { $patternMatrix } from '@src/models/$patternMatrix'
import { F$isPatternPlaying } from '@src/models/F$isPatternPlaying'
import { useFlagStore } from '@src/utils/store/useFlagStore'
import { useStore } from '@src/utils/store/useStore'

export const DrumRoll = () => {
  const drumRoll = useStore($patternMatrix)
  const currentNote = useStore($currentNoteCoords)
  const isPlaying = useFlagStore(F$isPatternPlaying)
  const currentPosition = useStore($currentPlayPosition)
  return (
    <div
      onKeyDown={(e) => {
        console.log(e.code)
        keyboardHandler(e.code)
      }}
    >
      {drumRoll.map((row, rowIndex) => {
        return (
          <div
            className={'flex gap-1 outline-none'}
            key={rowIndex}
            tabIndex={1}
          >
            {row.map((value, colIndex) => {
              return (
                <div
                  onClick={() => {
                    handleToggleNote(rowIndex, colIndex)
                  }}
                  className={`mb-1 w-12 h-8 cursor-pointer ${
                    currentNote.rowIndex === rowIndex &&
                    currentNote.colIndex === colIndex
                      ? 'border-4 border-violet-400'
                      : ''
                  } ${
                    value
                      ? 'bg-blue-700'
                      : colIndex % 4 === 0
                      ? 'bg-blue-200'
                      : 'bg-blue-100'
                  } ${
                    isPlaying &&
                    currentPosition % drumRoll[0].length === colIndex
                      ? 'opacity-50'
                      : ''
                  }`}
                  key={`${rowIndex}-${colIndex}`}
                ></div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
