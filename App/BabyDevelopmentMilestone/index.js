import BabyDevMilestoneComponent from './BabyDevMilestoneComponent'
import * as actions from './actions';
import * as loginActions from '../Login/actions'
import {connect} from 'react-redux'
import {getNav, getLogin, getBabyDevMilestone} from '../Reducers'

const mapStateToProps = (state, props)=> {
  return {
    ...getNav(state),
    ...getLogin(state),
    ...getBabyDevMilestone(state),
  }
}

const mapDispatchToProps = {
  ...actions,
  ...loginActions
}

export default connect(mapStateToProps, mapDispatchToProps)(BabyDevMilestoneComponent)