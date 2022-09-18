import visualizer from 'rollup-plugin-visualizer'

export default function configVisualizerPlugin() {
  const isReportMode = false
  console.log(import.meta, '---')
  if (isReportMode) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  }
  return []
}
