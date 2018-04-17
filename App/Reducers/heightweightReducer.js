const DEFAULT_STATE = {}

export default (state = DEFAULT_STATE, action)=> {
    console.log('height weight reducer : Action type: '+action.type)
  switch(action.type) {   
    case 'LOAD_HEIGHTWEIGHT':
      return {
        ...state,
        boys:action.data.boys,
        girls:action.data.girls
      }
    default:
      return state
  }
}