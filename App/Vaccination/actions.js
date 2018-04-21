import {Actions} from 'react-native-router-flux';
import * as BabyCareModel from '../Data/responseData';

// export function createVacinationList() {
//     console.log('start to create vaccination list')
//     return (dispatch) =>{
//         console.log('calling get vaccination list')
//         return BabyCareModel.getVaccinationList()
//     }
// }

export function goToVaccination(index,section) {
    return (dispatch) =>{
        // let data = BabyCareModel.getVaccinationList()
        Actions.editvaccine({title:'Edit Vaccination',index:index,section:section})
    }
}

export function updateVaccinationDates(data) {
    return (dispatch) =>{
     //   data.vaccination[data.sectionIdex].data[data.index].dueOn = data.newDueDate
     //   data.vaccination[data.sectionIdex].data[data.index].givenOn = data.newGivenDate

        dispatch({type:'UPDATE_VACCINATION',data:data})
    }
}