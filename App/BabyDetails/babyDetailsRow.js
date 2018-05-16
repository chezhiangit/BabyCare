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


  class BabyDetailsRowComponent extends Component {
      constructor(props){
          super(props)
        
        this.successCallback = this.successCallback.bind(this)
        this.errorCallback = this.errorCallback.bind(this)
      }

    successCallback(title,msg){
        Alert.alert(
                title,
                msg,
                [
                    {text: 'Continue', onPress: () => {
                        //Actions.pop()
                    }},
                ],
                { cancelable: false }
                )
    }
    errorCallback(title,msg){
        Alert.alert(
            title,
            msg,
            [
              {text: 'Continue', onPress: () => {
               
              }},
            ],
            { cancelable: false }
          )
    }
    render(){
        
            let Callback = {
                onSuccess : this.successCallback,
                onError : this.errorCallback
            }
          return(
            <View  style={styles.item}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableWithoutFeedback onPress={(event)=>this.props.onAddEditDelete(this.props.index,this.props.babyRec,3,Callback)}>
                        <View>
                            <Text style={styles.editTextStyle}>Delete</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={(event)=>this.props.onAddEditDelete(this.props.index,this.props.babyRec,2,Callback)}>
                        <View>
                            <Text style={styles.editTextStyle}>Edit</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.babyNameViewStyle}>
                    <Text style={styles.babyNameTextStyle}>{this.props.babyRec.babyName}</Text>
                </View>
                <View style={styles.secondaryViewStyle}>
                    <View style={styles.dobViewStyle}>
                        <Text style={styles.secondaryRowTitleStyle}>DOB:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.babyRec.DOB.toLocaleDateString()}</Text>
                    </View>
                    <View style={styles.pobViewStyle}>
                        <Text style={styles.secondaryRowTitleStyle}>Blood Group:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.babyRec.bloodGroup }</Text>

                    </View>
                </View>
                <View style={styles.secondaryViewStyle}>
                    <View style={styles.dobViewStyle}>
                        <Text style={styles.secondaryRowTitleStyle}>W on B:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.babyRec.birthWeight }</Text>
                    </View>
                    <View style={styles.pobViewStyle}>
                        <Text style={styles.secondaryRowTitleStyle}>L on B:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.babyRec.lengthAtBirth }</Text>
                    </View>
                </View>
                <View style={styles.bottomRowStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>POB:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.babyRec.placeOfBirth }</Text>
                </View>
                <View style={styles.bottomRowStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Identification:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.babyRec.identification }</Text>
                </View>
                <View style={styles.bottomRowStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Remarks:</Text> <Text style={styles.secondaryRowTextStyle}> { this.props.babyRec.remarks }</Text>
                </View>
            </View>
          )
      }
    }


    const styles = StyleSheet.create({
        babyNameViewStyle:{
            flex:1,
            flexDirection:'row',
            justifyContent: 'center',  
            alignItems:'center'  
        },
        babyNameTextStyle:{
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

    export default BabyDetailsRowComponent;