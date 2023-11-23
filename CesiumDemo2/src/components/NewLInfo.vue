<template>
  <div style="transform: translate(5%,10%);
       width: 90%;height:90% ;;opacity: 1">
    <img id="LTIng" src="../../public/UI/UI/模块/小标题2.png">
    <span id="overlay-text">设备查询</span>
    <div style="position: relative;height: 98%;width: 98%;top: -7%;left: 1.5%">
      <div id="selectOut">
        <div id="selectTest">设备列表</div>
         <input id="inputInfo" type="text" autocomplete="off" placeholder="设备搜索">
      </div>
      <div id="allInfo"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
@import url('../text.css');

#LTIng {
  position: relative;
  top: -6.95%;
  max-width: 100%; /* 图片最大宽度为其容器的100% */
  height: auto; /* 保持宽高比，自动调整高度 */
}

#overlay-text {
  position: absolute;
  display: flex;
  top: -4%; /* 垂直居中 */
  left: 30%; /* 水平居中 */
  transform: translate(-50%, -50%);
  font-family: '11', sans-serif; /* 使用黑体字体 */

  color: white; /* 白色文字 */
  font-size: 22px;
}

#selectOut {
  position: relative;
  padding-left: 10%;
  padding-top: 0.5%;
  height: 5%;
  background-color: #1D1D1D;
  color: #00e5ff;
  line-height: 5%; /* 将 line-height 设置为与高度相同的值 */
  font-size: 0.75vw;
  border: 1px solid #1c487a;
}
#selectTest{
  position: relative;
  top: 46%;
  font-size: 0.8vw;
}
#inputInfo {
  position: relative;
  top: 0%;
  height: 80%;
  line-height: 80%; /* 将 line-height 设置为与高度相同的值 */
  background: none;
  border: 1px solid #1380bd;
  color: #ccc;
  width: 51%;
  outline: none;
  float: right;
  margin-top: 2px;
}
#allInfo{
  padding:0px;
  height: calc( 100% - 1%);
  background:rgba(1,51,102,0.3) ;
  border-right:1px solid rgb(28,72,122);
  border-left:1px solid rgb(28,72,122);
  border-bottom:1px solid rgb(28,72,122);
  border-bottom-width:1px ;
  border-bottom-style: solid;
  border-bottom-color:rgb(28,72,122) ;
  border-image:initial;
  border-top: none;
  overflow-y:auto ;
}

</style>
