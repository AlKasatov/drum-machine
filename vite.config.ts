import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

//import { VitePluginFonts } from 'vite-plugin-fonts'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://alkasatov.github.io/drum-machine/',
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    // VitePluginFonts({
    //   custom: {
    //     families: [
    //       {
    //         name: 'Gilroy',
    //         local:
    //           'Gilroy-Regular, Gilroy-Bold, Gilroy-Medium, Gilroy-SemiBold, Gilroy-Light',
    //         src: ['./fonts/*.woff', './fonts/*.woff2'],
    //       },
    //     ],
    //     display: 'auto',
    //     preload: true,
    //     prefetch: false,
    //     injectTo: 'head-prepend',
    //   },
    // }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3005,
  },
  build: {
    outDir: path.join(__dirname, 'build'),
    minify: 'terser',

    terserOptions: {
      compress: {
        drop_console: true,
        unused: true,
      },
    },

    rollupOptions: {
      plugins: [(await import('@rollup/plugin-terser')).default()],
    },

    sourcemap: true,
  },
})
