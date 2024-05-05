import { createStore } from '@src/utils/store/createStore'

export const $samples = createStore<
  { name: string; audioBuffer: AudioBuffer }[]
>([])

export const audioContext = new AudioContext()

async function getSample(path: string, name: string) {
  const data = await fetch(`./${path}`)
  const arrayBuffer = await data.arrayBuffer()
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
  return {
    name,
    audioBuffer,
  }
}

Promise.all([
  getSample('sounds/h.wav', 'HiHat'),
  getSample('sounds/s.wav', 'Snare'),
  getSample('sounds/k.wav', 'Kick'),
]).then((samples) => {
  $samples.setData(samples)
})

export const playAudioBuffer = (audioBuffer: AudioBuffer) => {
  const sourceNode = audioContext.createBufferSource()
  sourceNode.buffer = audioBuffer

  // Создаем узел управления громкостью и подключаем его к контексту
  const gainNode = audioContext.createGain()

  // Подключаем источник к узлу управления громкостью
  sourceNode.connect(gainNode)

  // Подключаем узел управления громкостью к выходу аудио контекста
  gainNode.connect(audioContext.destination)

  // Воспроизводим аудио
  sourceNode.playbackRate.value = 1
  sourceNode.start()
}
