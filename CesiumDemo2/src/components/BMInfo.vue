<template>
  <div style="width: 90%; height: 100%; opacity: 1;">
    <img id="LTIng" src="../../public/UI/一级导航/一级导航.png" >
    <div id="FunctionButton">
      <div class="button">
        <img class="img"     src="../../public/UI/一级导航/矩形11.png">
        <p class="text">功能模块</p>
      </div>
      <div class="button">
        <img class="img"   src="../../public/UI/一级导航/矩形22.png">
        <p class="text">功能模块</p>
      </div>
      <div class="button">
        <img  class="img"   src="../../public/UI/一级导航/矩形33.png">
        <p class="text">功能模块</p>
      </div>
      <div class="button">
        <img  class="img"   src="../../public/UI/一级导航/矩形44.png">
        <p class="text">功能模块</p>
      </div>
      <div class="button">
        <img  class="img"   src="../../public/UI/一级导航/矩形55.png">
        <p class="text">功能模块</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BMInfo"
}
</script>

<style scoped>
#LTIng{
  position: relative;
  width: 100%;
  left: 0;
  height: auto;
  display: block; /* 将图像设置为块级元素，以便居中对齐 */
  margin: 0 auto; /* 左右外边距设置为auto，实现水平居中 */
}
#FunctionButton {
  max-width: 100%;
  position: relative;
  top: -20%;
  width: 100%;
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
  max-width: 100%; /* 图片最大宽度为其容器的100% */
  max-height: 100%; /* 图片最大高度为其容器的100% */
  width: auto; /* 自动调整宽度 */
  height: auto; /* 自动调整高度 */
  display: block; /* 将图像设置为块级元素，以便居中对齐 */
  margin: 0 auto; /* 左右外边距设置为auto，实现水平居中 */
}
.text {
  position: relative;
  top: -45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* 设置文字颜色 */
  font-size: 25px; /* 设置文字大小 */
  font-weight: bold; /* 设置文字加粗 */
  text-align: center; /* 设置文字居中对齐 */
}
</style>
