import { createStore } from '@src/utils/store/createStore'

const MATRIX_WIDTH = 16
const MATRIX_HEIGHT = 3
export const $patternMatrix = createStore<boolean[][]>(
  new Array(MATRIX_HEIGHT).fill(
    new Array(MATRIX_WIDTH).fill(false)
  ) as boolean[][]
)

export const toggleNote = (rowIndex: number, colIndex: number) => {
  $patternMatrix.setData((prev) => {
    return prev.map((row, ri) => {
      return row.map((value, ci) => {
        return ri === rowIndex && ci === colIndex ? !value : value
      })
    })
  })
}

export const clearMatrix = () => {
  $patternMatrix.setData((prev) => {
    return prev.map((row) => {
      return row.map(() => {
        return false
      })
    })
  })
}
