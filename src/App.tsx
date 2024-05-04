import { clearMatrix } from '@src/models/$patternMatrix'
import { DrumRoll } from '@src/views/DrumRoll'
import { PlayBtn } from '@src/views/PlayBtn'

export const App = () => {
  return (
    <div className={''}>
      <button onClick={clearMatrix}>Clear</button>
      <PlayBtn />
      <DrumRoll />
    </div>
  )
}
