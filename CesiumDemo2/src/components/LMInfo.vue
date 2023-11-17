<template>
  <div style="transform: translate(5%,5%);
       width: 90%;height:90% ;opacity: 1" >
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png" >
    <span id="overlay-text">年度设备总数</span>
    <div class="PointInfo-2">
      <div id="main2" style="width: 100%;height: 100%"></div>
    </div>
    <div id="Chartinfo" >
      年度设备数量信息
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
      top: "30%",
      right: "10%",
      bottom: "15%",
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
      type: 'value'
    },
    series: [
      {
        data: [120, 130, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: '#11d56d'
            },
            {
              offset: 1,
              color: '#83bff6'
            }
          ])
        },
        label: {
          show: true, // 启用标签显示
          position: 'top', // 也可以设置为 'inside' 或其他位置
          color: 'white', // 标签文字颜色
          fontSize: 12     // 标签文字大小
        },
        emphasis: {
          focus: 'series'
        }
      }
    ],
    tooltip: {
      trigger: 'axis', // 设置触发类型为坐标轴
      axisPointer: {
        type: 'shadow' // 设置坐标轴指示器类型为阴影
      }
    }
  };


  option && myChart.setOption(option);

})
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
.PointInfo-2{
  /*border: 5px solid transparent; !* 设置边框为透明，确保边框宽度不会影响内容的布局 *!*/
  /*border-image: linear-gradient(to right, green, lawngreen); !* 使用线性渐变作为边框图像 *!*/
  /*border-image-slice: 1; !* 定义边框图像的填充方式，1 表示整个边框都被填充 *!*/
  width: 100%;
  height:100%;
}
#Chartinfo{
  display: flex;
  align-items: center; /* 居中对齐 */
  position: absolute;
  font-size: 20px;
  right: 26%;
  top: 24%;
  color: wheat;
  font-weight: bold;
}
</style>
