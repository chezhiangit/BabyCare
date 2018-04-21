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

  class BabyDetailsComponent extends Component {
      constructor(props){
          super(props)
      }

      render(){
          return(
            <View>
                <Text>Baby details component</Text>
            </View>
          )
      }
  }

  export default BabyDetailsComponent;