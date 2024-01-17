import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid({
    typescript: {
      // onlyRemoveTypeImports: true,
    }
  })],
  server: {
    host: "10.0.0.100",
  }
})
