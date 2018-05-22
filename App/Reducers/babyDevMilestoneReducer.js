const DEFAULT_STATE = {}

export default (state = DEFAULT_STATE, action)=> {
    // console.log('baby milestone reducer : Action type: '+action.type)
  switch(action.type) {  
    case 'LOAD_BABYMSTONE':
      return {
        ...state,
        babyMileStone:action.data
      }
    default:
      return state
  }
}