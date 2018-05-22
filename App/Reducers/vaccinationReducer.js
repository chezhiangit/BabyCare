const DEFAULT_STATE = {vaccination:[]}

export default (state = DEFAULT_STATE, action)=> {
    // console.log('vaccination record reducer : Action type: '+action.type)
  switch(action.type) {
    case 'LOAD_BABYLIST':
      return {
        ...state,
        vaccination:[],
        babylist:[...action.data.babylist],
        selectedBabyId:''
        //vaccination:action.data
      }  
    case 'LOAD_VACCINATION':
      return {
        ...state,
        vaccination:[...action.data.vaccineData],
        selectedBabyId:action.data.selectedBabyId        
      }
      case 'UPDATE_VACCINATION':

       // Deep copy the source to destination
       const newVaccination = JSON.parse(JSON.stringify(state.vaccination));

        newVaccination[action.data.sectionIdex].data[action.data.index].dueOn = action.data.newDueDate
        newVaccination[action.data.sectionIdex].data[action.data.index].givenOn = action.data.newGivenDate
       // newVaccination[action.data.sectionIdex].title='title changed'
        console.log('From vaccination reducer: ',newVaccination[action.data.sectionIdex])
      return {
        ...state,
        vaccination:[...newVaccination]
      }
    default:
      return state
  }
}
