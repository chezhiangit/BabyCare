import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    TouchableWithoutFeedback
  } from 'react-native';

  

class LoginComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            username:'',
            password:'',
            DOB:new Date(),
            hint:'',
            loginAttempt:0
        }

        this.onSignOn = this.onSignOn.bind(this)
        this.renderHint = this.renderHint.bind(this)
        this.onMismatch = this.onMismatch.bind(this)
        this.successCallback = this.successCallback.bind(this)
        this.errorCallback = this.errorCallback.bind(this)
    }
    successCallback(title,msg){
        Alert.alert(
                title,
                msg,
                [
                  {text: 'Continue', onPress: () => {
                   // this.setModalVisible(true)
                      //this.props.handleListSelection()
                      Actions.pop()
                  }},
                //   {text: 'Discard', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
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

    onSignOn(){
        if(this.state.username.length===0){
            this.onMismatch('Error','User Name should not be Empty')
            return;
        }else if(this.state.password.length===0){
            this.onMismatch('Error','Password should not be Empty')
            return;
        }
        let data={
            username:this.state.username,
            password:this.state.password,
            hint:this.state.hint
        }
        let Callback = {
            onError:this.errorCallback,
            onSuccess:this.successCallback
        }
        this.props.login(data,Callback);
    }

    renderHint(){

        if(this.state.loginAttempt >= 3){
            return 
            <View style={{flexDirection:'row',justifyContent:'flex-start',padding:20}}>
                <Text>Password Hint: {this.state.hint}</Text>
            </View>
        }

        return null;  
    }
    render(){
        return(
            <View style={{flex: 1, flexDirection:'column',justifyContent:'center'}}>
                <View style={{margin:20}}>
                    <Text style ={styles.LoginLabel}> User Login</Text>
                </View>
                <View>
                    <TextInput style={styles.TextInputStyle} value = {this.state.username} onChangeText={(text) => this.setState({username:text})} placeholder="Enter User name">
                    </TextInput> 
                </View>
                <View>
                    <TextInput style={styles.TextInputStyle} value={this.state.password} onChangeText={(text) => this.setState({password:text})} secureTextEntry={true} placeholder="Enter Password" />
                </View>
                <View style={{margin:20,borderColor: '#6495ED',borderWidth: 1,borderRadius:20}}>
                    <Button title="Sign On" color="#6495ED" accessibilityLabel="Sign On with credentials" onPress={this.onSignOn}/>
                </View>
                <TouchableWithoutFeedback onPress={(event)=>this.props.createNewUser()}>
                    <View style={{flexDirection:'row',justifyContent:'center',padding:10}}>
                        <Text style={{textDecorationLine:'underline',color:'blue',fontFamily: 'Cochin',}}>New User?</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={(event)=>this.props.forgotPassword()}>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={{textDecorationLine:'underline',color:'blue',fontFamily: 'Cochin',}}>Forgot Password?</Text>
                    </View>
                </TouchableWithoutFeedback>
                {
                    this.renderHint()
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    LoginLabel :{
        fontSize:17,
        color:'#6495ED',
        fontWeight:'bold',
        fontFamily: 'Cochin',
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
        
    }
});

export default LoginComponent;