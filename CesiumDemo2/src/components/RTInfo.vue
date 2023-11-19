<template>
  <div style="transform: translate(5%, 5%); width: 90%; height: 90%; opacity: 1">
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png">
    <span id="overlay-text">预警站点</span>
    <div style="width: 100%; height: 85%;">
      <!-- 上部分 -->
      <div class="PointInfo-1">
        <div class="PointPs">
          <span class="text-1">50</span>
          <img class="icon" src="../../public/UI/UI/模块/图标20.png" alt="Your Icon">
          <span class="text">一级预警</span>
        </div>
        <div class="PointPs">
          <span class="text-1">50</span>
          <img class="icon" src="../../public/UI/UI/模块/图标20.png" alt="Your Icon">
          <span class="text">二级预警</span>
        </div>
        <div class="PointPs">
          <span class="text-1">50</span>
          <img class="icon" src="../../public/UI/UI/模块/图标22.png" alt="Your Icon">
          <span class="text">三级预警</span>
        </div>
        <div class="PointPs">
          <span class="text-1">50</span>
          <img class="icon" src="../../public/UI/UI/模块/图标21.png" alt="Your Icon">
          <span class="text">四级预警</span>
        </div>
      </div>

      <!-- 下部分，增加了包装表头的 div -->
      <div class="table-container">
        <div class="table-header">
          <table>
            <thead>
            <tr class="tr-1">
              <th v-for="(cell, cellIndex) in tableHeader" :key="cellIndex" v-html="cell"></th>
            </tr>
            </thead>
          </table>
        </div>
        <div class="table-content">
          <table>
            <tbody>
            <tr v-for="(row, index) in tableData" :key="index">
              <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([
  ['#1', '位移监测', 'xx县', '一级', '否'],
  ['#2', '位移监测', 'xx县', '二级', '否'],
  ['#3', '位移监测', 'xx县', '一级', '否'],
  ['#4', '位移监测', 'xx县', '二级', '否'],
  ['#5', '位移监测', 'xx县', '四级', '否'],
  ['#5', '位移监测', 'xx县', '四级', '否'],
  ['#5', '位移监测', 'xx县', '四级', '否'],
  ['#5', '位移监测', 'xx县', '四级', '否'],

  ['#6', '位移监测', 'xx县', '三级', '否']
]);

const tableHeader = ref(['设备<br>编号', '设备<br>类型', '所属<br>市区', '预警<br>等级', '是否<br>通知']);


</script>

<style scoped>
#LTIng {
  max-width: 100%;
  height: auto;
}

#overlay-text {
  position: absolute;
  top: 5%;
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
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text {
  color: white;
  font-size: 17px;
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
  border: 1px solid red;
  text-align: left;
  color: white;
}

.tr-1 {
  position: sticky;
  top: 0;
  background-color: #333;
}

</style>
