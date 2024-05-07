import { MAX_BPM, MIN_BPM } from '@src/constants'
import { tapTempo } from '@src/controls/play'
import { $tempo, setTempoByBpm } from '@src/models/$tempo'
import { useStore } from '@src/utils/store/useStore'

export const Tempo = () => {
  const value = useStore($tempo).bpm
  return (
    <div className={'flex items-center'}>
      <div className={'mr-2 text-blue-500'}>BPM:</div>
      <input
        className={'w-16 text-center text-blue-600 outline-blue-500'}
        min={MIN_BPM}
        max={MAX_BPM}
        type="number"
        value={value}
        onChange={(e: any) => {
          setTempoByBpm(+e.target.value)
        }}
      />
      <button
        className={
          'ml-4 border border-blue-500 rounded text-blue-500 px-2 py-1 hover:bg-blue-100'
        }
        onMouseDown={tapTempo}
      >
        TAP
      </button>
    </div>
  )
}
