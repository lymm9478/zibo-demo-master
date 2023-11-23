<template>
  <div style="transform: translate(5%,10%);
       width: 90%;height:90% ;;opacity: 1" >
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png" >
    <span id="overlay-text">设备信息</span>
    <div style="position: relative;height: 100%;width: 98%"></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@import url('../text.css');
#LTIng{
  position: relative;
  top: -9.47%;
  max-width: 100%; /* 图片最大宽度为其容器的100% */
  height: auto; /* 保持宽高比，自动调整高度 */
}
#overlay-text {
  position: absolute;
  top:-6.6%; /* 垂直居中 */
  left: 30%; /* 水平居中 */
  transform: translate(-50%, -50%);
  font-family: '11', sans-serif; /* 使用黑体字体 */

  color: white; /* 白色文字 */
  font-size:22px;
}
</style>
