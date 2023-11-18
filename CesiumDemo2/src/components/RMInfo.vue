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
      bottom: "26%",
      top: "20%",
      right: "3%",
      left: "10%",
    },
    legend: {
      data: ["一级预警", "二级预警", "三级预警", "四级预警"],
      x: "90vw",
      textStyle: {
        color: "white",
        fontSize: "14px",
        fontWeight: 500,
      },
      top: 0,
      left:90
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: [
      {
        type: "category",
        axisLine: {
          //这是x轴文字颜色
          lineStyle: {
            color: "#fff",
          },
        },
        axisLabel: {
          color: "#fff", //刻度线标签颜色
          fontSize: "14",
        },
        axisTick: { show: false }, //隐藏刻度
        boundaryGap: true,
        data: ['06-17','06-18','06-19','06-20','06-21','06-22','06-23','06-24'],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "#fff", //刻度线标签颜色
          fontSize: "14",
        },
        splitLine: {
          //网格线
          show: false,
        },
        axisLine: {
          show: false, //y轴线消失
        },
        nameLocation: "end",
        nameTextStyle: {
          color: "#fff",
          fontFamily: "FZLTHK--GBK1-0",
          fontSize: "14",
        },
        name: "(吨)        ",
      },
    ],
    dataZoom: [
      {
        type: "inside",
        startValue: 0,
        endValue: 6,
        height:15,
      },
      {
        startValue: 0,
        endValue: 8,
        height:15,
      },
    ],
    series: [
      {
        name: "一级预警",
        type: "line",
        // stack: 'Total',
        label: {
          show: false,
          // 标签的文字。
          color: "#11d932",
          fontWeight: "bolder",
          fontSize: "16",
          position: "top",
          fontFamily: "DIN Condensed",
        },
        emphasis: {
          focus: "series",
        },
        data: [22,21,14,12,15,24,25,26],
        symbolSize: 6,
        lineStyle: {
          color: "#11d932",
        },
        itemStyle: {
          normal: {
            color: "#11d932",
          },
        },
      },
      {
        name: "二级预警",
        type: "line",
        // stack: 'Total',
        label: {
          show: false,
          // 标签的文字。
          color: "orange",
          fontWeight: "bolder",
          fontSize: "16",
          position: "top",
          fontFamily: "DIN Condensed",
        },
        emphasis: {
          focus: "series",
        },
        data: [23,20,15,13,17,20,23,25],
        symbolSize: 6,
        lineStyle: {
          color: "orange",
        },
        itemStyle: {
          normal: {
            color: "orange",
          },
        },
      },
      {
        name: "三级预警",
        type: "line",
        // stack: 'Total',
        label: {
          show: false,
          // 标签的文字。
          color: "pink",
          fontWeight: "bolder",
          fontSize: "16",
          position: "top",
          fontFamily: "DIN Condensed",
        },
        emphasis: {
          focus: "series",
        },
        data: [23,19,14,13,16,20,27,25],
        symbolSize: 6,
        lineStyle: {
          color: "pink",
        },
        itemStyle: {
          normal: {
            color: "pink",
          },
        },
      },
      {
        name: "四级预警",
        type: "line",
        // stack: 'Total',
        label: {
          show: false,
          // 标签的文字。
          color: "red",
          fontWeight: "bolder",
          fontSize: "16",
          position: "top",
          fontFamily: "DIN Condensed",
        },
        emphasis: {
          focus: "series",
        },
        data: [23,20,15,13,17,20,23,25],
        symbolSize: 6,
        lineStyle: {
          color: "red",
        },
        itemStyle: {
          normal: {
            color: "red",
          },
        },
      },
    ],
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
   top: 9%; /* 垂直居中 */
   left: 35%; /* 水平居中 */
   transform: translate(-50%, -50%);
   font-family: '黑体', sans-serif; /* 使用黑体字体 */
   font-weight: bold; /* 加粗 */
   color: white; /* 白色文字 */
  font-size:18px;
 }
</style>
