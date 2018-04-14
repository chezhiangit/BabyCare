import {Actions} from 'react-native-router-flux'

export const logout = ()=>{
    Actions.logout({title: 'loged out'})
    // Redux require you to return an object with type.
    return {type: 'Logout'}
  }
export const loginSuccess=()=>{
    LodeHomePage();
    return {
        type:'LOGIN_SUCCESS'
    }
}
export const LodeHomePage = ()=>{
    Actions.home({title: 'Home Page'})
    // Redux require you to return an object with type.
    return {type: 'HomePage'}
}
export const validateLogin = (login)=>{
    if(!login){
        Actions.login();
        return {type: 'LoginPage'}
    }
    return {type: 'default'}
}