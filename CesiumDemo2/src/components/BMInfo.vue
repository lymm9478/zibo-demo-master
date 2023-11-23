<template>
  <div style="width: 90%; height: 100%; opacity: 1;">
    <img id="LTIng" src="../../public/UI/一级导航/一级导航.png" >
    <div id="FunctionButton">
      <div class="button" @click="changeViews"  @mouseover="handleMouseOver1" @mouseleave="handleMouseLeave1">
        <img  v-if="buttonstate!==1" class="img"   src="../../public/UI/一级导航/矩形2.png">
        <img  v-else class="img"   src="../../public/UI/一级导航/矩形22.png">
        <p style="left: 3%;top: 10%" class="text" :style="{ color: textColor1 }">物联感知</p>
      </div>
      <div class="button" @click="backoriginal" @mouseover="handleMouseOver2" @mouseleave="handleMouseLeave2">
        <img  v-if="buttonstate!==2" class="img"   src="../../public/UI/一级导航/矩形3.png">
        <img  v-else class="img"   src="../../public/UI/一级导航/矩形33.png">
        <p style="left: 45.5%;top:10%" class="text" :style="{ color: textColor2 }">数字大屏</p>
      </div>
      <div class="button" @click="passback" @mouseover="handleMouseOver3" @mouseleave="handleMouseLeave3">
        <img  v-if="buttonstate!==3" class="img"   src="../../public/UI/一级导航/矩形4.png">
        <img  v-else class="img"   src="../../public/UI/一级导航/矩形44.png">
        <p style="left: 87.5%;top: 10%" class="text" :style="{ color: textColor3 }" >后台管理</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from "@/router";

import {ref, inject} from 'vue';
import { InitialCameraLocation} from '@/module/Class_MiddleMap';
const buttonstate = ref(1);
const textColor1 = ref('');
const textColor2 = ref(''); // Initialize as an empty string
const textColor3 = ref('');

let globalData = inject("globalData");

function changeViews(){
  console.log(globalData);
  globalData.buttonVal = true

}
function passback() {

  router.push('/bg');
}
function backoriginal(){
  globalData.buttonVal = false
  InitialCameraLocation();
}
function handleMouseOver1() {
  buttonstate.value = 1;
  document.body.style.cursor = 'pointer';
  textColor1.value = 'rgba(255,255,255,0.5)';
}
function handleMouseLeave1() {
  buttonstate.value = 0;
  document.body.style.cursor = 'auto';
  textColor1.value = ''; // Reset text color when mouse leaves
}
function handleMouseOver2() {
  buttonstate.value = 2;
  document.body.style.cursor = 'pointer';
  textColor2.value = 'rgba(255,255,255,0.5)';
}
function handleMouseLeave2() {
  buttonstate.value = 0;
  document.body.style.cursor = 'auto';
  textColor2.value = ''; // Reset text color when mouse leaves
}

function handleMouseOver3() {
  buttonstate.value = 3;
  document.body.style.cursor = 'pointer';
  textColor3.value = 'rgba(255,255,255,0.5)';
}

function handleMouseLeave3() {
  buttonstate.value = 0;
  document.body.style.cursor = 'auto';
  textColor3.value = ''; // Reset text color when mouse leaves
}

</script>

<style scoped>
@import url('../text.css');
#LTIng{
  position: relative;
  width: 100%;
  left: 0.5%;
  height: 50%;
  display: block; /* 将图像设置为块级元素，以便居中对齐 */
  margin: 0 auto; /* 左右外边距设置为auto，实现水平居中 */
}
#FunctionButton {
  max-width: 100%;
  position: relative;
  top: -20%;
  left: 11.5%;
  width: 77%;
  height: 72%;
  display: flex;
  justify-content: space-between;
}

.button {
  box-sizing: border-box; /* 将盒子模型设置为 border-box */
  max-width: 100%;
  width: 15%;
  height: 30%;

}
.img{

  width: 108%; /* 自动调整宽度 */
  height: 203%; /* 自动调整高度 */
  display: block; /* 将图像设置为块级元素，以便居中对齐 */
  margin: 0 auto; /* 左右外边距设置为auto，实现水平居中 */
}
.text{
  font-family: '03', sans-serif;
  position: absolute;
  font-weight: bold ;
  font-size: 20px;
  color: white;
}

</style>
