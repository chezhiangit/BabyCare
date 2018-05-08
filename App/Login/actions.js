import {Actions} from 'react-native-router-flux'
import * as Utils from '../Utils'
import * as loginModel from '../Data/loginModel'

export const logout = ()=>{
    return (dispatch) =>{
        Actions.login({title: 'Sign On'})
        dispatch({type: 'LOGOUT_SUCCESS',data:{login:false}})
    }
  }
export const login = (data)=>{
    return (dispatch) => {
        let userInfo = loginModel.validateUser(data)
        if(userInfo!==null && userInfo.length>0){
            console.log('Number of User info fetched from BD:- ',userInfo.length)
            if(userInfo[0].password.localeCompare(data.password)===0){
                dispatch({type:'LOGIN_SUCCESS',data:{login:true}})
                Actions.home({title: 'Home Page'})
            } else {
                console.log('Password doesn\'t match')
            }
        }else {
            console.log('User not found in DB')
        }
        
       
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
        if(Utils.validatePassword(user.password) && Utils.validateUserName(user.username)) {
            console.log('User name & Password Validate success: ')
            let userInfo = loginModel.validateUser(user)
            if(userInfo!==null && userInfo.length>0){
                let title = 'Error\n'
                let msg = 'User name exist.\n\r pls try with different user name.'
                Callback.onError(title,msg)
            } else if(loginModel.storeUserData(user)===true){
                console.log('Store User name & Password in DB Success: ')
                let title='Confirmation'
                let msg = 'User created successfully.'
                Callback.onSuccess(title,msg);
                dispatch({type:'ADD_USER',data:{user:user}})
            }else{
                console.log('Store User name & Password in DB Failed: ')
                let title = 'Error\n'
                let msg = 'Invalid User Name or Password.\n\n\r No space allowed.\n\r Password Should have:\r\rOne lower case lettr (a-z).'+
                '\r One Uppper case letter (A-Z).\r One numberic (0-9).\r One special character (!@#$%^&*).'
                Callback.onError(title,msg)
            }          
        } else {
            console.log('User name & Password Validate Failed: ')
            let title = 'Error\n'
            let msg = 'Invalid User Name or Password.\n\n\r No space allowed.\n\r Password Should have:\r\rOne lower case lettr (a-z).'+
            '\r One Uppper case letter (A-Z).\r One numberic (0-9).\r One special character (!@#$%^&*).'
            Callback.onError(title,msg)
        }
    

    }
}

export function resetPassword(user,Callback){
    return (dispatch)=>{
        if(Utils.validatePassword(user.password) && Utils.validateUserName(user.username)) {
            if(loginModel.forgotPassword(user)===true){
                Callback.onSuccess();
                dispatch({type:'RESET_PASSWORD',data:{user:user}})
                return;    
            } else {
                Callback.onError()
                return; 
            }
                 
        } else {
            Callback.onError()
            return;
        }
                  
    }
}
