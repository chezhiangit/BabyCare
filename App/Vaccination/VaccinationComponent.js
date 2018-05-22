import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    Alert,
    TouchableWithoutFeedback
  } from 'react-native';
import RowComponent from './RowComponent'

let i = 0;

  class VaccinationComponent extends Component {
      constructor(props){
          super(props)
          this.state = {
              babyIndex:0,
              babyCount:this.props.babylist.length,
          }
          this.onListItemSelected = this.onListItemSelected.bind(this)
          this.onPrevious = this.onPrevious.bind(this)
          this.onNext = this.onNext.bind(this)
      }
      componentDidMount(){
          console.log('Selected baby Id : - ',this.props.babylist[i].babyId)
          this.props.getVaccinationList(this.props.username,this.props.babylist[i].babyId)
      }

      onListItemSelected(item,index,section){
            this.props.goToVaccination(index,section)
      }
      onPrevious(){
        console.log('Selected baby onPrevious')
          if (i>0) {
        //   this.setState({
        //     babyIndex:this.state.babyIndex-1
        //   })
        i = i-1
          console.log('Selected baby onPrevious Id : - ',this.props.babylist[i].babyId)
          this.props.getVaccinationList(this.props.username,this.props.babylist[i].babyId)
        }
      }
      onNext(){
        console.log('Selected baby onNext')
          if(i<(this.state.babyCount-1)){
        //   this.setState({
        //       babyIndex:this.state.babyIndex+1
        //   })
        i = i+1
          console.log('Selected baby onNext Id : - ',this.props.babylist[i].babyId)
          this.props.getVaccinationList(this.props.username,this.props.babylist[i].babyId)
        }
      }
      render(){
          return(
              //absoluteFill is to make the list scroll till bottom of the list
            <View style={StyleSheet.absoluteFill}> 
                <View style={styles.titleViewStyle}>
                    <TouchableWithoutFeedback onPress={()=>{this.onPrevious()}}>
                        <View style={styles.TriangleShapeLeft}></View>
                    </TouchableWithoutFeedback>
                        <View style={{marginTop:20,marginBottom:20,width:'70%',alignItems:'center',justifyContent:'center',}}>
                                <Text style={styles.titleTextStyle}>Vaccination Record for {this.props.babylist[i].babyName}</Text>
                        </View>
                    <TouchableWithoutFeedback onPress={()=>{this.onNext()}}>
                        <View style={styles.TriangleShapeRight}></View>
                    </TouchableWithoutFeedback>
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
    },
    SectionHeaderStyle:{

        backgroundColor : '#CDDC39',
        fontSize : 20,
        padding: 5,
        color: '#fff',
        fontFamily: 'Cochin',
      },

    TriangleShapeRight: {
        justifyContent:'flex-end',
        marginTop:20,
        marginBottom:20,
        width: 0,
        height: 0,
        borderLeftWidth: 40,
        borderTopWidth: 20,
        borderBottomWidth: 20,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: '#00BCD4',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        // shadowColor: '#00BCD4',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
      },
      TriangleShapeLeft: {
        justifyContent:'flex-start',
        marginTop:20,
        marginBottom:20,
        width: 0,
        height: 0,
        borderRightWidth: 40,
        borderTopWidth: 20,
        borderBottomWidth: 20,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderRightColor: '#00BCD4',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
      }
     
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