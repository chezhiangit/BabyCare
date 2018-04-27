import {Actions} from 'react-native-router-flux';

export function addEditDeleteDoctorDetails(index,item,operation){
    return (dispatch)=>{
        switch(operation){
            case 1:
            case 2:
                Actions.addeditDoctorDetails({title:'Doctor Details',index:index,doctorRec:item,operation:operation})
            break;
            case 3:
                dispatch({type:'DELETE_DOCTORDETAILS',data:{index,item,operation}})
            break;
        }
    }
}

export function saveDoctorDetails(index,item,operation){
    return (dispatch) =>{
        console.log('New doctor detail :',item)
       if(operation===1){
            dispatch({type:'ADD_DOCTORDETAILS',data:{item}})
       }else if(operation===2){
            dispatch({type:'UPDATE_DOCTORDETAILS',data:{item,index}})
       }
    }
}