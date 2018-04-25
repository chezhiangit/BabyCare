import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    DatePickerIOS,
    TouchableWithoutFeedback,
    TextInput,
    Button,
    ScrollView
  } from 'react-native';

  class EditVaccineComponent extends Component{
      constructor(props){
          super(props)
          const data = this.props.vaccination[this.props.section.secIndex].data[this.props.index];
          this.state = {
              name:data.name,
              dosage:data.dosage,
              dueDate:data.dueOn,
              givenDate:data.givenOn,
              datepickerVisible:false,
              selecteDate:new Date(),
              comments:'',
              onDateChange:function(){}

          }

          this.onSetDueDate = this.onSetDueDate.bind(this)
          this.onSetGivenDate = this.onSetGivenDate.bind(this)
          this.renderDatepicker = this.renderDatepicker.bind(this)
          this.setDueDate = this.setDueDate.bind(this)
          this.setGivenDate = this.setGivenDate.bind(this)
          this.onDatePickerClosed = this.onDatePickerClosed.bind(this)
          this.onDone = this.onDone.bind(this)
          this.showHideButton = this.showHideButton.bind(this)
      }
    renderDatepicker(){
        if(this.state.datepickerVisible==true){
            
            return(
                Platform.select({
                 ios: <View>
                        <TouchableWithoutFeedback onPress={()=>{this.onDatePickerClosed()}}>
                            <View style={{alignItems:'flex-end'}}>
                                <Text style={{fontSize:18,fontFamily: 'Cochin',color:'#3e4444'}}>Done</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <DatePickerIOS
                        date={this.state.selecteDate}
                        onDateChange={(date)=>this.state.onDateChange(date)}
                        mode='date'
                        locale='dd-mm-yyyy'
                        />
                    </View>,
                android: <View>
                        </View>
                })
        )
        }
        return null
    }

    onDatePickerClosed(){
        this.setState({datepickerVisible:false})
        let data = {
            //vaccination:[...this.props.vaccination],
            index:this.props.index,
            sectionIdex:this.props.section.secIndex,
            newDueDate:this.state.dueDate,
            newGivenDate:this.state.givenDate
        }
        this.props.updateVaccinationDates(data)
    }
    setDueDate(newDate){
        this.setState({
            dueDate:newDate.toLocaleDateString(),
            // datepickerVisible:false,
            selecteDate:newDate
        })
    }
    setGivenDate(newDate){
        this.setState({
            givenDate:newDate.toLocaleDateString(),
            // datepickerVisible:false,
            selecteDate:newDate
        })
    }
    onSetDueDate(){
        console.log('onSetDueDate')
        let currentDate = new Date()
        if(this.state.dueDate !=='Set due date'){
            currentDate = new Date(this.state.dueDate)
        }
        this.setState({selecteDate:currentDate,onDateChange:this.setDueDate,datepickerVisible:true})
    }
    onSetGivenDate(){
        console.log('onSetGivenDate')
        let currentDate = new Date()
        if(this.state.givenDate !=='Set given date'){
            currentDate = new Date(this.state.givenDate)
        }
        this.setState({selecteDate:currentDate,onDateChange:this.setGivenDate,datepickerVisible:true})
    }
    onDone(){

    }
    showHideButton(){
        if(!this.state.datepickerVisible){
            return ( <View style={{marginTop:10,borderColor: '#6495ED',borderWidth: 1,borderRadius:10,width:'30%',marginLeft:'35%'}}>
                        <Button title="Done" color="#6495ED" onPress={this.onDone}/>
                    </View>
            )
        }
        return null;
        
    }
    render(){
          
          return(
              
        <View style={{flex:1}}>
        {/* <ScrollView style={{flex:1,flexDirection:'column'}}> */}
            <View style={styles.titleViewStyle}>
                    <Text style={styles.titleTextStyle}>{this.state.name}</Text>
            </View>
            <View style={styles.duegivenViewStyle}>
                <TouchableWithoutFeedback onPress={()=>this.onSetDueDate()}>
                    <View style={styles.dueViewStyle}>
                        <Text style={styles.duegivenTextStyle}>Due On:</Text> <Text style={styles.duegivenTextStyle}> { this.state.dueDate.toString() }</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>this.onSetGivenDate()}>
                    <View style={styles.givenViewStyle}>
                        <Text style={styles.duegivenTextStyle}>Given On:</Text> <Text style={styles.duegivenTextStyle}> { this.state.givenDate.toString() }</Text>
                    </View>
                </TouchableWithoutFeedback>  
                <View style={styles.givenViewStyle}>
                        <Text style={styles.duegivenTextStyle}>Dosage: { this.state.dosage } Dose</Text>
                </View>
                <Text style={{marginTop:20,marginLeft:20,fontSize:18,fontFamily: 'Cochin',}}>Comments:(max 300 letters)</Text>
                <View style={styles.commentsViewStyle}>
                        <TextInput maxLength={300} multiline={true} numberOfLines={10} placeholder='Enter short comment.' value={this.state.comments} ></TextInput>
                </View>
                {
                    this.showHideButton()
                }
            </View>
                
                {
                    this.renderDatepicker()
                }
         {/* </ScrollView> */}
        </View>
       
        )
      }
  }

  const styles = StyleSheet.create({
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
    duegivenViewStyle:{
        flex:1,
        flexDirection:'column',
    },
    dueViewStyle:{
        paddingLeft:20,
        paddingTop:10,
        flexDirection:'row',
        justifyContent: 'flex-start',
    },
    givenViewStyle:{
        paddingLeft:20,
        paddingTop:10,
        flexDirection:'row',
        justifyContent: 'flex-start',
    },
    duegivenTextStyle:{
        fontSize:18,
        fontFamily: 'Cochin',
    },
    commentsViewStyle:{
        marginRight:20,
        marginLeft:20,
        borderWidth:1,
        backgroundColor : '#F5F5F5',
        borderColor:'#CDDC39',
        height:'40%'
    }
  })
export default EditVaccineComponent;