const DEFAULT_STATE = {login: false}

export default (state = DEFAULT_STATE, action)=> {
  console.log('login reducer : Action type: '+action.type)

  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        login: action.data.login,
      }
    case 'LOGOUT_SUCCESS' :
      return {
        ...state,
        login: action.data.login,
      }
    default:
      return state
  }
}