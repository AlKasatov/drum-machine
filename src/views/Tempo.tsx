import { tapTempo } from '@src/controls/play'
import { $tempo, setTempoByBpm } from '@src/models/$tempo'
import { useStore } from '@src/utils/store/useStore'

export const Tempo = () => {
  const value = useStore($tempo).bpm
  return (
    <div className={'flex'}>
      <input
        type="number"
        value={value}
        onChange={(e: any) => {
          setTempoByBpm(+e.target.value)
        }}
      />
      <button onClick={tapTempo}>TAP</button>
    </div>
  )
}
