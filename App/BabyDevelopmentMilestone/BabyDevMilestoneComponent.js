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
    TouchableHighlight
  } from 'react-native';

  import MilestoneModelComponent from './milstoneModel'

class BabyDevMilestoneComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            modalVisible: false,
            selectedItemIndex:0
          }
        this.setModalVisible = this.setModalVisible.bind(this)
        this.onListItemSelected = this.onListItemSelected.bind(this)
    }

    onListItemSelected(index){
        this.setModalVisible(true)
        this.setState({selectedItemIndex:index})
        console.log('The selected index : '+index)
        console.log('The selected state index : '+this.state.selectedItemIndex)
        // Alert.alert(
        //         'Alert',
        //         'List item selected.',
        //         [
        //           {text: 'Continue', onPress: () => {
        //            // this.setModalVisible(true)
        //               //this.props.handleListSelection()
        //           }},
        //           {text: 'Discard', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //         ],
        //         { cancelable: false }
        //       )

    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    
    _keyExtractor = (item,index) =>''+index;
    render(){
        const babyMileStone = this.props.babyMileStone
        return(
                <View style={styles.container}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.titleTextStyle}>Development milestones</Text>
                    </View>
                    <FlatList
                    data={babyMileStone.bdms}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item,index}) => <TouchableWithoutFeedback onPress={(event)=>this.onListItemSelected(index)}>
                                                <View>
                                                    <Text style={styles.item}>{item}</Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                            }
                    />
                <MilestoneModelComponent setModalVisible={this.setModalVisible} modalVisible={this.state.modalVisible} title={babyMileStone.bdms[this.state.selectedItemIndex]} mileStone={babyMileStone.bdmsDesc[this.state.selectedItemIndex]}/> 
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        borderColor: '#6495ED',
        borderWidth: 1,
        
       },
    item: {
        fontFamily: 'Cochin',
        backgroundColor:'#f0f0f0',
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        padding: 10,
        fontSize: 18,
        height: 44,
        borderWidth: 2,
        borderColor: '#F8F8FF',
        borderBottomWidth: 0,
        shadowColor: '#6495ED',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 2,
       },
    titleTextStyle:{
        fontFamily: 'Cochin',
        color: '#3e4444',
        fontWeight: 'bold',
        fontSize: 20,
        padding:20,
    },
});

export default BabyDevMilestoneComponent;