import { getSample } from '@src/api/getSample'
import { TRACKS } from '@src/constants'

export const getSamples = async () => {
  return Promise.all(
    TRACKS.map(({ title, fileName }) => {
      return getSample(`sounds/pack1/${fileName}.wav`, title)
    })
  )
}
