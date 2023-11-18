import Config from '@/module/Class_Config'
import ZiboJsondata from "@/assets/ZiBo.json";
import ZiboLabledata from "@/assets/ZiBoLable.json";
import humitureDirection from "@/assets/humitureDirection.json";
export default{}
let isDEM = true
export function loadBeseMap(){
    // console.log('ok');
    // 加载框线
    let ZiBoAreaDataSource = new Cesium.GeoJsonDataSource();
    
    ZiBoAreaDataSource.load(ZiboJsondata).then((Areas)=>{
        // console.log(Areas);
        Areas.entities.values.forEach((prefectureArea) => {
            Config.Viewer.entities.add({
                polygon: {
                    hierarchy: prefectureArea.polygon._hierarchy._value,
                    material: Cesium.Color.RED.withAlpha(0),
                    // outline: true,
                    // outlineColor : Cesium.Color.BLUE,
                    // outlineWidth:5000000,
                    // heightReference: Cesium.HeightReference.NONE,
                    // height: 0
                    // heightReference:0
                  },
                polyline:{
                    positions:prefectureArea.polygon._hierarchy._value.positions,
                    width: 2,
                    material: Cesium.Color.RED,
                }
            })
        })
    })

    let ZiBoLableDataSource = new Cesium.GeoJsonDataSource();
    ZiBoLableDataSource.load(ZiboLabledata).then((Lable)=>{
        // console.log(Lable);
        Lable.entities.values.forEach((pointLabel) => {
            console.log(pointLabel);
            var EntityPoint = Config.Viewer.entities.add(
                new Cesium.Entity({
                position: pointLabel.position.getValue(Cesium.JulianDate.now()),
                point: {
                    show :false,
                //   pixelSize: 1,
                //   color: Cesium.Color.RED.withAlpha(0),
                }
              }))
            EntityPoint.label={
                text: pointLabel.name, // 文字内容
                font: '16px sans-serif', // 字体样式
                style: Cesium.LabelStyle.FILL, // 标签样式
                // outlineWidth: 2, // 描边宽度
                verticalOrigin: Cesium.VerticalOrigin.CENTER, // 文字相对于标注的位置
                pixelOffset: new Cesium.Cartesian2(0, 5), // 文字偏移量，根据文字高度调整
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND // 文字高度参考
            }
        })
    })
}
// Regression perspective
// 将摄像机视角跳转到初始位置
export function InitialCameraLocation(){
    Config.Viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(118.03, 36.58, 244836),
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-90),
          roll: Cesium.Math.toRadians(0),
        },
    });
}

export function DEMSwitch(){
    isDEM=!isDEM
    if (isDEM) {
        Config.Viewer.imageryLayers.removeAll(true); //删除所有底图 
        Config.Viewer.scene.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
            url: Config.baseMapUrl,
            maximumLevel: 16
          }))
    }else{
        Config.Viewer.imageryLayers.removeAll(true); //删除所有底图 
        Config.Viewer.scene.globe.baseColor = Cesium.Color.fromCssColorString("#000000");
    }
}

// 根据传入的id数组移除全部entities
export function removeEntityByIDArray(IDOfEntityArray) {
    IDOfEntityArray.forEach((id) => {
        Config.Viewer.entities.removeById(id)
    })
}
// humitureDirection
export function addhumitureDirection(){
    console.log(humitureDirection);
}