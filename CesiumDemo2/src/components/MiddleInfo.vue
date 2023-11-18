<template>
    <div id="MiddleMap" style="width: 800px; height: 600px;">

    </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent
} from 'echarts/components';
import { MapChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import ZiboJsondata from "@/assets/ZiBo.json";
// import axios from 'axios';
// console.log(usaJson);
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer
]);
onMounted(()=>{

// var ROOT_PATH = 'https://echarts.apache.org/examples';

var chartDom = document.getElementById('MiddleMap');
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
loaddate(ZiboJsondata)
function loaddate (mapJson) {
    console.log(mapJson);
  myChart.hideLoading();
  echarts.registerMap('ZiBo', mapJson, {});
  option = {
    title: {
      text: '淄博区县图',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2
    },
    visualMap: {
      left: 'right',
      min: 400,
      max: 10000,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ]
      },
      text: ['High', 'Low'],
      calculable: true
    },
    toolbox: {
      show: true,
      //orient: 'vertical',
      left: 'right',
      top: 'top',
      feature: {
        // dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: 'Zibo PopEstimates',
        type: 'map',
        roam: true,
        map: 'ZiBo',
        emphasis: {
          label: {
            show: true
          }
        },
        data: [
          { name: '张店区', value: 500 },
          { name: '淄川区', value: 1000 },
          { name: '博山区', value: 2000 },
          { name: '临淄区', value: 3000 },
          { name: '周村区', value: 4000 },
          { name: '桓台县', value: 5000 },
          { name: '高青县', value: 6000 },
          { name: '沂源县', value: 7000 },
        ]
      }
    ]
  };
  myChart.setOption(option);
}

option && myChart.setOption(option);


})

</script>

<style scoped>
</style>