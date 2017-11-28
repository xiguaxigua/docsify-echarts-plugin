# docsify-echarts-plugin

> support to use echarts in docsify.

### install

```html
<script>
  window.$docsify = {
    name: 'docsify-echarts-plugin',
    repo: 'https://github.com/xiguaxigua/docsify-echarts-plugin',
    loadSidebar: 'summary.md'
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/echarts@latest/dist/echarts.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-echarts-plugin/lib/index.min.js"></script>
```

### start
<pre lang="no-highlight"><code>```chart
{
  xAxis : [
    {
      type : 'category',
      data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis : [{ type : 'value' }],
  series : [
    {
      name:'直接访问',
      type:'bar',
      barWidth: '60%',
      data:[10, 52, 200, 334, 390, 330, 220]
    }
  ]
}
```
</code></pre>

### set container
<pre lang="no-highlight"><code>```chart
{
  settings: {
    width: '50%',
    height: '300px',
    border: '1px solid red'
  },
  xAxis : [
    {
      type : 'category',
      data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis : [{ type : 'value' }],
  series : [
    {
      name:'直接访问',
      type:'bar',
      barWidth: '60%',
      data:[10, 52, 200, 334, 390, 330, 220]
    }
  ]
}
```
</code></pre>

### set events
<pre lang="no-highlight"><code>```chart
{
  settings: {
    events: {
      click (e) {
        console.log(e)
      }
    }
  },
  xAxis : [
    {
      type : 'category',
      data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis : [{ type : 'value' }],
  series : [
    {
      name:'直接访问',
      type:'bar',
      barWidth: '60%',
      data:[10, 52, 200, 334, 390, 330, 220]
    }
  ]
}
```
</code></pre>

### set theme
<pre lang="no-highlight"><code>```chart
{
  settings: {
    theme: {
      categoryAxis: {
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false }
      },
      valueAxis: { axisLine: { show: false } }
    }
  },
  xAxis : [
    {
      type : 'category',
      data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis : [{ type : 'value' }],
  series : [
    {
      name:'直接访问',
      type:'bar',
      barWidth: '60%',
      data:[10, 52, 200, 334, 390, 330, 220]
    }
  ]
}
```
</code></pre>

or set global theme

```js
window.$docsify = {
  name: 'docsify-echarts-plugin',
  repo: 'https://github.com/xiguaxigua/docsify-echarts-plugin',
  loadSidebar: 'summary.md',
  echartsTheme: {
    categoryAxis: {
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false }
    },
    valueAxis: { axisLine: { show: false } }
  }
}
```
