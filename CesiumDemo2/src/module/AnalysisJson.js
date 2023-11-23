import axios from "axios";
import {Wyjc_conf,chengeSingal} from "./Class_Config.js";


class Wyjc{
  //位移监测设备
    constructor(_nums,_map_nums_area,_nums_warn,_nums_arae_warn){
        this.nums=_nums;//站点总数
        this.map_nums_area=_map_nums_area;//每个区的站点总数 map(区名,站点数)
        this.nums_warn=_nums_warn;//预警总数，四类  map(预警等级,预警数量)
        this.nums_arae_warn=_nums_arae_warn;//每个区的预警数，以及等级
    }
    
}
class YJINFO{//预警信息 ，存储每个区,对应的预警等级
  constructor(_city,_level,_nums)
  {
    this.city=_city;
    this.level=_level;
    this.nums=_nums;
  }
}







export function getData () {
  axios
    .get( "/WYJC.geojson" ,{
      params: {
        str: "",
      },
    }
 )
    .then((res) => {
      let wy_decice=new Wyjc();
      var YJINFO_City_arr=[];

      //console.log(res.data);
      wy_decice.nums=res.data.features.length;//位移设备站点总数
      const nums_area_map=new Map();//每个地区的站点数 map(city,value)
      const nums_warn_map=new Map();//不同等级的预警总数
     
      nums_warn_map.set("B",0);
      nums_warn_map.set("G",0);
      nums_warn_map.set("Y",0);
      nums_warn_map.set("R",0);
      for(var i=0;i<res.data.features.length;i++)
      {
        //*******************每个地区站点总数******************************/


        let city=res.data.features[i].properties.City;
        if(!nums_area_map.has(city)){
          nums_area_map.set(city,1);
        }
        else{
          let value= nums_area_map.get(city);
          nums_area_map.set(city,++value);
        }


        //*********************预警总数***********************************//
        let water_level=(res.data.features[i].properties.水平位).replace(/[^0-9]/ig, '');
        if(water_level<=3){
          let value=nums_warn_map.get('B');
          nums_warn_map.set('B',++value);

        }
        else if(water_level>3&&water_level<=5){
          let value=nums_warn_map.get('G');
          nums_warn_map.set('G',++value);
        }
        else if(water_level>5&&water_level<=7){
          let value=nums_warn_map.get('Y');
          nums_warn_map.set('Y',++value);
        }
        else{
          let value=nums_warn_map.get('R');
          nums_warn_map.set('R',++value);
        }
      
       
        
       


      }

 //*********************每个地区的不同等级的预警总数***********************************//
    for(var key of nums_area_map.keys())
    {
      var tmp=new YJINFO(key,'B',0);
      var tmp1=new YJINFO(key,'G',0);
      var tmp2=new YJINFO(key,'Y',0);
      var tmp3=new YJINFO(key,'R',0);
      YJINFO_City_arr.push(tmp,tmp1,tmp2,tmp3);
    }
    for(let i=0;i<res.data.features.length;i++)
    {
      let water_level=(res.data.features[i].properties.水平位).replace(/[^0-9]/ig, '');
      let city=res.data.features[i].properties.City;
      if(water_level<=3){

         for(let j=0;j<YJINFO_City_arr.length;j++)
         {
          if(YJINFO_City_arr[j].city==city&&YJINFO_City_arr[j].level=='B'){
            YJINFO_City_arr[j].nums++;
            break;
          }
         }

      } else if(water_level>3&&water_level<=5){
        for(let j=0;j<YJINFO_City_arr.length;j++)
        {
         if(YJINFO_City_arr[j].city==city&&YJINFO_City_arr[j].level=='G'){
           YJINFO_City_arr[j].nums++;
           break;
         }
        }
        

      } else if(water_level>5&&water_level<=7){
        for(let j=0;j<YJINFO_City_arr.length;j++)
        {
         if(YJINFO_City_arr[j].city==city&&YJINFO_City_arr[j].level=='Y'){
           YJINFO_City_arr[j].nums++;
           break;
         }
        }
      }
      else{
       
        for(var j=0;j<YJINFO_City_arr.length;j++)
        {
         if(YJINFO_City_arr[j].city==city&&YJINFO_City_arr[j].level=='R'){
           YJINFO_City_arr[j].nums++;
           break;
         }
        }
      }
    }
      wy_decice.map_nums_area=nums_area_map;
      wy_decice.nums_warn=nums_warn_map;
      wy_decice.nums_arae_warn=YJINFO_City_arr;
      // console.log(res.data.data);
      // console.log("ok");
      
      // console.log(typeof Wyjc_conf.value);
      Wyjc_conf.value=wy_decice
      chengeSingal()
      // signalofWyjc_conf.value['key']=!signalofWyjc_conf.value['key']
      // console.log(Wyjc_conf.value);     
      // console.log(signalofWyjc_conf.value);     
    }).catch(error =>{console.log(error)});
}

// const Zzexpres=(str)=>{
//   const matches = str.match(/([\d\.]+)(\D+)/);
//   const value = parseFloat(matches[1]);
//   //const unit = matches[2];
//   return value;

// };

  export default {
    getData,Wyjc
  }