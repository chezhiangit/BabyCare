import {Actions} from 'react-native-router-flux'
import * as Utils from '../Utils'

export const logout = ()=>{
    return (dispatch) =>{
        Actions.login({title: 'Sign On'})
        dispatch({type: 'LOGOUT_SUCCESS',data:{login:false}})
    }
  }
export const loginSuccess=()=>{
    return (dispatch) => {
        dispatch({type:'LOGIN_SUCCESS',data:{login:true}})
        Actions.home({title: 'Home Page'})
    }
}

export const validateLogin = (login)=>{
    return (dispatch) =>{
        if(!login){
            Actions.login({title: 'Sign On'});
        } 
    }
}

export const createNewUser = ()=>{

    return (dispatch)=>{
        Actions.newuser({title:'New User'})
    }
}

export const forgotPassword = ()=>{
    return (dispatch)=>{
        Actions.forgotpwd({title:'Forgot Password'})
    }
}

export function saveNewUser(user,Callback) {
    return (dispatch)=>{
        if(Utils.validatePassword(user.password)) {
            Callback.onSuccess();
            dispatch({type:'ADD_USER',data:{user:user}})        
        } else {
            Callback.onError()
        }
    

    }
}

export function resetPassword(user){
    return (dispatch)=>{

        dispatch({type:'RESET_PASSWORD',data:{user:user}})        
    }
}