<template>
  <div style="transform: translate(5%,5%);
       width: 90%;height:90% ;opacity: 1" >
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png" >
    <span id="overlay-text">预警站点</span>
    <div style="width: 100%;height: 90%">
      <div class="PointInfo-1" >
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

    </div>
  </div>
</template>

<script setup>


</script>

<style scoped>
#LTIng{
  max-width: 100%; /* 图片最大宽度为其容器的100% */
  height: auto; /* 保持宽高比，自动调整高度 */
}
#overlay-text {
  position: absolute;
  top: 9%; /* 垂直居中 */
  left: 35%; /* 水平居中 */
  transform: translate(-50%, -50%);
  font-family: '黑体', sans-serif; /* 使用黑体字体 */
  font-weight: bold; /* 加粗 */
  color: white; /* 白色文字 */
  font-size:18px;
}
.text-1 {
  color: white;
  font-size: 30px;
  position: absolute; /* 设置绝对定位 */
  top: 20%; /* 距离父容器顶部的距离为父容器的一半 */
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 通过 translate 实现垂直居中和水平居中 */
}
.text {
  color: white;
  font-size: 17px;
}
.icon {
  width: 80px;
  height: 80px;
  margin: 20px 0;
}
.PointInfo-1{
  border: 5px solid transparent; /* 设置边框为透明，确保边框宽度不会影响内容的布局 */
  border-image: linear-gradient(to right, black, #04048d); /* 使用线性渐变作为边框图像 */
  border-image-slice: 1; /* 定义边框图像的填充方式，1 表示整个边框都被填充 */
  display: flex;
  width: 100%;
  height: 100%;
}

.PointPs{
  position: relative;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column; /* 将子元素纵向排列 */

}

</style>
