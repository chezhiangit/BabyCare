import {Actions} from 'react-native-router-flux';
import * as BabyCareModel from '../Data/responseData';

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

export function loadVaccination(){
    return (dispatch) =>{
        let data = BabyCareModel.getVaccinationData();
        Actions.vaccine({title:'Vaccination'})
        dispatch({type:'LOAD_VACCINATION',data})
    }
}

