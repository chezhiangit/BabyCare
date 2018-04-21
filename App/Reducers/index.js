import {combineReducers} from 'redux'
import nav from './navigationReducer'
import login from './loginReducer'
import bct from './babyCareTipsReducer'
import bdms from './babyDevMilestoneReducer'
import heightweight from './heightweightReducer'
import vaccination from './vaccinationReducer'
import babydetails from './babyDetailsReducer'
import doctordetails from './doctorDetailsReducer'


export default combineReducers({
   nav,
   login,
   bct,
   bdms,
   heightweight,
   vaccination,
   babydetails,
   doctordetails
})

export const getNav = ({nav}) => nav
export const getLogin = ({login}) => login
export const getBabyCareTips = ({bct}) => bct
export const getBabyDevMilestone = ({bdms}) => bdms
export const getHeightWeightChart = ({heightweight}) => heightweight
export const getVaccination = ({vaccination}) => vaccination
export const getBabyDetails = ({babydetails}) => babydetails
export const getDoctorDetails = ({doctordetails}) => doctordetails

