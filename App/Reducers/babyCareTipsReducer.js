const DEFAULT_STATE = [{}]

export default (state = DEFAULT_STATE, action)=> {
    // console.log('baby care tips reducer : Action type: '+action.type)
  switch(action.type) {  
    case 'LOAD_BABYCARETIPS':
      return {
        ...state,
        babyCareTips:action.data
      }
    default:
      return state
  }
}