import React, { Component } from 'react'
import {Actions} from 'react-native-router-flux'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    TouchableWithoutFeedback,
    DatePickerIOS
  } from 'react-native';

class ForgotPWDComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            username:'',
            password:'',
            DOB:new Date(),
            hint:'',

            confirmPassword:'',
            datepickerVisible:false,
            selectDate:new Date()
        }

        this.onReset = this.onReset.bind(this)
        this.setDate = this.setDate.bind(this)
        this.onDateSelected = this.onDateSelected.bind(this)
    }

    renderDatepicker(){
        if(this.state.datepickerVisible==true){
            
            return(
                Platform.select({
                 ios: <View>
                        <TouchableWithoutFeedback onPress={()=>{this.onDatePickerClosed()}}>
                            <View style={{alignItems:'flex-end',paddingTop:10}}>
                                <Text style={{fontSize:18,fontFamily: 'Cochin',color:'#3e4444'}}>Hide</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <DatePickerIOS
                        date={this.state.selectDate}
                        onDateChange={(date)=>this.setDate(date)}
                        mode='date'
                        locale='dd-mm-yyyy'
                        />
                    </View>,
                android: <View>
                        </View>
                })
        )
        }
        return null
    }
    successCallback(){
        Alert.alert(
                'Confirmation.\n',
                'Password Reset Successfully.',
                [
                  {text: 'Continue', onPress: () => {
                    Actions.pop()
                   // this.setModalVisible(true)
                      //this.props.handleListSelection()
                  }},
                //   {text: 'Discard', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
    }

    errorCallback(){
        Alert.alert(
            'Error\n',
            'Invalid User Name or Password.\n\n\r No space allowed.\n\r Password Should have:\r\rOne lower case lettr (a-z).'+
            '\r One Uppper case letter (A-Z).\r One numberic (0-9).\r One special character (!@#$%^&*).',
            [
              {text: 'Continue', onPress: () => {
               // Actions.pop()
               // this.setModalVisible(true)
                  //this.props.handleListSelection()
              }},
            //   {text: 'Discard', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
          )
    }

    onMismatch(title,msg){
        Alert.alert(
            title+'\n',
            msg+'\n\r Pls try again!',
            [
              {text: 'Continue', onPress: () => {
               // this.setModalVisible(true)
                  //this.props.handleListSelection()
              }},
            //   {text: 'Discard', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
          )
    }
    onReset(){
       //compare new password and confirm password
       if(this.state.username.length===0){
            this.onMismatch('Error','User Name should not be Empty')
            return;
        }else if(this.state.password.length===0){
            this.onMismatch('Error','Password should not be Empty')
            return;
        }else if(this.state.confirmPassword.length===0){
            this.onMismatch('Error','Confirm Password should not be Empty')
            return;
        }else if(this.state.password.localeCompare(this.state.confirmPassword) !== 0){
            this.onMismatch('Error','Given Password and Confirm Password are not matching.');
            return;
        }
        let user = {
            username:this.state.username,
            password:this.state.password,
            DOB:this.state.DOB,
            hint:this.state.hint,
        }
        let Callback = {
            onError:this.errorCallback,
            onSuccess:this.successCallback
        }
        this.props.resetPassword(user,Callback);
    }

    onDateSelected(){
        this.setState({datepickerVisible:true})
    }
    onDatePickerClosed(){
        this.setState({datepickerVisible:false})
    }
    setDate(date){
        this.setState({DOB:date})
        this.setState({selectDate:date})
    }
    showHideCreateButton(){
        if(!this.state.datepickerVisible){
            return <View style={{flexDirection:'row',justifyContent:'center',margin:20,borderColor: '#6495ED',borderWidth:1,borderRadius:20}}>
            <Button title="Reset" color="#6495ED" onPress={()=>this.onReset()}/>
        </View>
        }
        return null
    }
    render(){
        return(
            <View style={{flex: 1, flexDirection:'column',justifyContent:'center'}}>
                <View style={{margin:20}}>
                    <Text style ={styles.LoginLabel}> Reset Password</Text>
                </View>
                <View>
                    <TextInput style={styles.TextInputStyle} onChangeText={(text) => this.setState({username:text})} value = {this.state.username} placeholder="Enter User name">
                    </TextInput> 
                </View>
                <View>
                    <TextInput style={styles.TextInputStyle} value={this.state.password} onChangeText={(text) => this.setState({password:text})} secureTextEntry={true} placeholder="Enter Password" />
                </View>
                <View>
                    <TextInput style={styles.TextInputStyle} value={this.state.confirmPassword} onChangeText={(text) => this.setState({confirmPassword:text})} secureTextEntry={true} placeholder="Confirm Password" />
                </View>
                <View>
                    <TextInput style={styles.TextInputStyle} value={this.state.hint} onChangeText={(text) => this.setState({hint:text})} placeholder="Enter Password Hit text." />
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-start',margin:20}}>
                <TouchableWithoutFeedback onPress={(event)=>this.onDateSelected()}>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={styles.labelStyle}>Date of Birth:</Text> <Text>{this.state.DOB.toLocaleDateString()}</Text>
                    </View>
                </TouchableWithoutFeedback>
                </View>
                {
                    this.showHideCreateButton()
                }
                {
                    this.renderDatepicker()
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    LoginLabel :{
        fontSize:17,
        color:'#6495ED',
        fontFamily: 'Cochin',
        fontWeight:'bold',
    },
    TextInputStyle :{
        height:40,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft:20,
        marginRight:20,
        marginTop:5,
        borderRadius:5,
        fontFamily: 'Cochin',
        
    },
    labelStyle:{
        fontSize:15,
        fontFamily: 'Cochin',
        fontWeight:'bold',
        paddingRight:20
    },
});

export default ForgotPWDComponent;