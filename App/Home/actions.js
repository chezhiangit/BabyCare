import {Actions} from 'react-native-router-flux'

//const bct = require('../Data/babyCareTips.json')

import * as BabyCareModel from '../Data/responseData'

export default getHomeData = ()=>{
    return ({type:'LOAD_HOME'})
}
export const handleListSelection = (item) => {

    switch(item.id){
        case "DR":
        case "BR":
        case "VR":
            return ({type:'NO_ACTION'})
        case "DM":
            Actions.bdms({title:'Dev Milestone'});
            return ({type:'LOAD_BABYMSTONE'})
        case "BCT":
            Actions.bcaretips({title:'Baby Care Tips'});
            return ({type:'LOAD_BABYCARETIPS'})
        case "HWC":
            Actions.heightWeight({title:'Height-Weight'});
            return ({type:'LOAD_HEIGHTWEIGHT'})
        default:
            return ({type:'NO_ACTION'})
    }
   /* */

    
}

export function loadBabyMileStone() {
    return (dispatch) =>{
        let data = BabyCareModel.getBabyMileStoneData();
        Actions.bdms({title:'Dev Milestone'});
        dispatch({type:'LOAD_BABYMSTONE',data})
    }
}

export function loadBabyCareTips() {
    return (dispatch) =>{
        let data = BabyCareModel.getBabyCareTipsData();
        Actions.bcaretips({title:'Baby Care Tips'});
        dispatch({type:'LOAD_BABYCARETIPS',data})
    }
}

export function loadHeightWeight() {
    return (dispatch) =>{
        let data = BabyCareModel.getHeightWeightData();
        Actions.heightWeight({title:'Height-Weight'});
        dispatch({type:'LOAD_HEIGHTWEIGHT',data})
    }
}

