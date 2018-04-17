import {combineReducers} from 'redux'
import nav from './navigationReducer'
import login from './loginReducer'
import bct from './babyCareTipsReducer'
import bdms from './babyDevMilestoneReducer'
import heightweight from './heightweightReducer'
import vaccination from './vaccinationReducer'

export default combineReducers({
   nav,
   login,
   bct,
   bdms,
   heightweight,
   vaccination
})

export const getNav = ({nav}) => nav
export const getLogin = ({login}) => login
export const getBabyCareTips = ({bct}) => bct
export const getBabyDevMilestone = ({bdms}) => bdms
export const getHeightWeightChart = ({heightweight}) => heightweight
export const getVaccination = ({vaccination}) => vaccination
