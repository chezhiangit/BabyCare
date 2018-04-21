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

class HomeComponent extends Component {

    constructor(props){
        super(props);
        this.onListItemSelected = this.onListItemSelected.bind(this);
    }

    onListItemSelected(item){
        switch(item.id){
            
            case "DM":
                this.props.loadBabyMileStone();
                break;
            case "BCT":
                this.props.loadBabyCareTips();
                break;
            case "HWC":
                this.props.loadHeightWeight();
                break;
            case "DR":
                this.props.loadDoctorDetails();
                break;
            case "BR":
                this.props.loadBabyDetails();
                break;
            case "VR":
                this.props.loadVaccination();
                break;
            default:
                return;
        }

    }
    render(){
       this.props.validateLogin(this.props.login);
        return(
            <View style={styles.container}>
                <FlatList
                data={[
                    {key: 'Doctor Record',id:'DR'},
                    {key: 'Birth Record',id:'BR'},
                    {key: 'Vacination Record',id:'VR'},
                    {key: 'Development Milestone',id:'DM'},
                    {key: 'Baby Care Tips',id:'BCT'},
                    {key: 'Height/Weight Chart',id:'HWC'},
                ]}
                renderItem={({item}) => <TouchableWithoutFeedback onPress={(event)=>this.onListItemSelected(item)}>
                                            <View>
                                                <Text style={styles.item}>{item.key}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                        }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        borderColor: '#6495ED',
        borderWidth: 1,
        
       },
       item: {
        backgroundColor:'#6495ED',
        margin:20,
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
});

export default HomeComponent;