export default {}

let isListrening  = false 

export function enableListening(){isListrening = true}
export function disableListening(){isListrening = false}

export function selectedEntityTree(selectedEntity) {
    // 当选中节点为空时直接返回
    if(!isListrening){return}
    if(typeof selectedEntity == "undefined"){ return}
    strategies[selectedEntity.name](selectedEntity)
}

var strategies = {  
    'WindPoint': function(Entity) {
        console.log(Entity);
        return Entity;  
    },  
    'rainfallPoint': function(Entity) {  
        console.log(Entity);
        return Entity;  
    },  
    'MovePoint': function(Entity) {  
        console.log(Entity);
        return Entity;  
    },
    'humiturePoint':function(Entity) {  
        console.log(Entity);
        return Entity;  
    }
}