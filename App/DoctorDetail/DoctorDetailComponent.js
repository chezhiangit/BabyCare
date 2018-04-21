import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableWithoutFeedback,
    Alert,
    Modal,
    TouchableHighlight
  } from 'react-native';

  class DoctorDetailsComponent extends Component {
      constructor(props){
          super(props)
      }

      render(){
          return(
            <View>
                <Text>Doctor details component</Text>
            </View>
          )
      }
  }

  export default DoctorDetailsComponent;