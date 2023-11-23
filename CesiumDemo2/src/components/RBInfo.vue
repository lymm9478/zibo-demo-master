<template>
  <div style="transform: translate(5%,5%); width: 90%; height:90%; opacity: 1">
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png">
    <span id="overlay-text">推送提醒</span>
    <div id="topInfo" class="container" >
      <div class="scrolling-content">
        <div class="text" v-for="(item, index) in messages" :key="index" @mouseover="stopScroll" @mouseleave="startScroll">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([
  "站点#01预警信息已于15:03自动推送",
  "站点#02预警信息已于15:04自动推送",
  "站点#03预警信息已于15:04自动推送"
  // 添加更多消息
]);

let isScrolling = true;

const stopScroll = () => {
  isScrolling = false;
  console.log('我进入了')
};

const startScroll = () => {
  isScrolling = true;
  scrollText();
  console.log('我离开了')
};

const scrollText = () => {
  if (isScrolling) {
    // 执行滚动的逻辑
    requestAnimationFrame(scrollText);
  }
};

// 初始启动滚动
scrollText();
</script>

<style scoped>
@import url('../text.css');
#LTIng {
  max-width: 100%;
  height: auto;
}

#overlay-text {
  position: absolute;
  top: 12.5%;
  left: 30%;
  transform: translate(-50%, -50%);
  font-family: '11', sans-serif;

  color: white;
  font-size: 22px;
}

.container {
  height: 103%;
  overflow: hidden;
  position: relative;
}

.scrolling-content {
  display: flex;
  flex-direction: column;
  animation: scrollText 5s linear infinite;
  overflow: hidden;
}

.text {
  background-color: #83aae5;
  text-align: center;
  color: red;
  font-weight: bold;
}

.scrolling-content div {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

@keyframes scrollText {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>
