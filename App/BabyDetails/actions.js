import {Actions} from 'react-native-router-flux';

export function addEditDeleteBabyDetails(index,item,operation){
    return (dispatch)=>{
        switch(operation){
            case 1:
            case 2:
                Actions.addeditBabyDetails({title:'Baby Details',index:index,babyRec:item,operation:operation})
            break;
            case 3:
                dispatch({type:'DELETE_BABYDETAILS',data:{index,item,operation}})
            break;
        }
    }
}

export function saveBabyDetails(index,item,operation){
    return (dispatch) =>{
        console.log('New baby detail :',item)
       // Actions.babydetails({title:'Baby Details'})
       if(operation===1){
            dispatch({type:'ADD_BABYDETAILS',data:{item}})
       }else if(operation===2){
            dispatch({type:'UPDATE_BABYDETAILS',data:{item,index}})
       }
    }
}