import { $audioContext } from '@src/models/$audioContext'

export const playAudioBuffer = (audioBuffer: AudioBuffer) => {
  const audioContext = $audioContext.getValue()
  const sourceNode = audioContext.createBufferSource()
  sourceNode.buffer = audioBuffer

  // Создаем узел управления громкостью и подключаем его к контексту
  const gainNode = audioContext.createGain()

  // Подключаем источник к узлу управления громкостью
  sourceNode.connect(gainNode)

  // Подключаем узел управления громкостью к выходу аудио контекста
  gainNode.connect(audioContext.destination)

  // Воспроизводим аудио
  sourceNode.playbackRate.value = 4
  sourceNode.start()
}
