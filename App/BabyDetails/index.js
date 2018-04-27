import BabyDetailsComponent from './babyDetailsComponent'
import AddEditBabyDetailsComponent from './addEditBabyDetails'
import * as actions from './actions';
import * as loginActions from '../Login/actions'
import {connect} from 'react-redux'
import {getNav, getLogin, getBabyDetails} from '../Reducers'

const mapStateToProps = (state, props)=> {
  return {
    ...getNav(state),
    ...getLogin(state),
    ...getBabyDetails(state),
  }
}

const mapDispatchToProps = {
  ...actions,
  ...loginActions
}

export default connect(mapStateToProps, mapDispatchToProps)(BabyDetailsComponent)
export const AddEditBabyDetails = connect(mapStateToProps, mapDispatchToProps)(AddEditBabyDetailsComponent)