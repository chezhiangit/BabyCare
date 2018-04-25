import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    Alert
  } from 'react-native';
import RowComponent from './RowComponent'

  class VaccinationComponent extends Component {
      constructor(props){
          super(props)
          this.onListItemSelected = this.onListItemSelected.bind(this)
      }

      onListItemSelected(item,index,section){
            this.props.goToVaccination(index,section)
        // Alert.alert(
        //             'Alert',
        //             'List item selected: '+item.key+' '+index+' ' +section.secIndex+' '+this.props.vaccination[section.secIndex].data[index].name,
        //             [
        //               {text: 'Continue', onPress: () => {
        //                // this.setModalVisible(true)
        //                   //this.props.handleListSelection()
        //                   this.props.editVaccination(index,section)
        //               }},
        //               {text: 'Discard', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //             ],
        //             { cancelable: false }
        //           )
      }
      render(){
          return(
            <View style={StyleSheet.absoluteFill}>
                <View style={styles.titleViewStyle}>
                    <Text style={styles.titleTextStyle}>Vaccination Record</Text>
                </View>
                <SectionList

                    sections={this.props.vaccination}

                    renderSectionHeader={ ({section}) => {
                            return <Text style={styles.SectionHeaderStyle}> { section.title } </Text>
                        } 
                    }

                    renderItem={ ({item,index,section}) => <RowComponent item={item} index={index} section={section} onSelect={this.onListItemSelected}/>}

                    keyExtractor={ (item, index) => item.key }
                    
                    />
            </View>
          )
      }
  }


  const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     borderColor: '#3e4444',
    //     borderWidth: 1,
    //     marginTop: 40,
        
    // },
    titleViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
    },
    titleTextStyle:{
        fontFamily: 'Cochin',
        color: '#3e4444',
        fontWeight: 'bold',
        fontSize: 20,
        padding:20
    },
    SectionHeaderStyle:{

        backgroundColor : '#CDDC39',
        fontSize : 20,
        padding: 5,
        color: '#fff',
        fontFamily: 'Cochin',
      },
     
    //   SectionListItemStyle:{
     
    //     fontSize : 15,
    //     padding: 5,
    //     color: '#000',
    //     backgroundColor : '#F5F5F5',
    //     fontStyle:'italic',
    //     fontFamily: 'Cochin',
     
    //   }

});

  export default VaccinationComponent;