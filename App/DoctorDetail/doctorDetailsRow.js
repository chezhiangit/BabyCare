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
    TouchableHighlight,
  } from 'react-native';


  class DoctorDetailsRowComponent extends Component {
      constructor(props){
          super(props)
      }
      render(){
          return(
            <View  style={styles.item}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableWithoutFeedback onPress={(event)=>this.props.onAddEditDelete(this.props.index,this.props.doctorRec,3)}>
                        <View>
                            <Text style={styles.editTextStyle}>Delete</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={(event)=>this.props.onAddEditDelete(this.props.index,this.props.doctorRec,2)}>
                        <View>
                            <Text style={styles.editTextStyle}>Edit</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.doctorNameViewStyle}>
                    <Text style={styles.doctorNameTextStyle}>{this.props.doctorRec.DrName}</Text>
                </View>
                <View style={styles.secondaryViewStyle}>
                    <View style={styles.dobViewStyle}>
                        <Text style={styles.secondaryRowTitleStyle}>Hospital:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.doctorRec.NOH}</Text>
                    </View>
                </View>
                <View style={styles.secondaryViewStyle}>
                    <View style={styles.dobViewStyle}>
                        <Text style={styles.secondaryRowTitleStyle}>Mobile:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.doctorRec.mobile }</Text>
                    </View>
                </View>
                <View style={styles.bottomRowStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Location:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.doctorRec.location }</Text>
                </View>
                <View style={styles.bottomRowStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Street:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.doctorRec.street }</Text>
                </View>
                <View style={styles.bottomRowStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Remarks:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.doctorRec.remarks }</Text>
                </View>
            </View>
          )
      }
    }


    const styles = StyleSheet.create({
        doctorNameViewStyle:{
            flex:1,
            flexDirection:'row',
            justifyContent: 'center',  
            alignItems:'center'  
        },
        doctorNameTextStyle:{
            marginBottom:20,
            fontSize: 20,
            fontFamily: 'Cochin-Bold',
            
        },
        editTextStyle:{
            textDecorationLine:'underline',
            color:'blue'
        },
        item: {
            flex:1,
            flexDirection:'column',
            backgroundColor:'#f0f0f0',
            marginTop:10,
            marginLeft:20,
            marginRight:20,
            padding: 10,
            borderWidth: 2,
            borderRadius:20,
            borderColor: '#F8F8FF',
            borderBottomWidth: 0,
            shadowColor: '#6495ED',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.4,
            shadowRadius: 4,
            elevation: 2,
           },
        secondaryViewStyle:{
            flex:1,
            flexDirection:'row',
            paddingTop:5
        },
        dobViewStyle:{
            flex:1,
            flexDirection:'row',
            justifyContent: 'flex-start',
        },
        pobViewStyle:{
            flex:1,
            flexDirection:'row',
            justifyContent: 'flex-end',
        },
        secondaryRowTextStyle:{
            fontSize:15,
            fontFamily: 'Cochin',
        },
        secondaryRowTitleStyle:{
            fontSize:15,
            fontFamily: 'Cochin',
            fontWeight:'bold'
        },
        bottomRowStyle:{
            flex:1,
            flexDirection:'row',
            paddingTop:5
        },
        
    })

    export default DoctorDetailsRowComponent;