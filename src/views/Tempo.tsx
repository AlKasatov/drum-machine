import { changeTempoBpm } from '@src/controls/changeTempo'
import { $tempo } from '@src/models/$tempo'
import { useStore } from '@src/utils/store/useStore'

export const Tempo = () => {
  const value = useStore($tempo).bpm
  return (
    <div className={'flex'}>
      <input type="number" value={value} onChange={changeTempoBpm} />
      <button>TAP</button>
    </div>
  )
}
