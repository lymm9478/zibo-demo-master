<template>
  <div style="transform: translate(5%, 1%); width: 90%; height: 90%; opacity: 1">
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png">
    <span id="overlay-text">预警站点</span>
    <div style="width: 100%; height: 85%;">
      <!-- 上部分 -->
      <div class="PointInfo-1">
        <div class="PointPs">
          <span class="text-1">23</span>
          <img class="icon" src="../../public/UI/UI/模块/图标20.png" alt="Your Icon">
          <span class="text">一级预警</span>
        </div>
        <div class="PointPs">
          <span class="text-1">5</span>
          <img class="icon" src="../../public/UI/UI/模块/图标222.png" alt="Your Icon">
          <span class="text">二级预警</span>
        </div>
        <div class="PointPs">
          <span class="text-1">0</span>
          <img class="icon" src="../../public/UI/UI/模块/图标22.png" alt="Your Icon">
          <span class="text">三级预警</span>
        </div>
        <div class="PointPs">
          <span class="text-1">1</span>
          <img class="icon" src="../../public/UI/UI/模块/图标21.png" alt="Your Icon">
          <span class="text">四级预警</span>
        </div>
      </div>

      <a-config-provider :theme="waringTable">
      <!-- <template> -->
      <div class="waring-table">
        <a-table class="ant-table-striped waring-table"  :columns="warningColumns" :data-source="warningData"
          :pagination="false" :scroll="{ y:150 }"
          >
<!--           :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)" -->
        </a-table>
      </div>
    </a-config-provider>
        </div>
      </div>
</template>

<script setup>
import { watch } from 'vue';
import {Wyjc_conf,signalofWyjc_conf} from "@/module/Class_Config";
const waringTable = {
  components:{
    Table: {
      colorBgContainer: "#1D1D1D",
      // 字体颜色
      "colorText": "rgba(255,255,255, 0.88)",
      "colorTextHeading":"rgba(255,255,255, 0.88)",
      // 边界颜色
      "colorBorderSecondary":"#1D1D1D",
      // "borderRadius":1,
      "lineHeight":1
      // bodySortBg:'#000000'
      // background:''
    }
  }
}
const  warningColumns = [
  {title:'编号',dataIndex:'id',width: '16%'},
  {title:'设备类型',dataIndex:'type',width: '28%'},
  {title:'区市',dataIndex:'prefecture',width: '19%'},
  {title:'等级',dataIndex:'level',width: '19%'},
  // {title:'是否通知',dataIndex:'informed',width: '19%'},
  // {name:'设备编号',dataIndex:'id',key:'id'},
]
const warningData = [
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
  {id:'1',type:'位移监测',prefecture:'xx县',level:'一级',informed:'是'},
]


watch (signalofWyjc_conf.value,async(newData)=>{
  console.log(Wyjc_conf.value);
  console.log(newData);
})

</script>

<style scoped>
@import url('../text.css');
#LTIng {
  max-width: 100%;
  height: auto;
  position: relative;
  top: 0%;
}

#overlay-text {
  position: absolute;
  top: 7.0%;
  left: 30%;
  transform: translate(-50%, -50%);
  font-family: '11', sans-serif;

  color: white;
  font-size: 22px;
}

.text-1 {
  color: white;
  font-size: 30px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text {
  color: white;
  font-size: 15px;
}

.text2 {
  color: #00b2ff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.icon {
  width: 80px;
  height: 80px;
  margin: 20px 0;
}

.PointInfo-1 {
  border: 5px solid transparent;
  display: flex;
  width: 100%;
  height: 38%;
}

.PointPs {
  position: relative;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.table-container {
  position: relative;
  top: 6%;
  height: 69%;
  width: 103%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.waring-table{
  height: 82%;
  position: relative;
  top: 1%;
}
.table-header {
  flex: 0 0 auto;
  overflow-x: auto;
}

.table-content {
  flex: 1;
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
}

th, td {
  padding: 5px;
  border: 1px solid rgba(255, 255, 255,0);
  text-align: left;
  color: white;
}

.tr-1 {
  position: sticky;
  top: 0;
  background-color: #333;
}

/* .ant-table-cell */
/* :deep(.ant-table-thead){
  background-color: #000000;
  opacity: 1;
}
:deep(.ant-table-thead .ant-table-cell){
  background-color: #000000;
  color: #f0f0f0;
} */

/* [data-doc-theme='light'] .ant-table-striped :deep(.table-striped) td {
  background-color: #00fafa;
} */
:deep(.table-striped) td {
  background-color: rgb(224, 73, 73);
}
.waring-table::-webkit-scrollbar {
  width: 5px; /* Change this value to your desired width */
}

.waring-table::-webkit-scrollbar-thumb {
  background-color: #83aae5;
  border-radius: 5px;
}

.waring-table::-webkit-scrollbar-track {
  background-color: #1D1D1D;
}

.waring-table {
  scrollbar-color: #83aae5 #1D1D1D;
}

.waring-table:hover {
  scrollbar-color: #83aae5 transparent;
}






</style>
