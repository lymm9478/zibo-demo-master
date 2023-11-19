<template>
  <div style="transform: translate(5%,5%);
       width: 90%;height:90% ;opacity: 1" >
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png" >
    <span id="overlay-text">月度预警统计</span>
    <div id="main3" style="height: 100%;width: 100%"></div>
  </div>

</template>
<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';

onMounted(() => {
  const chartDom = document.getElementById('main3');
  const myChart = echarts.init(chartDom);

  const option = {
  grid: {
    // height: "72%",
    bottom: '30%',
    top: '15%',
    right: '8%',
    left: '8%'
  },
  legend: {
    data: ['一级预警', '二级预警', '三级预警', '四级预警'],
    x: '90vw',
    textStyle: {
      color: 'white',
      fontSize: '12px',
      fontWeight: 500
    },
    top: 'top',
    left: '10%',
    itemGap: 6,
    // 设置图标的宽度和高度
    itemWidth: 10, // 图标宽度
    itemHeight: 10, // 图标高度
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        //这是x轴文字颜色
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        color: '#fff', //刻度线标签颜色
        fontSize: '14'
      },
      axisTick: { show: false }, //隐藏刻度
      boundaryGap: true,
      data: [
        '06-17',
        '06-18',
        '06-19',
        '06-20',
        '06-21',
        '06-22',
        '06-23',
        '06-24'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#fff', //刻度线标签颜色
        fontSize: '14'
      },
      splitLine: {
        //网格线
        show: false
      },
      axisLine: {
        show: false //y轴线消失
      },
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontFamily: 'FZLTHK--GBK1-0',
        fontSize: '14'
      },
      name: '(次)        ',
      splitNumber: 2
    }
  ],
  dataZoom: [
    {
      type: 'slider',
      show: true,
      height: 15,
      bottom: 35,
      left:15,
      borderColor: 'transparent',
      backgroundColor: '#e2e2e2',
      // 拖拽手柄样式 svg 路径
      handleIcon:
        'M512 512m-208 0a6.5 6.5 0 1 0 416 0 6.5 6.5 0 1 0-416 0Z M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z',
      handleColor: '#aab6c6',
      handleSize: 15,
      handleStyle: {
        borderColor: '#aab6c6',
        shadowBlur: 4,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: '#e5e5e5',
      },
      start: 0,
      end: 100
    }
  ],
  series: [
    {
      name: '一级预警',
      type: 'line',
      areaStyle: {},
      // stack: 'Total',
      showSymbol: false,
      label: {
        show: false,
        // 标签的文字。
        color: '#11d932',
        fontWeight: 'bolder',
        fontSize: '16',
        position: 'top',
        fontFamily: 'DIN Condensed'
      },
      emphasis: {
        focus: 'series'
      },
      data: [16, 18, 15, 14, 17, 16, 18, 14],
      symbolSize: 6,
      lineStyle: {
        color: 'rgba(0,0,255,0.5)'
      },
      itemStyle: {
        normal: {
          color: 'rgba(0,0,255,0.5)'
        }
      },
      zlevel: 1
    },
    {
      name: '二级预警',
      type: 'line',
      areaStyle: {},
      // stack: 'Total',
      showSymbol: false,
      label: {
        show: false,
        // 标签的文字。
        color: 'orange',
        fontWeight: 'bolder',
        fontSize: '16',
        position: 'top',
        fontFamily: 'DIN Condensed'
      },
      emphasis: {
        focus: 'series'
      },
      data: [11, 9, 7, 12, 14, 11, 9, 8],
      symbolSize: 6,
      lineStyle: {
        color: 'rgba(255,255,0,0.5)'
      },
      itemStyle: {
        normal: {
          color: 'rgba(255,255,0,0.5)'
        }
      },
      zlevel: 2
    },
    {
      name: '三级预警',
      type: 'line',
      areaStyle: {},
      // stack: 'Total',
      showSymbol: false,
      label: {
        show: false,
        // 标签的文字。
        color: 'pink',
        fontWeight: 'bolder',
        fontSize: '16',
        position: 'top',
        fontFamily: 'DIN Condensed'
      },
      emphasis: {
        focus: 'series'
      },
      data: [4, 7, 4, 3, 6, 8, 4, 7],
      symbolSize: 6,
      lineStyle: {
        color: 'rgba(255,165,0,0.5)'
      },
      itemStyle: {
        normal: {
          color: 'rgba(255,165,0,0.5)'
        }
      },
      zlevel: 3
    },
    {
      name: '四级预警',
      type: 'line',
      areaStyle: {},
      // stack: 'Total',
      showSymbol: false,
      label: {
        show: false,
        // 标签的文字。
        color: 'red',
        fontWeight: 'bolder',
        fontSize: '16',
        position: 'top',
        fontFamily: 'DIN Condensed'
      },
      emphasis: {
        focus: 'series'
      },
      data: [2, 4, 3, 1, 1, 3, 2, 4],
      symbolSize: 6,
      lineStyle: {
        color: 'rgba(255,0,0,0.5)'
      },
      itemStyle: {
        normal: {
          color: 'rgba(255,0,0,0.5)'
        }
      },
      zlevel: 4
    }
  ]
};

  option && myChart.setOption(option);
});
</script>

<style scoped>
#LTIng{
  max-width: 100%; /* 图片最大宽度为其容器的100% */
  height: auto; /* 保持宽高比，自动调整高度 */
}
#overlay-text {
   position: absolute;
   top: 11%; /* 垂直居中 */
   left: 35%; /* 水平居中 */
   transform: translate(-50%, -50%);
   font-family: '黑体', sans-serif; /* 使用黑体字体 */
   font-weight: bold; /* 加粗 */
   color: white; /* 白色文字 */
  font-size:18px;
 }
</style>
