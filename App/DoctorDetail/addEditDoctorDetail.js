import React, { Component } from 'react'
import {Actions} from 'react-native-router-flux'

import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    DatePickerIOS,
    TouchableWithoutFeedback,
    Alert
  } from 'react-native';

  class AddEditDoctorDetailsComponent extends Component {
      constructor(props){
          super(props)
          this.state = {
            title:this.props.operation===1?'Add Doctor Details':'Edit Doctor Details',

            username:this.props.username,
            key:this.props.doctorRec.key,
            DrName:this.props.doctorRec.DrName,
            NOH:this.props.doctorRec.NOH,
            mobile:this.props.doctorRec.mobile,
            location:this.props.doctorRec.location,
            street:this.props.doctorRec.street,
            remarks:this.props.doctorRec.remarks

          }

        this.showButton = this.showButton.bind(this)
        this.onSave = this.onSave.bind(this)
        this.successCallback = this.successCallback.bind(this)
        this.errorCallback = this.errorCallback.bind(this)
      }

    successCallback(title,msg){
        Alert.alert(
                title,
                msg,
                [
                  {text: 'Continue', onPress: () => {
                      Actions.pop()
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
    showButton(){
            return ( <View style={{marginTop:10,borderColor: '#6495ED',borderWidth: 0.5,borderRadius:10,width:'30%',marginLeft:'35%'}}>
                        <Button title="Save" color="#6495ED" onPress={this.onSave}/>
                    </View>
            )
    }
    onSave(){
        if(this.state.DrName <= 0) return;
        let d = new Date();
        let data={
                username:this.props.username,
                key:this.state.key===''?''+d.getUTCDate()+d.getTime():this.state.key,
                DrName:this.state.DrName,
                NOH:this.state.NOH,
                mobile:this.state.mobile,
                location:this.state.location,
                street:this.state.street,
                remarks:this.state.remarks
            }
        let Callback = {
            onError:this.errorCallback,
            onSuccess:this.successCallback
        }
      this.props.saveDoctorDetails(this.props.index,data,this.props.operation,Callback)
    //   Actions.pop()
    }
   
      render(){ 
          return(
            <View style={{flex:1,justifyContent: 'center',}}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={styles.titleTextStyle}>{this.state.title}</Text>
                </View>
             <View  style={styles.item}>
                <View style={styles.doctorNameViewStyle}>
                    <TextInput style={styles.doctorNameTextStyle} onChangeText={(text) => this.setState({DrName:text})} value={this.state.DrName} placeholder="Enter Doctor Name" />
                </View>
                <View style={styles.secondaryViewStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Name of Hospital:</Text> 
                    <TextInput style={styles.secondaryRowTextStyle} onChangeText={(text) => this.setState({NOH:text})} value={this.state.NOH} placeholder="Enter Name of the clinic/Hospital"/>
                </View>
                <View style={styles.secondaryViewStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Mobile Number:</Text>
                    <TextInput style={styles.secondaryRowTextStyle} onChangeText={(text) => this.setState({mobile:text})} value={this.state.mobile} placeholder="Enter Mobile number with country code"/>
                </View>
                <View style={styles.secondaryViewStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Location:</Text> 
                    <TextInput style={styles.secondaryRowTextStyle} onChangeText={(text) => this.setState({location:text})} value= { this.state.location } placeholder="Enter location of the hospital/doctor"/>
                </View>
                <View style={styles.secondaryViewStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Street:</Text> 
                    <TextInput style={styles.secondaryRowTextStyle} onChangeText={(text) => this.setState({street:text})} value= { this.state.street } placeholder="Enter street name of the hospital"/>
                </View>
                <View style={styles.secondaryViewStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Remarks:</Text> 
                    <TextInput style={styles.secondaryRowTextStyle} multiline={true} numberOfLines={3} onChangeText={(text) => this.setState({remarks:text})} value= { this.state.remarks } placeholder="Enter important/critical medicine/food to remember"/>
                </View>
            </View>
                {
                    this.showButton()
                }
            </View>
          )
      }
  }

  const styles = StyleSheet.create({
    titleTextStyle:{
        fontFamily: 'Cochin',
        color: '#3e4444',
        fontWeight: 'bold',
        fontSize: 20,
        padding:20,
    },
    doctorNameViewStyle:{
        flexDirection:'row',
        justifyContent: 'center',  
        alignItems:'center'  
    },
    doctorNameTextStyle:{
        marginBottom:20,
        fontSize: 20,
        fontFamily: 'Cochin-Bold',
        borderBottomWidth:0.5,
        flex:1,
        
    },
    
    item: {
        justifyContent: 'center',
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
        flexDirection:'row',
        paddingTop:20,
        alignItems:'center'
    },
    
    secondaryRowTextStyle:{
        flex:1,
        fontSize:15,
        fontFamily: 'Cochin',
        borderBottomWidth:0.5
    },
    secondaryRowTitleStyle:{
        fontSize:15,
        fontFamily: 'Cochin',
        fontWeight:'bold',
        paddingRight:20
    },
    
})

  export default AddEditDoctorDetailsComponent;
