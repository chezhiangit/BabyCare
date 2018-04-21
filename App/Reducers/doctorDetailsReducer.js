const DEFAULT_STATE = [{
    DOB:'',
    placeOfBirth:'',
    birthWeight:'',
    lengthAtBirth:'',
    bloodGroup:'',
    identification:'',
    remarks:''
}]

export default (state = DEFAULT_STATE, action)=> {
    console.log('baby details reducer : Action type: '+action.type)
  switch(action.type) {  
    case 'SAVE_DOCTORDETAILS':
      return {
        ...state,
        doctorDetails:action.data
      }
      case 'UPDATE_DOCTORDETAILS':
      return {
        ...state,
        doctorDetails:action.data
      }
    default:
      return state
  }
}