import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { Actions, Router, Scene } from 'react-native-router-flux'
import configureStore from './Store/configureStore'
import LoginComponent from '../App/Login';
import HomeComponent from '../App/Home';
import BabyCareTipsComponent from '../App/BabyCareTips'
import BabyDevMilestoneComponent from '../App/BabyDevelopmentMilestone'
import HeightWeightComponent from '../App/HeightWeightComponent'

const ConnectedRouter = connect()(Router)
const store = configureStore()

const Scenes = Actions.create(
    <Scene key='root'>
      <Scene key='login' component = {LoginComponent} title='Sign On'/>
      <Scene key='home' component = {HomeComponent}/>
      <Scene key='bcaretips' component = {BabyCareTipsComponent} />
      <Scene key='bdms' component ={BabyDevMilestoneComponent}/>
      <Scene key='heightWeight' component = {HeightWeightComponent} />
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