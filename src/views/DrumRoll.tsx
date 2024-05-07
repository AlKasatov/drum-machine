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
      className={'bg-blue-50 pt-2 pl-2 pr-2 rounded'}
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
                  className={`mb-1 w-12 h-8 cursor-pointer rounded ${
                    currentNote.rowIndex === rowIndex &&
                    currentNote.colIndex === colIndex
                      ? 'border-8 border-blue-700'
                      : ''
                  } ${
                    value
                      ? 'bg-blue-500'
                      : colIndex % 4 === 0
                      ? 'bg-blue-200'
                      : 'bg-blue-100'
                  } ${
                    isPlaying &&
                    currentPosition % drumRoll[0].length === colIndex
                      ? 'opacity-50'
                      : ''
                  } hover:opacity-70`}
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
