type TargetContext = '_self' | '_parent' | '_blank' | '_top'

export const openWindow = (url: string, opts?: { target?: TargetContext; [key: string]: any }) => {
  const { target = '_self', ...others } = opts || {}
  window.open(
    url,
    target,
    Object.entries(others)
      .reduce((preValue: string[], curValue) => {
        const [key, value] = curValue
        return [...preValue, `${key}=${value}`]
      }, [])
      .join(',')
  )
}

export const regexUrl = new RegExp(
  '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  'i'
)

export function filteredRouter(routers: any, param = 'supported') {
  function _filter(nodes: any) {
    return nodes.filter((node: any) => {
      // 不支持的跳由，直接过滤掉
      if (node[param] === true) {
        return false
      }

      // 有子路由，且没有符合条件的子路由时，过滤掉
      if (node.children) {
        node.children = _filter(node.children)
        if (node.children.length === 0) {
          return false
        }
      }

      // 默认保留
      return true
    })
  }

  return _filter(routers)
}
