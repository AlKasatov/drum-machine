import { clearMatrix } from '@src/models/$patternMatrix'

export const ClearBtn = () => {
  return (
    <button
      className={'bg-red-700 rounded text-red-50 py-1 px-4'}
      onClick={clearMatrix}
    >
      Clear
    </button>
  )
}
