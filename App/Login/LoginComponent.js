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
    }


    onSignOn(){
        this.props.loginSuccess();
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
                    <TextInput style={styles.TextInputStyle} value = {this.state.username} placeholder="Enter User name">
                    </TextInput> 
                </View>
                <View>
                    <TextInput style={styles.TextInputStyle} value={this.state.password} secureTextEntry={true} placeholder="Enter Password" />
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