import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
  } from 'react-native';

  

class LoginComponent extends Component {

    constructor(props){
        super(props);

        this.onSignOn = this.onSignOn.bind(this);
    }


    onSignOn(){
        // Alert.alert(
        //     'Sign On',
        //     'Successfully Signed on!.',
        //     [
        //       {text: 'Continue', onPress: () => {
        //           this.props.login
        //       }},
        //       {text: 'Logout', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //     //   {text: 'OK', onPress: () => console.log('OK Pressed')},
        //     ],
        //     { cancelable: false }
        //   )
        this.props.loginSuccess();
        
    }

    render(){
        return(
            <View style={{flex: 1, flexDirection:'column',justifyContent:'center'}}>
                <View style={{margin:20}}>
                    <Text style ={styles.LoginLabel}> User Login</Text>
                </View>
                <View>
                    <TextInput style={styles.TextInputStyle} placeholder="Enter User name">
                    </TextInput> 
                </View>
                <View>
                    <TextInput style={styles.TextInputStyle} placeholder="Enter Password">
                    </TextInput> 
                </View>
                <View style={{margin:20,borderColor: '#6495ED',borderWidth: 1,borderRadius:20}}>
                    <Button title="Sign On" color="#6495ED" accessibilityLabel="Sign On with credentials" onPress={this.onSignOn}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    LoginLabel :{
        fontSize:17,
        color:'#6495ED',
    },
    TextInputStyle :{
        height:40,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft:20,
        marginRight:20,
        marginTop:5,
        borderRadius:5
    }
});

export default LoginComponent;