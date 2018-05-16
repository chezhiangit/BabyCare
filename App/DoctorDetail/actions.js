import {Actions} from 'react-native-router-flux';
import * as doctorModel from '../Data/doctorModel'

export function addEditDeleteDoctorDetails(index,item,operation,Callback){
    return (dispatch)=>{
        switch(operation){
            case 1://Add
            case 2://Edit
                Actions.addeditDoctorDetails({title:'Doctor Details',index:index,doctorRec:item,operation:operation})
            break;
            case 3: //Delete
                console.log('Delete doctor: item will be deleted',item)
                let username = item.username
                deleteDoctor(item,Callback)
                let doctors = doctorModel.loadDoctor(username)
                if(doctors!=null){
                    dispatch({type:'LOAD_DOCTORDETAILS',data:doctors})
                }else {
                    dispatch({type:'LOAD_DOCTORDETAILS',data:[]})
                }
                //dispatch({type:'DELETE_DOCTORDETAILS',data:{index,item,operation}})
            break;
        }
    }
}
export function deleteDoctor(item,Callback){    
    if(doctorModel.deleteDoctor(item)==true){
        Callback.onSuccess('Confirmation','\r\nDeleted successfully.')
    }else {
        Callback.onError('Error','\r\nUnable to delete.\r\n Pls try again.')
    }
}
export function saveDoctorDetails(index,item,operation,Callback){
    return (dispatch) =>{
        console.log('New doctor detail :',item)
       if(operation===1){
           if(doctorModel.saveDoctor(item)==true){
                let doctors = doctorModel.loadDoctor(item.username)
                if(doctors!=null){
                    dispatch({type:'LOAD_DOCTORDETAILS',data:doctors})
                }else {
                    dispatch({type:'LOAD_DOCTORDETAILS',data:[]})
                }
            Callback.onSuccess('Confirmation','Doctor details saved Successfully.')
           } else {
            Callback.onError('Error','Unable to save doctor details. \nPls try again.')
           }
            //dispatch({type:'ADD_DOCTORDETAILS',data:{item}})
       }else if(operation===2){
            if(doctorModel.updateDoctor(item)==true){
                let doctors = doctorModel.loadDoctor(item.username)
                if(doctors!=null){
                    dispatch({type:'LOAD_DOCTORDETAILS',data:doctors})
                }else {
                    dispatch({type:'LOAD_DOCTORDETAILS',data:[]})
                }
                Callback.onSuccess('Confirmation','Doctor details updated Successfully.')
            } else {
                Callback.onError('Error','Unable to update doctor details. \nPls try again.')
            }
            //dispatch({type:'UPDATE_DOCTORDETAILS',data:{item,index}})
       }
    }
}

