const DEFAULT_STATE = [{
  key:'',
  username:'',
  babyName:'',
  DOB:'',
  placeOfBirth:'',
  birthWeight:'',
  lengthAtBirth:'',
  bloodGroup:'',
  identification:'',
  remarks:''
}]

export default (state = DEFAULT_STATE, action)=> {
  console.log('doctor details reducer : Action type: '+action.type)
switch(action.type) {
  
  case 'LOAD_DOCTORDETAILS':
    return {
      ...state,
      doctorDetails:action.data
    }
  // case 'ADD_DOCTORDETAILS':
  //   return {
  //     ...state,
  //     doctorDetails:[...state.doctorDetails,action.data.item]
  //   }
  //   case 'UPDATE_DOCTORDETAILS':
  //   const updatelist = [...state.doctorDetails];
  //   updatelist[action.data.index]=action.data.item
  //   return {
  //     ...state,
  //     doctorDetails:updatelist
  //   }
  //   case 'DELETE_DOCTORDETAILS':
  //     const doctorlist = [...state.doctorDetails];
  //     doctorlist.splice(action.data.index, 1);
  //   return {
  //     ...state,
  //     doctorDetails:doctorlist
  //   }
  default:
    return state
}
}