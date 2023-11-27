<template>
  <img src="../../public/UI/lt.png" style="width: 4%; position: absolute; left: 0%;top: 0%">
  <img src="../../public/UI/rt.png" style="width: 4%; position: absolute; right: 0%;top: 0%">
  <img src="../../public/UI/lb.png" style="width: 4%; position: absolute; left: 0%;bottom: 0%">
  <img src="../../public/UI/rb.png" style="width: 4%; position: absolute; right: 0%;bottom: 0%">

<div id="main000" style="width:100%;height: 100%;color: white;font-size: 20px"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted} from 'vue'

onMounted(()=>{

  // 生成随机假数据的函数





  var chartDom = document.getElementById('main000');

  var myChart = echarts.init(chartDom);
  var option;






  option = {
    grid: {
      left: "10%",
      top: "15%",
      right: "10%",
      bottom: "10%",
    },
    xAxis: {
      type: 'category',
      data: ['2018', '2019', '2020', '2021', '2022', '2023'],
      axisLabel: {
        color: 'white',
        fontSize: 12
      }
    },
    yAxis: {
      splitLine: {
        show: false // 隐藏网格线
      },
      type: 'value',
      name: "(台)        ",
      nameTextStyle: {
        color: "#fff",
        fontFamily: "FZLTHK--GBK1-0",
        fontSize: "14",
        offset: 0, // 控制名称与轴的间距，正数向右偏移，负数向左偏移
      },
      axisLabel: {
        color: 'white', // 设置刻度标签颜色
        fontSize: 12
      }
    },
    series: [
      {
        data: [120, 130, 150, 80, 70, 110],
        type:'pictorialBar',
        symbolPosition:'start',
        symbol:'diamond',
        symbolOffset:[0,'50%'],
        symbolSize:[30,15],
        itemStyle:{
          color:'#02D7EA'
        },
        zlevel:3
      },
      {
        data: [120, 130, 150, 80, 70, 110],
        type:'bar',
        barWidth:30,
        itemStyle:{
          color:{
            type:'linear',
            x:0,
            y:0,
            x2:0,
            y2:1,
            global:false,
            colorStops:[
              {offset:0,color:'#057DFE'},
              {offset:1,color:'#02D7EA'}
            ]
          },
          zlevel:2
        },
        label:{
          show:true,
          position:'top',
          distance:15,
          color:'white'
        }
      },
      {
        data: [120, 130, 150, 80, 70, 110],
        type:'pictorialBar',
        symbolPosition:'end',
        symbol:'diamond',
        symbolOffset:[0,'-50%'],
        symbolSize:[30,15],
        itemStyle:{
          color:{
            type:'linear',
            x:0,
            y:0,
            x2:0,
            y2:1,
            global:false,
            colorStops:[
              {offset:0,color:'#057DFE'},
              {offset:1,color:'#02D7EA'}
            ]
          }
        },
        zlevel:1
      }
    ],
    tooltip: {
      trigger: 'item', // 设置触发类型为坐标轴
      axisPointer: {
        type: 'shadow' // 设置坐标轴指示器类型为阴影
      }
    }
  };


  option && myChart.setOption(option);

})
</script>

<style scoped>

</style>
