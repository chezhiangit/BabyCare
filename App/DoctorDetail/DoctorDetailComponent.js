import React, { Component } from 'react'
import DoctorDetailsRowComponent from './doctorDetailsRow'
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
    TouchableOpacity,
    Image
  } from 'react-native';

  const floating_image = require('../images/Floating_Button.png');
  const addItem = {
        key:'',
        username:'',
        DrName:'',
        NOH:'',
        Mobile:'',
        Location:'',
        Street:'',
        remarks:''
    }

    // key:'1',
    // username:'',
    // DrName:'Sudeep Kumar',
    // NOH:'Nalam Clinic',
    // Mobile:'9585058087',
    // Location:'Chromepet',
    // Street:'EVR Colony',
    // remarks:'Child Specialist'

  class DoctorDetailsComponent extends Component {
      constructor(props){
          super(props)

          this.state = {
              operation:0, // 1 - Add, 2 - Edit, 3 - Delete
              selectedIndex:-1
          }
          this.onAddEditDelete = this.onAddEditDelete.bind(this);
      }
    onAddEditDelete(index,item,operation){
        this.setState({operation:operation,selectedIndex:index})
        this.props.addEditDeleteDoctorDetails(index,item,operation)
    }
    renderRow(){
            return <FlatList
            data={this.props.doctorDetails}
            keyExtractor={this._keyExtractor}
            renderItem={({item,index}) => <TouchableWithoutFeedback>
                                       
                                        <DoctorDetailsRowComponent doctorRec = {item} index={index} onAddEditDelete={this.onAddEditDelete}/>
                                    
                                    </TouchableWithoutFeedback>
                                    }
            />
    }
    // renderEdit(){

    // }
      render(){
          return(
            <View style={styles.container}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.titleTextStyle}>Doctor Details</Text>
                    </View>
                    {
                        this.renderRow()
                    }
                <TouchableOpacity activeOpacity={0.5} onPress={() =>this.onAddEditDelete(-1,addItem,1)} style={styles.TouchableOpacityStyle} >
                     <Image source={floating_image} style={styles.FloatingButtonStyle} />
                </TouchableOpacity>    
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
    titleTextStyle:{
        fontFamily: 'Cochin',
        color: '#3e4444',
        fontWeight: 'bold',
        fontSize: 20,
        padding:20,
    },
    TouchableOpacityStyle:{

        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
    
    FloatingButtonStyle: {
    
        resizeMode: 'contain',
        width: 50,
        height: 50,
      }
});
  export default DoctorDetailsComponent;