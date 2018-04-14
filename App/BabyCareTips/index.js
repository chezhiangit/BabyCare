import BabyCareTipsComponent from './BabyCareTipsComponent'
import * as actions from './actions';
import * as loginActions from '../Login/actions'
import {connect} from 'react-redux'
import {getNav, getLogin, getBabyCareTips} from '../Reducers'




const mapStateToProps = (state, props)=> {
  return {
    ...getNav(state),
    ...getLogin(state),
    ...getBabyCareTips(state)
    

  }
}

const mapDispatchToProps = {
  ...actions,
  ...loginActions
}

export default connect(mapStateToProps, mapDispatchToProps)(BabyCareTipsComponent)