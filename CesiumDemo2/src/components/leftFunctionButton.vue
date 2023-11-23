<template>
  <div id="functionButton">
    <div class="grid-item">
      <img class="grid2-item" src="../../public/UI/UI/模块/图标12.png" @click="backoriginal" title="视图刷新">
    </div>
    <div class="grid-item">
      <img class="grid2-item" src="../../public/UI/UI/模块/图标12.png" @click="changeMap" title="底图切换">
    </div>
    <div class="grid-item">
      <img class="grid2-item" src="../../public/UI/UI/模块/图标12.png" @click="addmove" title="显示GNSS监测点">
    </div>
    <div class="grid-item">
      <img class="grid2-item" src="../../public/UI/UI/模块/图标12.png" @click="addrain" title="显示雨量监测点">

    </div>
    <div class="grid-item">
      <img class="grid2-item" src="../../public/UI/UI/模块/图标12.png" @click="addhumiture" title="显示潮湿度监测点">
    </div>
    <div class="grid-item">
      <img class="grid2-item" src="../../public/UI/UI/模块/图标12.png" @click="addwind" title="显示风向监测点">
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-import-assign
import Config from "@/module/Class_Config";
import {InitialCameraLocation,DEMSwitch,removeEntityByIDArray,addMoveDirection
,addrainfallDirection,addhumitureDirection, addWindDirection} from "@/module/Class_MiddleMap";

let moveIdArrary = [];
let rainIdArrary=[];
let humitureIdArrary = [];
let windIdArrary=[];



// 视图刷新
function backoriginal(){
  InitialCameraLocation()
}

// 更换底图
function changeMap(){
  DEMSwitch();
}

// 添加位移监测点
function addmove(){
  if(!Config.isShowMove){
    addMoveDirection().then(resule=>{
      moveIdArrary=resule
        }
    )
  }
  else {
    removeEntityByIDArray(moveIdArrary)
  }
  Config.isShowMove=!Config.isShowMove;
}

// 添加降雨测量点
function addrain(){
  if(!Config.isShowRain){
    addrainfallDirection().then(resule=>{
      rainIdArrary=resule
        }
    )
  }
  else {
    removeEntityByIDArray(rainIdArrary)
  }
  Config.isShowRain=!Config.isShowRain;
}

// 添加潮湿度测量点
function addhumiture(){
  if(!Config.isShowHumiture){
    addhumitureDirection().then(resule=>{
          humitureIdArrary=resule
        }
    )
  }
  else {
    removeEntityByIDArray(humitureIdArrary)
  }
  Config.isShowHumiture=!Config.isShowHumiture;
}


// 添加风向测量点
function addwind(){
  if(!Config.isShowWind){
    addWindDirection().then(resule=>{
      windIdArrary=resule
        }
    )
  }
  else {
    removeEntityByIDArray(windIdArrary)
  }
  Config.isShowWind=!Config.isShowWind;
}
</script>
<style scoped>

#functionButton {
  position: absolute;
  left: 2%;
  top: 1%;
  height: 50%;
  width: 3%;
  z-index: 50;
  display: flex;
  flex-direction: column;
}

.grid-item {
  width: 100%;
  height: 80%; /* 设置格子的高度 */
  /*background-color: lightgray; !* 设置格子的背景色 *!*/
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* 鼠标变成小手 */
}

/* 鼠标悬停时改变颜色 */
.grid2-item:hover {
  background-color: orange;
}

.grid-item img {
  max-width: 100%; /* 图片宽度不超过容器宽度 */
  max-height: 100%; /* 图片高度不超过容器高度 */
}
</style>
