import { createStore } from '@src/utils/store/createStore'

export const $currentNoteCoords = createStore({ rowIndex: 0, colIndex: 0 })
export const selectNote = (rowIndex: number, colIndex: number) => {
  $currentNoteCoords.setData({
    rowIndex,
    colIndex,
  })
}
