import LoginComponent from './LoginComponent'
import * as actions from './actions'
import {connect} from 'react-redux'
import {getNav, getLogin} from '../Reducers'

const mapStateToProps = (state, props)=> {
  return {
    ...getNav(state),
    ...getLogin(state),
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)