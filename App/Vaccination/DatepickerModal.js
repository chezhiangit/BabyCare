import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    DatePickerIOS,
    TouchableWithoutFeedback,
    Modal,
    Button
  } from 'react-native';


  class DatePickerModel extends Component {
      constructor(props){
          super(props)
      }

      render(){
          return(
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                >
                
                    <DatePickerIOS
                    date={this.props.selecteDate}
                    onDateChange={(date)=>this.props.onDateChange(date)}
                    />
                
                
            </Modal>
          )
      }
  }

  const styles = StyleSheet.create({
    datecontainer: {
        flex: 1,
        justifyContent: 'center'
      },
  })

  export default DatePickerModel;