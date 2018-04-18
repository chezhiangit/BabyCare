import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableWithoutFeedback,
    Button,
    Modal,
    TouchableHighlight,
    SectionList
  } from 'react-native';

  class MilestoneModelComponent extends Component {
      constructor(props){
          super(props);
          this.onClose = this.onClose.bind(this);
      }
      onClose(){
        this.props.setModalVisible(!this.props.modalVisible)
      }
      render(){
        const ms = this.props.mileStone
          return(
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    this.props.setModalVisible(!this.props.modalVisible);
                }}>
                <View style={styles.container}>
                    <View>
                        <View style={styles.titleViewStyle}>
                            <Text style={styles.titleTextStyle}>Milestone for {this.props.title} baby</Text>
                        </View>
                        <SectionList

                            sections={[

                                { title: ms.CommonSkils.Title, data: ms.CommonSkils.Skills },

                                { title: ms.SkillsStillLearning.Title, data: ms.SkillsStillLearning.Skills },

                                { title: ms.RareSkills.Title, data: ms.RareSkills.Skills },

                            ]}

                            renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }

                            renderItem={ ({item}) => <Text style={styles.SectionListItemStyle}> { item } </Text> }

                            keyExtractor={ (item, index) => index }
                            
                            />

                        <Button title="Close" color="#6495ED" onPress={this.onClose}/> 
                    </View>
                </View>
            </Modal>

          );
      }
  }

  const styles = StyleSheet.create({
        container:{
            flex:1,
            borderColor: '#3e4444',
            borderWidth: 1,
            marginTop: 40,
            
        },
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
         
          SectionListItemStyle:{
         
            fontSize : 15,
            padding: 5,
            color: '#000',
            backgroundColor : '#F5F5F5',
            fontFamily: 'Cochin',
         
          }

  });

  export default MilestoneModelComponent;