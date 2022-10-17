import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export const arcoResolver = () => {
  return Components({
    dirs: ['src'], // Avoid parsing src/components.  避免解析到src/components
    deep: false,
    resolvers: [ArcoResolver()],
  })
}
