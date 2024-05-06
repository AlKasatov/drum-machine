import { $audioContext } from '@src/models/$audioContext'

export const playAudioBuffer = (audioBuffer: AudioBuffer) => {
  const audioContext = $audioContext.getValue()
  const sourceNode = audioContext.createBufferSource()
  sourceNode.buffer = audioBuffer
  const gainNode = audioContext.createGain()
  sourceNode.connect(gainNode)
  gainNode.connect(audioContext.destination)
  sourceNode.playbackRate.value = 2
  sourceNode.start()
}
