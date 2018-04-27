import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    DatePickerIOS,
    TouchableWithoutFeedback
  } from 'react-native';

  class AddEditBabyDetailsComponent extends Component {
      constructor(props){
          super(props)
          this.state = {
            title:this.props.operation===1?'Add Baby Details':'Edit Baby Details',
            datepickerVisible:false,
            selecteDate:this.props.babyRec.DOB,
            
            username:'',
            key:this.props.babyRec.key,
            babyName:this.props.babyRec.babyName,
            DOB:this.props.babyRec.DOB,
            placeOfBirth:this.props.babyRec.placeOfBirth,
            birthWeight:this.props.babyRec.birthWeight,
            lengthAtBirth:this.props.babyRec.lengthAtBirth,
            bloodGroup:this.props.babyRec.bloodGroup,
            identification:this.props.babyRec.identification,
            remarks:this.props.babyRec.remarks
              
          }
          this.onSetDOBDate = this.onSetDOBDate.bind(this)
          this.onDatePickerClosed = this.onDatePickerClosed.bind(this)
          this.setDOBDate = this.setDOBDate.bind(this)
          this.showHideButton = this.showHideButton.bind(this)
          this.onSave = this.onSave.bind(this)
      }
      renderDatepicker(){
        if(this.state.datepickerVisible==true){
            
            return(
                Platform.select({
                 ios: <View>
                        <TouchableWithoutFeedback onPress={()=>{this.onDatePickerClosed()}}>
                            <View style={{alignItems:'flex-end',paddingTop:10}}>
                                <Text style={{fontSize:18,fontFamily: 'Cochin',color:'#3e4444'}}>Done</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <DatePickerIOS
                        date={this.state.selecteDate}
                        onDateChange={(date)=>this.setDOBDate(date)}
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
        this.setState({datepickerVisible:false,DOB:this.state.selecteDate})
    }
    setDOBDate(newDate){
        this.setState({
            DOB:newDate,
            selecteDate:newDate
        })
    }
    showHideButton(){
        if(!this.state.datepickerVisible){
            return ( <View style={{marginTop:10,borderColor: '#6495ED',borderWidth: 0.5,borderRadius:10,width:'30%',marginLeft:'35%'}}>
                        <Button title="Save" color="#6495ED" onPress={this.onSave}/>
                    </View>
            )
        }
        return null;
        
    }
    onSave(){
      //  console.log('baby details to be saved : ',this.state.babyRec)
      if(this.state.babyName.length <= 0) return;
      let data={
            username:'',
            key:this.state.babyName,
            babyName:this.state.babyName,
            DOB:this.state.DOB,
            placeOfBirth:this.state.placeOfBirth,
            birthWeight:this.state.birthWeight,
            lengthAtBirth:this.state.lengthAtBirth,
            bloodGroup:this.state.bloodGroup,
            identification:this.state.identification,
            remarks:this.state.remarks
        }
      this.props.saveBabyDetails(this.props.index,data,this.props.operation)
    }
    onSetDOBDate(){
        this.setState({datepickerVisible:true})
    }
      render(){ 
          return(
            <View style={{flex:1,justifyContent: 'center',}}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={styles.titleTextStyle}>{this.state.title}</Text>
                </View>
             <View  style={styles.item}>
                <View style={styles.babyNameViewStyle}>
                    <TextInput style={styles.babyNameTextStyle} onChangeText={(text) => this.setState({babyName:text})} value={this.state.babyName} placeholder="Enter Baby Name" />
                </View>
                    <TouchableWithoutFeedback onPress={()=>this.onSetDOBDate()}>
                        <View style={styles.secondaryViewStyle}>
                            <Text style={styles.secondaryRowTitleStyle}>DOB:</Text> 
                            <Text style={styles.secondaryRowTextStyle}> { this.state.DOB.toLocaleDateString() }</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.secondaryViewStyle}>
                        <Text style={styles.secondaryRowTitleStyle}>Blood Group:</Text>
                        <TextInput style={styles.secondaryRowTextStyle} onChangeText={(text) => this.setState({bloodGroup:text})} value={this.state.bloodGroup} placeholder="Enter Blood group"/>
                    </View>
                    <View style={styles.secondaryViewStyle}>
                        <Text style={styles.secondaryRowTitleStyle}>Weight on Birth:</Text> 
                        <TextInput style={styles.secondaryRowTextStyle} onChangeText={(text) => this.setState({birthWeight:text})} value= { this.state.birthWeight } placeholder="Enter Weight of baby on Birth"/>
                    </View>
                    <View style={styles.secondaryViewStyle}>
                        <Text style={styles.secondaryRowTitleStyle}>Length on Birth:</Text> 
                        <TextInput style={styles.secondaryRowTextStyle} onChangeText={(text) => this.setState({lengthAtBirth:text})} value= { this.state.lengthAtBirth } placeholder="Enter Length of baby on Birth"/>
                    </View>
                <View style={styles.secondaryViewStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>POB:</Text> 
                    <TextInput style={styles.secondaryRowTextStyle} onChangeText={(text) => this.setState({placeOfBirth:text})} value= { this.state.placeOfBirth } placeholder="Enter baby bith plac."/>
                </View>
                <View style={styles.secondaryViewStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Identification:</Text> 
                    <TextInput style={styles.secondaryRowTextStyle} multiline={true} numberOfLines={3} onChangeText={(text) => this.setState({identification:text})} value= { this.state.identification } placeholder="Enter baby's identification mark"/>
                </View>
                <View style={styles.secondaryViewStyle}>
                    <Text style={styles.secondaryRowTitleStyle}>Remarks:</Text> 
                    <TextInput style={styles.secondaryRowTextStyle} multiline={true} numberOfLines={3} onChangeText={(text) => this.setState({remarks:text})} value= { this.state.remarks } placeholder="Enter important/critical medicine/food to remember"/>
                </View>
            </View>
                {
                    this.showHideButton()
                }
                {
                    this.renderDatepicker()
                }
            </View>
          )
      }
  }

  const styles = StyleSheet.create({
    titleTextStyle:{
        fontFamily: 'Cochin',
        color: '#3e4444',
        fontWeight: 'bold',
        fontSize: 20,
        padding:20,
    },
    babyNameViewStyle:{
        flexDirection:'row',
        justifyContent: 'center',  
        alignItems:'center'  
    },
    babyNameTextStyle:{
        marginBottom:20,
        fontSize: 20,
        fontFamily: 'Cochin-Bold',
        borderBottomWidth:0.5,
        flex:1,
        
    },
    
    item: {
        justifyContent: 'center',
        flexDirection:'column',
        backgroundColor:'#f0f0f0',
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        padding: 10,
        borderWidth: 2,
        borderRadius:20,
        borderColor: '#F8F8FF',
        borderBottomWidth: 0,
        shadowColor: '#6495ED',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 2,
       },
    secondaryViewStyle:{
        flexDirection:'row',
        paddingTop:20,
        alignItems:'center'
    },
    
    secondaryRowTextStyle:{
        flex:1,
        fontSize:15,
        fontFamily: 'Cochin',
        borderBottomWidth:0.5
    },
    secondaryRowTitleStyle:{
        fontSize:15,
        fontFamily: 'Cochin',
        fontWeight:'bold',
        paddingRight:20
    },
    
})

  export default AddEditBabyDetailsComponent;
