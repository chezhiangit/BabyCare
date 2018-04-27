import DoctorDetailsComponent from './DoctorDetailComponent'
import AddEditDoctorDetailsComponent from './addEditDoctorDetail'

import * as actions from './actions';
import * as loginActions from '../Login/actions'
import {connect} from 'react-redux'
import {getNav, getLogin, getDoctorDetails} from '../Reducers'

const mapStateToProps = (state, props)=> {
  return {
    ...getNav(state),
    ...getLogin(state),
    ...getDoctorDetails(state),
  }
}

const mapDispatchToProps = {
  ...actions,
  ...loginActions
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetailsComponent)
export const AddEditDoctorDetails = connect(mapStateToProps, mapDispatchToProps)(AddEditDoctorDetailsComponent)