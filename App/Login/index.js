import LoginComponent from './LoginComponent'
import NewUserComponent from './newUserComponent'
import ForgotPWDComponent from './forgotPasswordComponent'
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
export const NewUserComp = connect(mapStateToProps, mapDispatchToProps)(NewUserComponent)
export const ForgotPwdComp = connect(mapStateToProps, mapDispatchToProps)(ForgotPWDComponent)