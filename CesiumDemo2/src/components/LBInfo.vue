<template>
  <div style="transform: translate(5%, 10%); width: 90%; height: 90%; opacity: 1">
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png">
    <span id="overlay-text">年度设备总数</span>
    <div class="PointInfo-2">
      <div id="main2" style="width: 100%;height: 100%"></div>
    </div>
  </div>
</template>
<script setup>
import * as echarts from 'echarts';
import { onMounted} from 'vue'
//
onMounted(()=>{
  var chartDom = document.getElementById('main2');

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
@import url('../text.css');
#LTIng {
  max-width: 100%;
  height: auto;
  position: relative;
  top: 10px;
}

#overlay-text {
  position: absolute;
  top: 12%;
  left: 36%;
  transform: translate(-50%, -50%);
  font-family: '11', sans-serif;

  color: white;
  font-size: 22px;
}
.PointInfo-2{
  /*border: 5px solid transparent; !* 设置边框为透明，确保边框宽度不会影响内容的布局 *!*/
  /*border-image: linear-gradient(to right, green, lawngreen); !* 使用线性渐变作为边框图像 *!*/
  /*border-image-slice: 1; !* 定义边框图像的填充方式，1 表示整个边框都被填充 *!*/
  width: 100%;
  height:100%;
  position: relative;
  top:10%;
}
</style>
