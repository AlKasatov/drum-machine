import { $audioContext } from '@src/models/$audioContext'

export async function getSample(path: string, name: string) {
  const data = await fetch(`./${path}`)
  const arrayBuffer = await data.arrayBuffer()
  const audioBuffer = await $audioContext
    .getValue()
    .decodeAudioData(arrayBuffer)
  return {
    name,
    audioBuffer,
  }
}
