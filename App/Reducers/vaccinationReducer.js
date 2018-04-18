const DEFAULT_STATE = [{}]

export default (state = DEFAULT_STATE, action)=> {
    console.log('vaccination record reducer : Action type: '+action.type)
  switch(action.type) {
      
    case 'LOAD_VACCINATION':
      return {
        ...state,
        vaccination:action.data
      }
      case 'UPDATE_VACCINATION':
      return {
        ...state,
        vaccination:action.data
      }
    default:
      return state
  }
}
