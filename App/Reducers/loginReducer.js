const DEFAULT_STATE = {login: false}

export default (state = DEFAULT_STATE, action)=> {
  // console.log('login reducer : Action type: '+action.type)

  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        login: action.data.login,
        username:action.data.username
      }
    case 'LOGOUT_SUCCESS' :
      return {
        ...state,
        login: action.data.login,
        username:null
      }
    // case 'ADD_USER' :
    //   return {
    //     ...state,
    //     userData:action.data.user
    //   }
    default:
      return state
  }
}