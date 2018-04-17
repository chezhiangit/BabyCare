import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList
  } from 'react-native';


  class RowComponent extends Component {
      constructor(props){
          super(props)
      }

      render(){
          return(
            <View style={styles.SectionListItemStyle}>
                <Text>Vaccin Name:{ this.props.item.name } </Text>
                <Text>Due On: { this.props.item.dueOn }</Text>
                <Text>Given On{ this.props.item.givenOn }</Text>
                <Text>Dosage:{ this.props.item.dosage }</Text>
            </View>
          )
      }
  }

  const styles = StyleSheet.create({
    SectionListItemStyle:{
        fontSize : 15,
        padding: 5,
        color: '#000',
        backgroundColor : '#F5F5F5',
        fontStyle:'italic',
        fontFamily: 'Cochin',
     
      }

  });

  export default RowComponent;