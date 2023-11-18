<template>
  <div style="width: 100vw;height: 100vh">
    <div id="header">
      <div id="system-name">在线安全监测分析云管理软件</div>
      <!--        <div id="user-info">-->
      <!--            <span id="time" style="font-size: 1em;">12:00 PM</span> | <span id="username" style="font-size: 1em;">User123</span>-->
      <!--        </div>-->
      <div id="time">{{ formattedTime }}</div>
      <div id="updatetime-container">
        <div id="updatetime">平台数据已更{{a}}新，更新时间为 12:00</div>
      </div>
      <div id="setting" title="设置" class="clickable-element"></div>
      <div id="logout" title="退出登录" class="clickable-element">
          <div id="logoutImg"></div>
          <div>退出</div>
      </div>
      <div id="userinfo" title="用户信息" >
        <div id="userinfoImg"></div>
        <div>用户名</div>
      </div>


    </div>
    <div id="content" style="display: flex; height: 93%">
      <!-- 左侧信息 -->
      <div id="left-section" style=" display: flex; flex-direction: column; width: calc(20% - 2px);">
        <!-- 上侧信息 -->
        <div id="left-section-top" style=" flex: 1;">
          <LTInfo />
        </div>
        <!-- 中间信息 -->
        <div id="left-section-middle-top" style=" flex: 1;">
          <!-- Middle top content goes here -->
          <LMInfo />
        </div>
        <!-- 下侧1信息 -->
        <div id="left-section-bottom" style="flex: 1;">
          <LBInfo />
        </div>
      </div>

      <!-- 中侧信息（地图） -->
      <div id="middle-section" style=" display: flex; flex-direction: column; width: calc(20% - 2px);">
        <!-- 上侧信息 -->
        <div id="middle-section-top" style=" height: 70%">
          <!-- Upper content goes here -->
          <p>Upper Section</p>
        </div>


        <!-- 下侧信息 -->
        <div id="middle-section-bottom" style="height: 30% ">
          <!-- Lower content goes here -->
         <BMInfo />
        </div>
      </div>

      <!-- 右侧信息 -->
      <div id="right-section" style=" display: flex; flex-direction: column; width: calc(20% - 2px);">
        <!-- 上侧信息 -->
        <div id="right-section-top" style=" height: 50%">
          <RTInfo />
        </div>
        <!-- 中间信息 -->
        <div id="right-section-middle-top" style=" height: 30%">
          <!-- Middle top content goes here -->
          <RMInfo />
        </div>
        <!-- 下侧信息 -->
        <div id="right-section-bottom" style=" height: 20%">
          <RBInfo />
        </div>
      </div>
    </div>
    <div id="background"></div>
  </div>


</template>
<script setup>
import LTInfo from './LTInfo'
import RTInfo from './RTInfo'
import LBInfo from './LBInfo'
import RBInfo from './RBInfo'
import RMInfo from './RMInfo'
import LMInfo from './LMInfo'
import BMInfo from './BMInfo'
import {a} from './js/Config'

// import Login  from '@/module/Class_Login.js'
import {ref, onMounted} from 'vue'
// import router from '../router/index.js'
const formattedTime = ref(getCurrentTime());


function getCurrentTime() {
  a.value =false
  console.log(a.value)
  const date = new Date();
  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());
  return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
}

function addZero(value) {
  return value < 10 ? `0${value}` : value;
}

// 利用onMounted钩子，确保组件已经挂载后再更新时间
let addtime = 0;
onMounted(() => {
  setInterval(() => {
    formattedTime.value = getCurrentTime();
    if(addtime==0){
      getCurrInfo();

    }
  }, 1000);
});

onMounted(() => {
  setInterval(() => {
    getCurrInfo();

  }, 60*1000);
});




String.prototype.padLeft = function (len, char) {
  var str = this.toString();
  while (str.length < len) {
    str = char + str;
  }
  return str;
};

function getCurrInfo() {
  var _date = new Date();
  var h = _date.getHours().toString().padLeft(2, '0');
  var M = _date.getMinutes();
  var new_M = M > 30 ? "30" : "00";

  // 假设存在一个元素 id 为 "updatetime"，你可以使用原生 JavaScript 或其他库来更新内容
  var updateTimeElement = document.getElementById("updatetime");
  if (updateTimeElement) {
    updateTimeElement.innerHTML = "平台数据已更新，更新时间为 " + h + ":" + new_M;
  }
}


function main(){
  // if (!Login.logined){
  //   // console.log('13')
  //   router.push('/login')
  // }
}
main()




</script>

<style scoped>


.clickable-element {
  cursor: pointer;
}


body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

#header {
  background-image: url('../../public/UI/标题/标题.png');
  background-repeat: no-repeat; /* 防止背景图重复 */
  background-size: 100% 150%; /* 拉伸背景图高度 */
  background-position: center; /* 将背景图水平和垂直居中 */
  height: 7%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  position: relative;
  z-index: 2;
}


#system-name {
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin-top: -20px; /* 负的 margin-top 值将文字上移，根据需要调整 */

}



#time{
  position: absolute;
  font-size: 20px;
  left: 5%;
  top:30%;
}

#updatetime-container {
  position: absolute;
  right: 15%;
  top: 30%;
  width: 300px; /* 适应你的实际宽度 */
  height: 50px; /* 适应你的实际高度 */
  overflow: hidden;
}

#updatetime {
  font-size: 20px;
  white-space: nowrap;
  animation: scrollText 10s linear infinite; /* 调整动画时间和效果 */
}

@keyframes scrollText {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

#logout {
  display: flex;
  align-items: center; /* 居中对齐 */
  position: absolute;
  font-size: 20px;
  right:2%;
  top: 9%;
}

#logoutImg {
  position: relative;
  width: 50px;
  height: 50px;
  background-image: url('../../public/UI/login-out-new.png');
  margin-right: 10px; /* 调整图标和文字之间的距离 */
}
#userinfo{
  display: flex;
  align-items: center; /* 居中对齐 */
  position: absolute;
  font-size: 20px;
  right: 8%;
  top: 9%;
}
#userinfoImg{
  position: relative;
  width: 50px;
  height: 50px;
  background-image: url('../../public/UI/login-in-new.png');
  margin-right: 10px; /* 调整图标和文字之间的距离 */
}

#content {
  flex: 1;
  display: flex;
  height: 93%;
  width: 100%;
  position: relative; /* Add position relative */
  z-index: 1; /* Ensure content stays above the background */

}

#left-section,
#middle-section,
#right-section {
  height: 100%;
  display: flex;
  flex-direction: column;
  position:relative

}

#left-section {

  width: 25%;
}

#left-section-top,
#left-section-bottom {
  flex: 1;
}

#middle-section {

  flex: 1;
  display: flex;
  flex-direction: column;
}

#middle-section-top {

  flex: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#middle-section-bottom {

  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#right-section {

  width: 25%;
}

#right-section-top,
#right-section-bottom {
  flex: 1;
  position:relative
}

/* Add a new div for the background image */
#background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../public/UI/标题/bg.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0; /* Place the background behind other content */
}

#setting {
  background-image: url('../../public/UI/标题/图层 29.png');
  background-size: cover;
  position: absolute;
  left: 2%;
  top: 20%;
  height: 40px;
  width: 40px;
  display: flex;
}

</style>
