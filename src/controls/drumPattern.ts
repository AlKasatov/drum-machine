import { $currentNoteCoords, selectNote } from '@src/models/$currentNoteCoords'
import { $patternMatrix, toggleNote } from '@src/models/$patternMatrix'

export const handleToggleNote = (rowIndex: number, colIndex: number) => {
  toggleNote(rowIndex, colIndex)
  selectNote(rowIndex, colIndex)
}
export const keyboardHandler = (key: string) => {
  const { rowIndex, colIndex } = $currentNoteCoords.getValue()
  const matrix = $patternMatrix.getValue()
  // TODO
  switch (key) {
    case 'Enter':
      toggleNote(rowIndex, colIndex)
      break
    case 'ArrowLeft':
      if (typeof matrix[rowIndex]?.[colIndex - 1] !== 'undefined') {
        selectNote(rowIndex, colIndex - 1)
      }
      break
    case 'ArrowDown':
      if (typeof matrix[rowIndex + 1]?.[colIndex] !== 'undefined') {
        selectNote(rowIndex + 1, colIndex)
      }
      break
    case 'ArrowRight':
      if (typeof matrix[rowIndex]?.[colIndex + 1] !== 'undefined') {
        selectNote(rowIndex, colIndex + 1)
      }
      break
    case 'ArrowUp':
      if (typeof matrix[rowIndex - 1]?.[colIndex] !== 'undefined') {
        selectNote(rowIndex - 1, colIndex)
      }
      break
  }
}
