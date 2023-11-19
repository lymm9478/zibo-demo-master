<template>
  <div style="transform: translate(5%,5%);
       width: 90%;height:90% ;;opacity: 1" >
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png" >
    <span id="overlay-text">站点数量</span>
    <div id="LargeK" style="width: 100%;height: 90%">
      <div class="PointInfo-1" >
        <div class="PointPs">
          <span class="text-1">50</span>
          <img class="icon" src="../../public/UI/UI/图标+图标框/图标4.png" alt="Your Icon">
          <span class="text">位移监测</span>
        </div>
        <div class="PointPs">
          <span class="text-1">50</span>
          <img class="icon" src="../../public/UI/UI/图标+图标框/图标4.png" alt="Your Icon">
          <span class="text">{{ a }}</span>
        </div>
        <div class="PointPs">
          <span class="text-1">50</span>
          <img class="icon" src="../../public/UI/UI/图标+图标框/图标4.png" alt="Your Icon">
          <span class="text">湿度监测</span>
        </div>
        <div class="PointPs">
          <span class="text-1">50</span>
          <img class="icon" src="../../public/UI/UI/图标+图标框/图标4.png" alt="Your Icon">
          <span class="text">风向监测</span>
        </div>
      </div>
      <div class="PointInfo-2">
        <div id="main" style="width: 100%;height: 100%"></div>
<!--        <div class="PointPs">-->
<!--          <span class="text-1">50</span>-->
<!--          <img class="icon" src="../../public/UI/UI/图标+图标框/图标64.png" alt="Your Icon">-->
<!--          <span class="text">位移监测</span>-->
<!--        </div>-->
<!--        <div class="PointPs">-->
<!--          <span class="text-1">50</span>-->
<!--          <img class="icon" src="../../public/UI/UI/图标+图标框/图标64.png" alt="Your Icon">-->
<!--          <span class="text">雨量监测</span>-->
<!--        </div>-->
<!--        <div class="PointPs">-->
<!--          <span class="text-1">50</span>-->
<!--          <img class="icon" src="../../public/UI/UI/图标+图标框/图标64.png" alt="Your Icon">-->
<!--          <span class="text">湿度监测</span>-->
<!--        </div>-->
<!--        <div class="PointPs">-->
<!--          <span class="text-1">50</span>-->
<!--          <img class="icon" src="../../public/UI/UI/图标+图标框/图标64.png" alt="Your Icon">-->
<!--          <span class="text">风向监测</span>-->

<!--        </div>-->
      </div>
    </div>
  </div>

</template>
<script setup>
import * as echarts from 'echarts';
import { onMounted} from 'vue'
import {a} from './js/Config'
//
import AnalysisJson from "@/module/AnalysisJson";
import Config from "@/module/Class_Config";
AnalysisJson.getData();
console.log(Config.Wyjc_conf)


onMounted (()=>{
  
  var chartDom = document.getElementById('main');
  var myChart = echarts.init(chartDom);
  var option;
  // var testdata= new AnalysisJson.Wyjc();
  // testdata=AnalysisJson.getData();
  //console.log(testdata);
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {d}%',
    },
    series: [
      {
        type: 'pie',
        startAngle: 90,
        radius: ['70%', '85%'], // 最外环 位移监测设备
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        data: [
          {
            value: 95,
            name: '位移监测设备在线率', // A 设备的名称
            itemStyle: {
              color: '#1E90FF',
            },
          },
          { value: 5, itemStyle: { color: 'transparent' } }, // 补白
        ],
      },
      {
        type: 'pie',
        startAngle: 90,
        radius: ['50%', '65%'], // 降雨量监测设备
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        data: [
          {
            value: 90,
            name: '降雨量监测设备在线率', // B 设备的名称
            itemStyle: {
              color: '#00BFFF',
            },
          },
          { value: 10, itemStyle: { color: 'transparent' } }, // 补白
        ],
      },
      {
        type: 'pie',
        startAngle: 90,
        radius: ['30%', '45%'], // 温湿度监测设备
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        data: [
          {
            value: 85,
            name: '温湿度监测设备在线率', // C 设备的名称
            itemStyle: {
              color: '#87CEEB',
            },
          },
          { value: 15, itemStyle: { color: 'transparent' } }, // 补白
        ],
      },
      {
        type: 'pie',
        startAngle: 90,
        radius: ['10%', '25%'], // 风向监测设备
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        data: [
          {
            value: 60,
            name: '风向监测设备在线率', // D 设备的名称
            itemStyle: {
              color: '#B0E0E6',
            },
          },
          { value: 40, itemStyle: { color: 'transparent' } }, // 补白
        ],
      },
    ],
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
  top: 7%; /* 垂直居中 */
  left: 31%; /* 水平居中 */
  transform: translate(-50%, -50%);
  font-family: '黑体', sans-serif; /* 使用黑体字体 */
  font-weight: bold; /* 加粗 */
  color: white; /* 白色文字 */
  font-size:18px;
}
.PointInfo-1{
  overflow: hidden; /* 隐藏溢出部分 */
  transition: transform 0.5s ease; /* 添加移动动画 */
  display: flex;
  width: 100%;
  height: 35%;
}
.PointInfo-2{
  /*border: 5px solid transparent; !* 设置边框为透明，确保边框宽度不会影响内容的布局 *!*/
  /*border-image: linear-gradient(to right, green, lawngreen); !* 使用线性渐变作为边框图像 *!*/
  /*border-image-slice: 1; !* 定义边框图像的填充方式，1 表示整个边框都被填充 *!*/
  display: flex;
  width: 100%;
  height: 100%;
}
.PointPs{
  position: relative;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column; /* 将子元素纵向排列 */

}
#LargeK{
  border: 5px solid transparent; /* 设置边框为透明，确保边框宽度不会影响内容的布局 */
  border-image: linear-gradient(to right, black, #04048d); /* 使用线性渐变作为边框图像 */
  border-image-slice: 1; /* 定义边框图像的填充方式，1 表示整个边框都被填充 */
}


.icon {
  width: 50px;
  height: 50px;
  margin: 10px 0;
}

.text-1 {
  color: white;
  font-size: 25px;
  position: absolute; /* 设置绝对定位 */
  top: 20%; /* 距离父容器顶部的距离为父容器的一半 */
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 通过 translate 实现垂直居中和水平居中 */
}

.text {
  color: white;
  font-size: 15px;
}

</style>
