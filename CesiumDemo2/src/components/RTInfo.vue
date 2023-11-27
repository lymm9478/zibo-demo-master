<template>
  <div style="transform: translate(5%, 5%); width: 90%; height: 90%; opacity: 1">
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
        <a-table class="ant-table-striped" :columns="warningColumns" :data-source="warningData" 
          :pagination="false" :scroll="{ y:215 }"
          >
          <!-- :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)" -->
        </a-table>
      </div>
    </a-config-provider>
      <!-- </template> -->
      <!-- 下部分，增加了包装表头的 div -->
      <!-- <div class="table-container"> -->
        <!-- <div class="table-header">
          <table>
            <thead>
            <tr class="tr-1">
              <th v-for="(cell, cellIndex) in tableHeader" :key="cellIndex" v-html="cell"></th>
            </tr>
            </thead>
          </table>
        </div> -->
        <!-- <div class="table-content"> -->
          <!-- <table>
            <tbody>
            <tr v-for="(row, index) in tableData" :key="index">
              <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table> -->
        </div>
      </div>
    <!-- </div> -->
  <!-- </div> -->
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
      "lineHeight":0.2
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

// const tableData = ref([
//   ['#1', '位移监测', 'xx县', '一级', '否'],
//   ['#2', '位移监测', 'xx县', '二级', '否'],
//   ['#3', '位移监测', 'xx县', '一级', '否'],
//   ['#4', '位移监测', 'xx县', '二级', '否'],
//   ['#5', '位移监测', 'xx县', '四级', '否'],
//   ['#5', '位移监测', 'xx县', '四级', '否'],
//   ['#5', '位移监测', 'xx县', '四级', '否'],
//   ['#5', '位移监测', 'xx县', '四级', '否'],
//   ['#6', '位移监测', 'xx县', '三级', '否']
// ]);

// const tableHeader = ref(['设备<br>编号', '设备<br>类型', '所属<br>市区', '预警<br>等级', '是否<br>通知']);
// const tableData = ref([
//   ['#1', '位移监测', 'xx县', '一级'],
//   ['#2', '位移监测', 'xx县', '二级'],
//   ['#3', '位移监测', 'xx县', '一级'],
//   ['#4', '位移监测', 'xx县', '二级'],
//   ['#5', '位移监测', 'xx县', '四级'],
//   ['#6', '位移监测', 'xx县', '三级'],
//   ['#7', '位移监测', 'xx县', '二级'],
//   ['#8', '位移监测', 'xx县', '四级'],
//   ['#9', '位移监测', 'xx县', '四级']
// ]);


watch (signalofWyjc_conf.value,async(newData)=>{
  console.log(Wyjc_conf.value);
  console.log(newData);
})

</script>

<style scoped>
#LTIng {
  max-width: 100%;
  height: auto;
}

#overlay-text {
  position: absolute;
  top: 6%;
  left: 32%;
  transform: translate(-50%, -50%);
  font-family: '黑体', sans-serif;
  font-weight: bold;
  color: white;
  font-size: 18px;
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
  height: 35%;
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
  height: 280px;
  position: relative;
  top: 4%;
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
:deep(::-webkit-scrollbar){
  width: 0px;
}
</style>
