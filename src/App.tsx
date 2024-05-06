import { useEffect } from 'react'

import { A$samples } from '@src/models/A$samples'
import { useAsyncStore } from '@src/utils/store/useStore'
import { ClearBtn } from '@src/views/ClearBtn'
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
    <div className={'max-w-7xl w-fit mx-auto montserrat p-2'}>
      <div className={'flex justify-between p-1 text-xl'}>
        <PlayBtn />
        <Tempo />
        <ClearBtn />
      </div>
      <div className="flex g-2">
        <div className={'p-1'}>
          {data?.map((item) => {
            return (
              <div
                className={
                  'mb-1 w-32 px-2 w-20 h-8 leading-8 bg-blue-500 text-blue-50 overflow-ellipsis overflow-hidden'
                }
                key={item.name}
              >
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
