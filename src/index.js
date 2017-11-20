function install (hook, vm) {
  const CONTAINER_CLASS = 'docsify-echarts-container'
  const DEFAULT_WIDTH = '100%'
  const DEFAULT_HEIGHT = '400px'
  const DEFAULT_BORDER = '1px solid #ccc'

  const dom = window.Docsify.dom
  const chartList = []

  hook.beforeEach(function (content) {
    chartList.length = 0    
    const reg = /^```chart((.*\n)+?)?```$/gim
    const charts = content.match(reg)
    content = content.replace(reg, `<div class="${CONTAINER_CLASS}"></div>`)
    if (charts && charts.length) {
      charts.map((chartStr, index) => {
        let chart = ''
        try {
          chart = chartStr.replace(/(^```chart|```$)/gim, '')
          chart = new Function(`var a = ${chart};return a;`)()
        } catch (e) { console.warn('chart parse error.') }
        if (chart) {
          chartList.push(Object.assign({}, chart, { __id: index }))
        }
      })
    }
    return content
  })

  hook.doneEach(function (html, next) {
    const script = document.createElement('script')
    script.textContent = chartList.map(chart => {
      const {
        __id: id,
        settings: {
          width = DEFAULT_WIDTH,
          height = DEFAULT_HEIGHT,
          border = DEFAULT_BORDER,
          theme = {},
          initOptions = {}
        } = {}
      } = chart
      return `
        var chartContainers${id} = document.querySelectorAll('.${CONTAINER_CLASS}')[${id}];
        chartContainers${id}.style.width = '${width}';
        chartContainers${id}.style.height = '${height}';
        chartContainers${id}.style.border = '${border}';
        var chart${id} = echarts.init(chartContainers${id}, ${JSON.stringify(theme)}, ${JSON.stringify(initOptions)});
        chart${id}.setOption(${JSON.stringify(chart)}, true);
      `
    }).join('')
    dom.appendTo(dom.body, script)
    next(html)
  })
}

if (window.$docsify) window.$docsify.plugins = [].concat(install, $docsify.plugins)
export default install
