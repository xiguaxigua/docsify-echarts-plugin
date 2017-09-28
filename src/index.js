function install (hook, vm) {
  const dom = window.Docsify.dom

  hook.beforeEach(function (content) {
    content += '<div id="canvas">1</div>'
    return content
  })
  hook.doneEach(function (html, next) {
    console.log('afterEach', html, next)
    const script = document.createElement('script')
    script.innerHTML = `
        console.log(1);
        console.log(echarts);
        console.log(document.getElementById('canvas'))
    `
    dom.appendTo(dom.body, script)
    next(html)
  })
}

if (window.$docsify) window.$docsify.plugins = [].concat(install, $docsify.plugins)
export default install
