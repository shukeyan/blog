
# 多个坐标轴 0 坐标不对齐

## 问题描述

开发过程中要设置两个坐标轴的两个图例，坐标轴的0轴不对齐，例如：

![echarts-more-axis-error](/echarts/more-yaxis.png)

## 问题解决

设置坐标轴的`min`和`max`属性

```js {8,9,23,24}
 // ...
    yAxis: [
    {
      type: 'value',
      name: 'Evaporation',
      position: 'left',
      alignTicks: true,
      min: -1000,
      max: 1000,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: '温度',
      min: -100,
      max: 100,
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
 // ...

```

或者设置绝对值的最大值和最小值相等：

```
// ...
 yAxis: [
    {
      type: 'value',
      name: 'Evaporation',
      position: 'left',
      alignTicks: true,
      min: (val) => {
        if(Math.abs(val.min) > Math.abs(val.max)) {
          return (-Math.abs(val.min) * 1.2).toFixed(0)
        } else {
          return (-Math.abs(val.max) * 1.2).toFixed(0)
        }
      },
      max: (val) => {
        if(Math.abs(val.min) > Math.abs(val.max)) {
          return (Math.abs(val.min) * 1.2).toFixed(0)
        } else {
          return (Math.abs(val.max) * 1.2).toFixed(0)
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: '温度',
      min: (val) => {
        if(Math.abs(val.min) > Math.abs(val.max)) {
          return (-Math.abs(val.min) * 1.2).toFixed(0)
        } else {
          return (-Math.abs(val.max) * 1.2).toFixed(0)
        }
      },
      max: (val) => {
        if(Math.abs(val.min) > Math.abs(val.max)) {
          return (Math.abs(val.min) * 1.2).toFixed(0)
        } else {
          return (Math.abs(val.max) * 1.2).toFixed(0)
        }
      },
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
// ...
```

结果：

![more-yaxis-answer](/echarts/more-yaxis-answer.png)


## 扩展

:::tip 扩展
设置`min`和`max`还可以调整图形的差异对比图形波动幅度。

```js
// ...
yAxis: {
    type: 'value',
    min: (val) => Math.ceil(val.min * 0.9),
    max: (val) => Math.ceil(val.max * 1.2)
  },
// ...
```

![min-max](/echarts/min-max.png)

:::
