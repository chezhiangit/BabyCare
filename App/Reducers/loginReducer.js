const DEFAULT_STATE = {login: false}

export default (state = DEFAULT_STATE, {type, payload})=> {
  console.log('login reducer : Action type: '+type)

  switch(type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        login: true,
      }
    case 'LOGOUT_SUCCESS' :
      return {
        ...state,
        login: false,
      }
    default:
      return state
  }
}