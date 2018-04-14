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

  class HeightWeightComponent extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Text>Height Weight Component </Text>
        )
    }
}

export default HeightWeightComponent;