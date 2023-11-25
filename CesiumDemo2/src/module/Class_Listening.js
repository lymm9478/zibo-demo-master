export default {}

let isListrening  = false 

export function enableListening(){isListrening = true}
export function disableListening(){isListrening = false}

export function selectedEntityTree(selectedEntity) {
    // 当选中节点为空时直接返回
    if(!isListrening){return}
    if(typeof selectedEntity == "undefined"){ return}
    switch(selectedEntity.name){
        case "WindPoint":
            console.log(selectedEntity);
        break;
        case "rainfallPoint":
            console.log(selectedEntity);
        break;
        case "MovePoint":
            console.log(selectedEntity);
        break;
        case "humiturePoint":
            console.log(selectedEntity);
        break;
        default :
            console.log("unknowname");
            break;
    }
}