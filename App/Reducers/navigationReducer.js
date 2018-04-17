import { ActionConst } from 'react-native-router-flux'
const DEFAULT_STATE = {scene: {}}

export default (state = DEFAULT_STATE, {type, scene})=> {
  console.log('navigation reducer : Action type: '+type)

  switch(type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene,
      }
    default:
      return state
  }
}