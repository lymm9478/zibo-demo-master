<template>
  <div id="cesiumContainer" style="width: 100%;height:100% ;opacity: 1"></div>

    <div id="LonLatInfo" v-html="lonLatText"></div>
  <div style=" color:white;font-weight: bold; display:block; bottom: 0%; left:0%; position: absolute;  z-index: 100; height: 24%; width: 14%;">
    <div>
      <div style="font-size: 30px; text-align: center; font-weight: bold;"></div>
      <div style="margin-top: 12px; display: flex; font-size: 16px">
        <img style="width: 20%; height: 20%; position: relative; left: 5%" src="../../public/UI/UI/图标+图标框/move.png" alt="">
        <span style="position: relative; left: 11%; display: flex; align-items: center">位移监测点</span>
      </div>
      <div style="margin-top: 12px; display: flex; font-size: 16px">
        <img style="width: 20%; height: 20%; position: relative; left: 5%" src="../../public/UI/UI/图标+图标框/rainfall.png" alt="">
        <span style="position: relative; left: 11%; display: flex; align-items: center">雨量监测点</span>
      </div>
      <div style="margin-top: 12px; display: flex; font-size: 16px">
        <img style="width: 20%; height: 20%; position: relative; left: 5%" src="../../public/UI/UI/图标+图标框/humiture.png" alt="">
        <span style="position: relative; left: 11%; display: flex; align-items: center">温湿度监测点</span>
      </div>
      <div style="margin-top: 12px; display: flex; font-size: 16px">
        <img style="width: 20%; height: 20%; position: relative; left: 5%" src="../../public/UI/UI/图标+图标框/windDirection.png" alt="">
        <span style="position: relative; left: 11%; display: flex; align-items: center">风向监测点</span>
      </div>
    </div>
  </div>

</template>
<script setup>
import {onMounted,ref} from "vue";
import Config from "@/module/Class_Config";
import { InitialCameraLocation } from "@/module/Class_MiddleMap";
// import {selectedEntityTree} from "@/module/Class_Listening";
const lonLatText = ref("");
onMounted(() => {
  let viewer = new Cesium.Viewer("cesiumContainer", {
    shadows: false,
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    shouldAnimate: true,
    sceneModePicker: false,
    selectionIndicator: false,
    timeline: false,
    navigationHelpButton: false,
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
      // url: "http://t0.tianditu.gov.cn/img_w/wmts?tilematrix={z}&layer=img&style=default&tilerow={y}&tilecol={x}&tilematrixset=w&format=tiles&service=WMTS&version=1.0.0&request=GetTile&tk=a7abea90bca2f9e5a02a6fbf1adc8553",
      // url: "http://192.168.0.14/MapTile/ESRI/{z}/{y}/{x}.png",
      url: Config.baseMapUrl,
      maximumLevel: 16
    }),
    clock: new Cesium.Clock({
      currentTime: Cesium.JulianDate.fromDate(new Date()),
    }),
    orderIndependentTranslucency: false,
    contextOptions: {
      webgl: {
        alpha: true,
        depth: true,
        stencil: true,
        antialias: true,
        premultipliedAlpha: true,
        preserveDrawingBuffer: true,
        failIfMajorPerformanceCaveat: true,
      },
    }
  });

  // viewer.imageryLayers.removeAll(true); //删除所有底图
  // viewer.scene.globe.baseColor = Cesium.Color.fromCssColorString("#000000");
  viewer._cesiumWidget._creditContainer.style.display = "none";
  viewer.scene.skyBox.show = false;
  viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);
  viewer.scene.sun.show = false;
  viewer.scene.moon.show = false;
  viewer.scene.screenSpaceCameraController.maximumZoomDistance = 32784836;
  viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
    Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
  );
  viewer.scene.logarithmicDepthBuffer = true;
  viewer.scene.globe.depthTestAgainstTerrain = false;
  viewer.scene.screenSpaceCameraController.enableCollisionDetection = true;
  viewer.scene.globe.translucency.enabled = false;
  viewer.scene.globe.translucency.frontFaceAlphaByDistance = new Cesium.NearFarScalar(400.0, 1.0, 80000, 0.0);

  // 添加鼠标移动事件监听器
  viewer.scene.canvas.addEventListener("mousemove", onViewerMouseMove);

  Config.Viewer = viewer;
  InitialCameraLocation()
})


function onViewerMouseMove(event) {
  const screenPosition = new Cesium.Cartesian2(event.clientX, event.clientY);
  const ray = Config.Viewer.scene.camera.getPickRay(screenPosition);
  const globePosition = Config.Viewer.scene.globe.pick(ray, Config.Viewer.scene);

  if (globePosition) {
    const lonLatString = formatLonLat(globePosition);
    lonLatText.value = lonLatString;
  }
}

function formatLonLat(cartesian) {
  const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
  const lon = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
  const lat = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);

  return `<span style="font-size: 20px; font-weight: bold; color: white;"> ${lon}°E&nbsp; ${lat}°N</span>`;
}
</script>
<style scoped>
#cesiumContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-image: url("~@/assets/img/back-container.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 10;
}
#LonLatInfo {
  position: absolute;
  right: 0%;
  bottom: -2%;
  height: 8%;
  width: 18%;
  background-color: transparent; /* 无色 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  z-index: 11;
}
/*#Legend{*/
/*  position: absolute;*/
/*  left: 0%;*/
/*  bottom: 0%;*/
/*  height: 8%;*/
/*  width: 13%;*/
/*  background-color: red; !* 无色 *!*/
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  padding: 5px;*/
/*  z-index: 11;*/
/*}*/
#legend{

}
</style>
