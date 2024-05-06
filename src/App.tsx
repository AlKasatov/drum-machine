import { useEffect } from 'react'

import { clearMatrix } from '@src/models/$patternMatrix'
import { A$samples } from '@src/models/A$samples'
import { useAsyncStore } from '@src/utils/store/useStore'
import { DrumRoll } from '@src/views/DrumRoll'
import { PlayBtn } from '@src/views/PlayBtn'
import { Tempo } from '@src/views/Tempo'

export const App = () => {
  const store = useAsyncStore(A$samples)
  const { data, isLoading, isError, error } = store

  useEffect(() => {
    A$samples.startChange()
  }, [])

  if (isLoading) {
    return <h1>Loading</h1>
  }
  if (isError) {
    return <h1>Error</h1>
  }
  return (
    <div className={''}>
      <Tempo />
      <button onClick={clearMatrix}>Clear</button>
      <PlayBtn />
      <div className="flex g-2">
        <div>
          {data?.map((item) => {
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
