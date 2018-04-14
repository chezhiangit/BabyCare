import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import RowComponent from './RowComponent'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableWithoutFeedback,
    Alert,
    Modal,
    TouchableHighlight
  } from 'react-native';

  class HeightWeightComponent extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.titleTextStyle}>Average height & weight of BOYS at different ages</Text>
                </View>
                <HeaderComponent />
                {
                    this.props.boys.map((item) =>{
                        return <RowComponent key={item.key} chartData={item}/>
                    })
                }
                {/* <RowComponent />
                <RowComponent /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cotainer:{
        flex:1,
        flexDirection:'column'
    },
    titleTextStyle:{
        fontStyle:'italic',
        fontFamily: 'Cochin',
        color: '#3e4444',
        fontWeight: 'bold',
        fontSize: 20,
        padding:20
    },

})

export default HeightWeightComponent;