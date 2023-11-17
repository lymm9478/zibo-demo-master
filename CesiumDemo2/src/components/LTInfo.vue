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


onMounted(()=>{

  var chartDom = document.getElementById('main');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '站点运行情况',
      left: 'center',
      textStyle: {
        color: 'white' // 设置标题颜色
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      textStyle: {
        color: 'white' // 设置图例文字颜色
      }
    },
    series: [
      {
        name: '设备数量',
        type: 'pie',
        radius: '68%',
        label: {
          // 设置标签样式
          textStyle: {
            color: 'white', // 设置标签文字颜色
            fontSize: 12     // 设置标签文字大小
          }
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(234,41,41,0.5)'
          },
          label: {
            textStyle: {
              color: 'yellow' // 设置标签文字颜色（鼠标悬停时）
            }
          }
        },
        data: [
          { value: 1048, name: '在线设备' },
          { value: 300, name: '离线设备' }
        ]
      }
    ]
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
