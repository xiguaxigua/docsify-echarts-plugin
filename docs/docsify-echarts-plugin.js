(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.docsifyEcharts = factory());
}(this, (function () { 'use strict';

function install(hook, vm) {
  var dom = window.Docsify.dom;

  hook.beforeEach(function (content) {
    content += '<div id="canvas">1</div>';
    return content;
  });
  hook.doneEach(function (html, next) {
    console.log('afterEach', html, next);
    var script = document.createElement('script');
    script.innerHTML = '\n        console.log(1);\n        console.log(echarts);\n        console.log(document.getElementById(\'canvas\'))\n    ';
    dom.appendTo(dom.body, script);
    next(html);
  });
}

if (window.$docsify) window.$docsify.plugins = [].concat(install, $docsify.plugins);

return install;

})));
