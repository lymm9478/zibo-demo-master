
import { ref } from 'vue';
export default {
    Viewer: null,
    backendstatic:'http://127.0.0.1',
    backend:'http://127.0.0.1:90',
    backendrootpath:'',
    baseMapUrl:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    isShowMove:false,
    isShowRain:false,
    isShowHumiture:false,
    isShowWind:false,
    changeView:1,
    // Wyjc_conf:null,




}

export const Wyjc_conf = ref(null);
export const  signalofWyjc_conf= ref({'key':false});
export function chengeSingal(){
    // signalofWyjc_conf.value={}
    signalofWyjc_conf.value["key"]=!signalofWyjc_conf.value["key"]
}



