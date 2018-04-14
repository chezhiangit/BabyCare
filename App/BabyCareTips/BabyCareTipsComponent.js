import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableWithoutFeedback,
    Alert
  } from 'react-native';

class BabyCareTipsComponent extends Component {

    constructor(props){
        super(props);
    }
    // componentDidMount(){
    //     // perform any preparations for an upcoming update
    //     console.log('loading baby care tips')
    //     getBabyCareTipsData();
    // }
    onListItemSelected(){
        Alert.alert(
                'Alert',
                'List item selected.',
                [
                  {text: 'Continue', onPress: () => {
                      //this.props.handleListSelection()
                  }},
                  {text: 'Discard', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )

    }
    render(){
        console.log(this.props.babyCareTips)
        return(
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                        <Text style={styles.titleTextStyle}>Baby Care Tips</Text>
            </View>
            <FlatList
            data={this.props.babyCareTips}
            renderItem={({item}) => 
                                        <View style={styles.itemView}>
                                            <View style={styles.itemSnoView}>
                                                <Text style={{textAlign:'center',fontStyle:'italic'}}>{item.sno}</Text>
                                            </View>
                                            <View style={styles.itemDescView} >
                                                <Text style={{textAlign:'justify',fontStyle:'italic'}}>{item.desc}</Text>
                                            </View>
                                        </View>
                                    }
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
            flex: 1,
            borderColor: '#6495ED',
            borderWidth: 1,
       },
       itemSnoView: {
            padding:10,
            borderWidth: 2,
            borderColor: '#b7d7e8',
            backgroundColor:'#f0f0f0',
            borderRadius:75
       },
       itemDescView: {
            flex:1,
            padding:10,
            borderWidth: 2,
            borderColor:'#b7d7e8',
            backgroundColor:'#f0f0f0',
            borderRadius:50
       },
       itemView :{
            flex:1,
            marginTop:20,
            flexDirection:'row',
            alignItems: 'center',
       },
       titleTextStyle:{
            fontStyle:'italic',
            fontFamily: 'Cochin',
            color: '#3e4444',
            fontWeight: 'bold',
            fontSize: 20,
            padding:20,
        },
});


export default BabyCareTipsComponent;