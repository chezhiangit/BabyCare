import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { Actions, Router, Scene } from 'react-native-router-flux'
import configureStore from './Store/configureStore'
import LoginComponent from '../App/Login';
import HomeComponent from '../App/Home';
import BabyCareTipsComponent from '../App/BabyCareTips'
import BabyDevMilestoneComponent from '../App/BabyDevelopmentMilestone'
import HeightWeightComponent from '../App/HeightWeightComponent'
import VaccinationComponent from '../App/Vaccination'
import {EditVaccineComp} from '../App/Vaccination'
import BabyDetailsComponet from '../App/BabyDetails'
import {AddEditBabyDetails} from '../App/BabyDetails'
import DoctorDetailsComponet from '../App/DoctorDetail'
import {AddEditDoctorDetails} from '../App/DoctorDetail'
import {NewUserComp} from '../App/Login'
import {ForgotPwdComp} from '../App/Login'

const ConnectedRouter = connect()(Router)
const store = configureStore()

const Scenes = Actions.create(
    <Scene key='root'>
      
      <Scene key='login' component = {LoginComponent} title='Sign On'/>
      {/* <Scene key='home' renderBackButton={()=>(null)} renderLeftButton ={()=>(null)} component = {HomeComponent}/> */}

      <Scene key='home' component = {HomeComponent}/>
      <Scene key='bcaretips' component = {BabyCareTipsComponent} />
      <Scene key='bdms' component ={BabyDevMilestoneComponent}/>
      <Scene key='heightWeight' component = {HeightWeightComponent} />
      <Scene key='vaccine' component = {VaccinationComponent} />
      <Scene key='editvaccine' component = {EditVaccineComp} />
      <Scene key='babydetails' component = {BabyDetailsComponet} />
      <Scene key='addeditBabyDetails' component = {AddEditBabyDetails} />
      <Scene key='doctordetails' component = {DoctorDetailsComponet} />
      <Scene key='addeditDoctorDetails' component = {AddEditDoctorDetails} />
      <Scene key='newuser' component = {NewUserComp} />
      <Scene key='forgotpwd' component = {ForgotPwdComp} />


    </Scene>
  )

class RootComponent extends Component {
    render() {
        return (
            <Provider store={store}>
              <ConnectedRouter scenes={Scenes}/>
            </Provider>
          )
    }
}

export default RootComponent;