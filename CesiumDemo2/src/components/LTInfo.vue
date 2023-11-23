<template>
  <div style="transform: translate(5%,10%);
       width: 90%;height:90% ;;opacity: 1" >
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png" >
    <span id="overlay-text">站点数量</span>
    <div id="LargeK" style="width: 100%;height: 90%">
      <div class="PointInfo-1" >
        <div class="PointPs">
          <span class="text-1">{{ gnssnum }}</span>
          <img @click="change" class="icon" src="../../public/UI/UI/图标+图标框/图标4.png" alt="Your Icon">
          <span class="text">GNSS监测</span>
        </div>
        <div class="PointPs">
          <span class="text-1">55</span>
          <img class="icon" src="../../public/UI/UI/图标+图标框/图标4.png" alt="Your Icon">
          <span class="text">雨量监测</span>
        </div>
        <div class="PointPs">
          <span class="text-1">19</span>
          <img class="icon" src="../../public/UI/UI/图标+图标框/图标4.png" alt="Your Icon">
          <span class="text">温湿度监测</span>
        </div>
        <div class="PointPs">

          <span class="text-1">22</span>
          <img class="icon" src="../../public/UI/UI/图标+图标框/图标4.png" alt="Your Icon">
          <span class="text">风向监测</span>
        </div>
      </div>
      <div class="PointInfo-2">
        <div id="main8" style="width: 100%;height: 100%;position: relative;top: 6%;left: -3%" ></div>
<!--        <div id="maintable5" style=" width:50%;height:100%"></div>>-->

      </div>
    </div>
  </div>

</template>
<script setup>
import * as echarts from 'echarts';

import { onMounted} from 'vue'
// import { watch} from 'vue'
import {ref} from  'vue'
//
// import {Wyjc_conf,signalofWyjc_conf,} from "@/module/Class_Config";

// 站点数量
let gnssnum = ref(0)


// const MoveNum = ref(0)
// const humitureNum = ref(0)


onMounted (()=>{



  var chartDom = document.getElementById('main8');
  var myChart = echarts.init(chartDom);
  var option;
  var allPoint= 0
  var info = "总数\n(" +allPoint.toString() + ")"
  var colorList = ['#fa0009', '#f1e93a','#00FF00' , '#0048ff', '#f1e93a', '#aff', '#FF6A6A', '#fff', "#2E8B57", "#FFC125", "#FFA500", "#A020F0", "#00F5FF", "#7CFC00", "rgba(250,250,250,0.5)"];
  var chartdata = [
    { value: 15, name: 'GNSS监测' },
    { value: 20, name: '雨量监测' },
    { value: 25, name: '温湿度监测' },
    { value: 30, name: '风力监测' },
  ];

  option = {
    title: {
      text: info,
      x: '33.5%',
      y: '35%',
      textAlign: 'center',
      textStyle: {
        fontSize: 12,
        fontWeight: 'normal',
        color: 'white'
      },
      subtextStyle: {
        color: '#f1bb4c',
        fontSize: 15
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },
    grid: {
      left: 50,
      top: 30
    },
    legend: {
      show: true,
      //type: 'scroll',
      orient: 'vertical',
      //orient: 'horizontal',
      top: "middle",
      left: "65%",

      //right: "1.5%",
      textStyle: {
        color: '#f2f2f2',
        fontSize: '16',
      },
      icon: 'circle',
      //formatter: function (name) {
      //    if (!name) return '';
      //    if (name.length > 5) {
      //        return name =  name.slice(0,5) + '...';
      //    } else {
      //        return name;
      //    }
      //},
      tooltip: {
        show: true
      }

    },
    series: [
      // 主要展示层的
      {
        radius: ['35%', '65%'],
        center: ['35%', '45%'],
        type: 'pie',
        itemStyle: {
          normal: {
            color: function (params) {
              return colorList[params.dataIndex]
            }
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 15,
            length2: 18,
            lineStyle: {
              color: '#d3d3d3'
            },
            align: 'right'
          },
          color: "#000",
          emphasis: {
            show: true
          }
        },
        label: {
          normal: {
            show: true,
            formatter: "{c}",
            textStyle: {
              fontSize: 14,
              color:'white',
            },
            position: 'outside'
          }
        },
        data: chartdata
      },
      // 边框的设置
      {
        radius: ['60%', '65%'],
        center: ['35%', '45%'],
        type: 'pie',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        animation: false,
        tooltip: {
          show: false
        },
        itemStyle: {
          normal: {
            color: 'rgba(250,250,250,0.5)'
          }
        },
        data: [{
          value: 1,
        }],
      },

    ]
  };

  option && myChart.setOption(option);

})

// watch (signalofWyjc_conf.value,async()=>{
//   MoveNum.value = Wyjc_conf.value.nums
//
//   humitureNum.value = Wyjc_conf.value.nums
//   console.log(Wyjc_conf.value);
//   // console.log(newData);
// })
function change(){
  gnssnum.value=gnssnum.value+1;
}
</script>

<style scoped>
@import url('../text.css');
#LTIng{
  position: relative;
  top: -1%;
  max-width: 100%; /* 图片最大宽度为其容器的100% */
  height: auto; /* 保持宽高比，自动调整高度 */
}
#overlay-text {
  position: absolute;
  top: 8%; /* 垂直居中 */
  left: 30%; /* 水平居中 */
  transform: translate(-50%, -50%);
  font-family: '11', sans-serif; /* 使用黑体字体 */

  color: white; /* 白色文字 */
  font-size:22px;
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
  height: 66%;
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
