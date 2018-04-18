import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableWithoutFeedback,
    Alert
  } from 'react-native';


  class RowComponent extends Component {
      constructor(props){
          super(props)
      }
    //   onListItemSelected(item,index,section){
    //     Alert.alert(
    //                 'Alert',
    //                 'List item selected: '+item.key+' '+index+' ' +section.secIndex+' '+this.props.vl[section.secIndex].data[index].name,
    //                 [
    //                   {text: 'Continue', onPress: () => {
    //                    // this.setModalVisible(true)
    //                       //this.props.handleListSelection()
    //                       this.props.editVaccination()
    //                   }},
    //                   {text: 'Discard', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //                 ],
    //                 { cancelable: false }
    //               )
    //   }
      render(){
          return(
            <TouchableWithoutFeedback onPress={(event)=>this.props.onSelect(this.props.item,this.props.index,this.props.section)}>
                <View style={styles.SectionListItemStyle}>
                    <View style={styles.vaccineViewStyle}>
                        <Text style={styles.vaccineTextStyle}>{this.props.item.name } </Text>
                    </View>
                    <View style={styles.duegivenViewStyle}>
                        <View style={styles.dueViewStyle}>
                            <Text style={styles.duegivenTextStyle}>Due On:</Text> <Text style={styles.duegivenTextStyle}> { this.props.item.dueOn.toString() }</Text>
                        </View>
                        <View style={styles.givenViewStyle}>
                            <Text style={styles.duegivenTextStyle}>Given On:</Text> <Text style={styles.duegivenTextStyle}> { this.props.item.givenOn.toString() }</Text>
                        </View>
                    </View>
                    <View style={{paddingTop:5,paddingBottom:5}}>
                        <Text>{ this.props.item.dosage } Dose</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
          )
      }
  }

  const styles = StyleSheet.create({
    SectionListItemStyle:{
        padding: 10,
        backgroundColor : '#F5F5F5',
        borderBottomWidth:1,
        borderColor:'#CDDC39'     
      },
    vaccineViewStyle:{
        flex:1,
        paddingTop:10,
        paddingBottom:10
    },
    vaccineTextStyle:{
        fontSize:22,
        fontFamily: 'Cochin',
    },

    duegivenViewStyle:{
        flex:1,
        flexDirection:'row',
    },
    dueViewStyle:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-start',
    },
    givenViewStyle:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-end',
    },
    duegivenTextStyle:{
        fontSize:15,
        fontFamily: 'Cochin',
    }


  });

  export default RowComponent;