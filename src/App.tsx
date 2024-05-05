import { clearMatrix } from '@src/models/$patternMatrix'
import { $samples } from '@src/models/$samples'
import { useStore } from '@src/utils/store/useStore'
import { DrumRoll } from '@src/views/DrumRoll'
import { PlayBtn } from '@src/views/PlayBtn'

export const App = () => {
  const samples = useStore($samples)
  return (
    <div className={''}>
      <button onClick={clearMatrix}>Clear</button>
      <PlayBtn />
      <div className="flex g-2">
        <div>
          {samples?.map((item) => {
            return (
              <div className={'mb-1 w-20 h-8'} key={item.name}>
                {item.name}
              </div>
            )
          })}
        </div>
        <DrumRoll />
      </div>
    </div>
  )
}
