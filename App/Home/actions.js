import {Actions} from 'react-native-router-flux'

//const bct = require('../Data/babyCareTips.json')

import bct from '../Data/babyCareTips'

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
            return ({type:'NO_ACTION'})
        default:
            return ({type:'NO_ACTION'})
    }
   /* */

    
}