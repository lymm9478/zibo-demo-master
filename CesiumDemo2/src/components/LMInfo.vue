<template>
  <div style="transform: translate(5%,0%);
       width: 90%;height:90% ;opacity: 1" >
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png" >
    <span id="overlay-text">设备在线率</span>
    <div id="LargeK" style="width: 100%;height: 90%">
    <div class="PointInfo-2">
      <div id="main" style="width: 50%;height: 100%"></div>
      <div id="maintable" style=" width:50%;height:100%"></div>>
    </div>
      </div>
  </div>


</template>
<script setup>
import * as echarts from 'echarts';
import {nextTick, onMounted} from 'vue'
//
onMounted (()=>{
  nextTick(()=>{

    setTimeout(() => {
      let chartDom = document.getElementById('main');
      echarts.dispose(chartDom);
      let myChart = echarts.init(chartDom);
      const middleImg = 'data:image/png;base64,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\n'
      // var testdata= new AnalysisJson.Wyjc();
      // testdata=AnalysisJson.getData();
      //console.log(testdata);

      let option = {
        graphic: {
          elements: [
            {
              type: 'image',
              style: {
                image: middleImg,
                width: 40, // 图片宽度
                height: 40, // 图片高度
              },
              left: '38%',  // 水平居中
              top: '38%',   // 垂直居中
            },
          ],
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {d}%'
        },
        series: [
          {
            type: 'pie',
            startAngle: 90,
            radius: ['73%', '80%'], // 最外环 位移监测设备
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            data: [
              {
                value: 95,
                name: '位移监测设备在线率', // A 设备的名称
                itemStyle: {
                  color: 'rgba(30,144,255,1)'
                }
              },
              {value: 5, name: '位移监测设备离线率', itemStyle: {color: 'rgba(30,144,255,0.3)'}} // 补白
            ]
          },
          {
            type: 'pie',
            startAngle: 90,
            radius: ['59%', '68%'], // 降雨量监测设备
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            data: [
              {
                value: 90,
                name: '降雨量监测设备在线率', // B 设备的名称
                itemStyle: {
                  color: 'rgba(0,191,255,1)'
                }
              },
              {value: 10, name: '降雨量监测设备离线率', itemStyle: {color: 'rgba(0,191,255,0.3)'}} // 补白
            ]
          },
          {
            type: 'pie',
            startAngle: 90,
            radius: ['45%', '52%'], // 温湿度监测设备
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            data: [
              {
                value: 85,
                name: '温湿度监测设备在线率', // C 设备的名称
                itemStyle: {
                  color: 'rgba(135,206,235,1)'
                }
              },
              {value: 15, name: '温湿度监测设备离线率', itemStyle: {color: 'rgba(135,206,235,0.3)'}}
            ]
          },
          {
            type: 'pie',
            startAngle: 90,
            radius: ['31%', '38%'], // 风向监测设备
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            data: [
              {
                value: 60,
                name: '风向监测设备在线率', // D 设备的名称
                itemStyle: {
                  color: 'rgba(176,224,230,1)'
                }
              },
              {value: 40, name: '风向监测设备离线率', itemStyle: {color: 'rgba(176,224,230,0.3)'}} // 补白
            ]
          }
        ]
      };
      myChart.setOption(option);

    }, 1000);

    var chartDom2 = document.getElementById('maintable');
    echarts.dispose(chartDom2);
    var myChart2 = echarts.init(chartDom2);
    var option2;

    option2 = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%',
      },
      grid: {
        left: '0%',
        top: '10%',
        width: '80%',
        height:'90%',
        containLabel: true,
      },
      xAxis: {
        show: false,
      },
      yAxis: {
        type: 'category',
        axisLine: {       // 隐藏 y 轴坐标轴线
          show: false,
        },
        axisTick: {       // 隐藏 y 轴刻度线
          show: false,
        },
        axisLabel: {
          show: true,    // 显示 y 轴刻度标签
          color: 'white',
          fontSize: 12,
        },
        data: ['位移', '雨量', '温湿度', '风向'],
      },
      series: [
        {
          type: 'bar',
          barWidth: '50%',
          label: {
            show: true,
            position: 'right',
            color: 'white',
            fontSize: 12,
            formatter: '{c}%', // 显示在线率
          },
          data: [95, 90, 85, 60], // 各设备在线率值
          itemStyle: {
            color: function(params) {
              // 根据索引与环形图颜色对应
              var colorList = ['#1E90FF', '#00BFFF', '#87CEEB', '#B0E0E6'];
              return colorList[params.dataIndex];
            },
          },
        },
      ],
    }

    option2 && myChart2.setOption(option2);
  })


})
</script>

<style scoped>
@import url('../text.css');
#LTIng{
  max-width: 100%; /* 图片最大宽度为其容器的100% */
  height: auto; /* 保持宽高比，自动调整高度 */
}
#overlay-text {
  position: absolute;
  top: 10%; /* 垂直居中 */
  left: 32%; /* 水平居中 */
  transform: translate(-50%, -50%);
  font-family: '11', sans-serif; /* 使用黑体字体 */

  color: white; /* 白色文字 */
  font-size:22px;
}
.PointInfo-2{
  /*border: 5px solid transparent; !* 设置边框为透明，确保边框宽度不会影响内容的布局 *!*/
  /*border-image: linear-gradient(to right, green, lawngreen); !* 使用线性渐变作为边框图像 *!*/
  /*border-image-slice: 1; !* 定义边框图像的填充方式，1 表示整个边框都被填充 *!*/
  display: flex;
  width: 100%;
  height: 66%;
}
#LargeK{
  /*border: 5px solid transparent; !* 设置边框为透明，确保边框宽度不会影响内容的布局 *!*/
  /*border-image: linear-gradient(to right, black, #04048d); !* 使用线性渐变作为边框图像 *!*/
  /*border-image-slice: 1; !* 定义边框图像的填充方式，1 表示整个边框都被填充 *!*/
  position: relative;
  top: 3%;
}

</style>
