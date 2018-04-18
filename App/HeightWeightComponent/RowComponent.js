import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
  } from 'react-native';


class RowComponent extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
        <View style={styles.Container}>
            <View style={styles.Child}>
                <Text style={styles.textStyle}>{this.props.chartData.age}</Text>
            </View>
            <View style={styles.Child}>
                <Text style={styles.textStyle}>{this.props.chartData.weight}</Text>
            </View>
            <View style={styles.Child}>
                <Text style={styles.textStyle}>{this.props.chartData.height}</Text>
            </View>    
        </View>
        )
    }
}

const styles = StyleSheet.create({
    Container :{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10
        
        
    },
    Child:{
        borderColor:'#b7d7e8',
        borderWidth:1,
        backgroundColor:'#f0f0f0',
        padding:5,
        width:'30%',
        alignItems:'center',
        borderRadius:50,
        
    },
    textStyle :{
        fontFamily: 'Cochin',
        fontSize: 18,
    }

})

export default RowComponent;