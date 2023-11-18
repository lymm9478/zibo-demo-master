<template>
  <div id="cesiumContainer" style="width: 60%;height:80% ;opacity: 1"></div>
</template>
<script setup>
import {onMounted} from "vue";
import Config from "@/module/Class_Config";
import { InitialCameraLocation } from "@/module/Class_MiddleMap";
// import {selectedEntityTree} from "@/module/Class_Listening";

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
  
  Config.Viewer = viewer;
  InitialCameraLocation()
})

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
  z-index: 0;
}
</style>