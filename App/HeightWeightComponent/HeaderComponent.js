import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
  } from 'react-native';


class HeaderComponent extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
        <View style={styles.headerContainer}>
            <View style={styles.headerChild}>
                <Text style={styles.textStyle}>Age</Text>
            </View>
            <View style={styles.headerChild}>
                <Text style={styles.textStyle}>Weight (kg)</Text>
            </View>
            <View style={styles.headerChild}>
                <Text style={styles.textStyle}>Height (cm)</Text>
            </View>    
        </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer :{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        
    },
    headerChild:{
        borderColor:'#b7d7e8',
        backgroundColor:'#00BFFF',
        padding:5,
        width:'30%',
        alignItems:'center',
        borderRadius:50
    },
    textStyle :{
        fontStyle:'italic',
        fontFamily: 'Cochin',
        fontSize: 18,
    }
})

export default HeaderComponent;