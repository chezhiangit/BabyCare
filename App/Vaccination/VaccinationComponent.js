import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList
  } from 'react-native';
import RowComponent from './RowComponent'

  class VaccinationComponent extends Component {
      constructor(props){
          super(props)
      }


      render(){
          return(
            <View>
                <View style={styles.titleViewStyle}>
                    <Text style={styles.titleTextStyle}>Vaccination Record</Text>
                </View>
                <SectionList

                    sections={this.props.createVacinationList()}

                    renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }

                    renderItem={ ({item}) => <RowComponent item={item} />}

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
        fontStyle:'italic',
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
        fontStyle:'italic',
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