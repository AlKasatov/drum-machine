import { getSamples } from '@src/api/getSamples'
import { createAsyncStore } from '@src/utils/store/createAsyncStore'

export const A$samples = createAsyncStore<
  { name: string; audioBuffer: AudioBuffer }[]
>(getSamples, [])
