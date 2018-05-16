import {Actions} from 'react-native-router-flux';
import * as babyModel from '../Data/babyModel'

export function addEditDeleteBabyDetails(index,item,operation,Callback){
    return (dispatch)=>{
        switch(operation){
            case 1://add
            case 2://edit
                Actions.addeditBabyDetails({title:'Baby Details',index:index,babyRec:item,operation:operation})
            break;
            case 3://delete
                console.log('Delete baby: item will be deleted',item)
                let username = item.username
                deleteBaby(item,Callback)
                let babys = babyModel.loadBaby(username)
                if(babys!=null){
                    dispatch({type:'LOAD_BABYDETAILS',data:babys})
                }else {
                    dispatch({type:'LOAD_BABYDETAILS',data:[]})
                }
                //dispatch({type:'DELETE_BABYDETAILS',data:{index,item,operation}})
            break;
        }
    }
}
export function deleteBaby(item,Callback){ 
    if(babyModel.deleteBaby(item)==true){
        Callback.onSuccess('Confirmation','\r\nDeleted successfully.')
    }else {
        Callback.onError('Error','\r\nUnable to delete.\r\n Pls try again.')
    }
}
export function saveBabyDetails(index,item,operation,Callback){
    return (dispatch) =>{
        console.log('New baby detail :',item)
       // Actions.babydetails({title:'Baby Details'})
       if(operation===1){
            if(babyModel.saveBaby(item)==true){
                let babys = babyModel.loadBaby(item.username)
                if(babys!=null){
                    dispatch({type:'LOAD_BABYDETAILS',data:babys})
                }else {
                    dispatch({type:'LOAD_BABYDETAILS',data:[]})
                }
            Callback.onSuccess('Confirmation','Baby details saved Successfully.')
            } else {
            Callback.onError('Error','Unable to save baby details. \nPls try again.')
            }
            //dispatch({type:'ADD_BABYDETAILS',data:{item}})
       }else if(operation===2){
            if(babyModel.updateBaby(item)==true){
                let babys = babyModel.loadBaby(item.username)
                if(babys!=null){
                    dispatch({type:'LOAD_BABYDETAILS',data:babys})
                }else {
                    dispatch({type:'LOAD_BABYDETAILS',data:[]})
                }
                Callback.onSuccess('Confirmation','Baby details updated Successfully.')
            } else {
                Callback.onError('Error','Unable to update baby details. \nPls try again.')
            }
           // dispatch({type:'UPDATE_BABYDETAILS',data:{item,index}})
       }
    }
}