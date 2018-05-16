import {Actions} from 'react-native-router-flux';
//import * as BabyCareModel from '../Data/responseData';
import * as babyModel from '../Data/babyModel'
import * as vaccinationModel from '../Data/vaccinationModel'

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

export function updateVaccinationDates(data,Callback) {
    return (dispatch) =>{
     //   data.vaccination[data.sectionIdex].data[data.index].dueOn = data.newDueDate
     //   data.vaccination[data.sectionIdex].data[data.index].givenOn = data.newGivenDate
        //babyModel.loadBaby(username);

        if(vaccinationModel.updateVaccinationDates(data,Callback) == true){

            dispatch({type:'UPDATE_VACCINATION',data:data})

            let vaccineData = vaccinationModel.loadVaccination(data.username,data.selectedBabyId)
            if(vaccineData==null){
                vaccineData=[]
            }
            dispatch({type:'LOAD_VACCINATION',data:{vaccineData,selectedBabyId:data.selectedBabyId}})
            Callback.onSuccess('Confirmation','\r\n\nSuccessfully updated.')
        }else {
            Callback.onError('Error','Unable to save. \r\n\nPls try again')
        }
        
    }
}

export function getVaccinationList(username,babyId){
        return(dispatch)=>{
            if(username == null || babyId == null) return;

            let vaccineData = vaccinationModel.loadVaccination(username,babyId)
            if(vaccineData==null){
                vaccineData=[]
            }
            dispatch({type:'LOAD_VACCINATION',data:{vaccineData,selectedBabyId:babyId}})
        }
}