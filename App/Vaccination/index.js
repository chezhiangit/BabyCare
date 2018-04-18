import VaccinationComponent from './VaccinationComponent'
import EditVaccineComponent from './EditVaccineComponent'
import * as actions from './actions'
import {connect} from 'react-redux'
import {getNav, getLogin,getVaccination} from '../Reducers'

const mapStateToProps = (state, props)=> {
  return {
    ...getNav(state),
    ...getLogin(state),
    ...getVaccination(state)
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(VaccinationComponent);
export const EditVaccineComp = connect(mapStateToProps, mapDispatchToProps)(EditVaccineComponent);