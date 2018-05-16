const DEFAULT_STATE = [{
    key:'',
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
    console.log('baby details reducer : Action type: '+action.type)
  switch(action.type) {
    
    case 'LOAD_BABYDETAILS':
      return {
        ...state,
        babyDetails:action.data
      }
    // case 'ADD_BABYDETAILS':
    //   return {
    //     ...state,
    //     babyDetails:[...state.babyDetails,action.data.item]
    //   }
    //   case 'UPDATE_BABYDETAILS':
    //   const updatelist = [...state.babyDetails];
    //   updatelist[action.data.index]=action.data.item
    //   return {
    //     ...state,
    //     babyDetails:updatelist
    //   }
    //   case 'DELETE_BABYDETAILS':
    //     const babylist = [...state.babyDetails];
    //     babylist.splice(action.data.index, 1);
    //   return {
    //     ...state,
    //     babyDetails:babylist
    //   }
    default:
      return state
  }
}