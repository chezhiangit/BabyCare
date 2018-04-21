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

  class EditBabyDetailsComponent extends Component {
      constructor(props){
          super(props)
      }

      render(){
          return(
            <View>
                <Text>Show Baby details component</Text>
            </View>
          )
      }
  }

  export default EditBabyDetailsComponent;
