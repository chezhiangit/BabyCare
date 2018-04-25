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
    TouchableHighlight,
    ScrollView
  } from 'react-native';

  class HeightWeightComponent extends Component {

    constructor(props){
        super(props)
        this.state={
                gender:1,
            }
        this.onGenderSelected = this.onGenderSelected.bind(this)
    }
    onGenderSelected = ()=>{
        this.setState({
            gender:!this.state.gender,
        })
    }
    render(){
        if(this.state.gender==1){
            data=this.props.boys
        } else {
            data=this.props.girls
        }

        return(
                <View style={StyleSheet.absoluteFill}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.titleTextStyle}>Average height & weight of {this.state.gender==1?'BOYS':'GIRLS'} at different ages</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={()=>this.onGenderSelected()}>
                        <View>
                            <Text style={styles.toggleTextStyle}>Tap on here for {this.state.gender==0?'BOYS':'GIRLS'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <HeaderComponent />
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        
                        {
                            data.map((item) =>{
                                return <RowComponent key={item.key} chartData={item}/>
                            })
                        }
                        {/* <RowComponent />
                        <RowComponent /> */}
                    </ScrollView>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        //  paddingVertical: 20
      },
    cotainer:{
        flex:1,
        flexDirection:'column'
    },
    titleTextStyle:{
        fontFamily: 'Cochin',
        color: '#3e4444',
        fontWeight: 'bold',
        fontSize: 20,
        padding:10
    },
    toggleTextStyle:{
        fontFamily: 'Cochin',
        color: '#DC143C',
        fontWeight: 'bold',
        fontSize: 20,
        padding:10
    },

})

export default HeightWeightComponent;