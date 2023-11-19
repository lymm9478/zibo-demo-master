<template>
  <div style="transform: translate(5%,5%);
       width: 90%; height:90%; opacity: 1">
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png">
    <span id="overlay-text">推送提醒</span>
    <div id="topInfo" class="container">
      <div class="scrolling-content">
        <div class="text">站点#01预警信息已于15:03自动推送</div>
        <div class="text">站点#02预警信息已于15:04自动推送</div>
        <div class="text">站点#03预警信息已于15:04自动推送</div>
        <!-- Add more divs as needed -->
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
#LTIng {
  max-width: 100%;
  height: auto;
}

#overlay-text {
  position: absolute;
  top: 15%;
  left: 32%;
  transform: translate(-50%, -50%);
  font-family: '黑体', sans-serif;
  font-weight: bold;
  color: white;
  font-size: 18px;
}

.container {
  height: 120px;
  overflow: hidden;
  position: relative;
}

.scrolling-content {
  display: flex;
  flex-direction: column;
  animation: scrollText 10s linear infinite;
  overflow: hidden; /* 隐藏溢出的内容 */

}
.text{
  background-color: #00b2ff;
  text-align: center;
  color: red;
}

.scrolling-content div {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

@keyframes scrollText {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>
