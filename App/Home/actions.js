import {Actions} from 'react-native-router-flux';
import * as BabyCareModel from '../Data/responseData';

export function loadBabyMileStone() {
    return (dispatch) =>{
        let data = BabyCareModel.getBabyMileStoneData();
        Actions.bdms({title:'Dev Milestone'});
        dispatch({type:'LOAD_BABYMSTONE',data})
    }
}

export function loadBabyCareTips() {
    return (dispatch) =>{
        let data = BabyCareModel.getBabyCareTipsData();
        Actions.bcaretips({title:'Baby Care Tips'});
        dispatch({type:'LOAD_BABYCARETIPS',data})
    }
}

export function loadHeightWeight() {
    return (dispatch) =>{
        let data = BabyCareModel.getHeightWeightData();
        Actions.heightWeight({title:'Height-Weight'});
        dispatch({type:'LOAD_HEIGHTWEIGHT',data})
    }
}

// export function loadVaccination(){
//     return (dispatch) =>{
//         let data = BabyCareModel.getVaccinationData();
//         Actions.vaccine({title:'Vaccination'})
//         dispatch({type:'LOAD_VACCINATION',data})
//     }
// }

export function loadVaccination() {
    console.log('start to create vaccination list')
    return (dispatch) =>{
        let data = BabyCareModel.getVaccinationList()
        // console.log('Data from vaccination : ' +data[0].data[0].name)
        // console.log('Data from vaccination : ' +data[0].data[0].dueOn)
        // console.log('Data from vaccination : ' +data[0].data[0].givenOn)
        Actions.vaccine({title:'Vaccination'})
        dispatch({type:'LOAD_VACCINATION',data})
    }
}

export function loadBabyDetails() {
    console.log('dispatch action to load baby details')

    return (dispatch) =>{
        let data = [{
            key:'1',
            babyName:'Mane Shankar',
            DOB:new Date(),
            placeOfBirth:'Chennai',
            birthWeight:'2.7kg',
            lengthAtBirth:'40cm',
            bloodGroup:'B+ve',
            identification:'Mole on left thye',
            remarks:'Having dust alergy'
        },
        {
            key:'2',
            babyName:'Kaaviyan',
            DOB:new Date(),
            placeOfBirth:'Bangalore',
            birthWeight:'2.7kg',
            lengthAtBirth:'40cm',
            bloodGroup:'B+ve',
            identification:'Mole on left thye',
            remarks:'pre machured baby'
        },
        {
            key:'3',
            babyName:'Mane Shankar',
            DOB:new Date(),
            placeOfBirth:'Chennai',
            birthWeight:'2.7kg',
            lengthAtBirth:'40cm',
            bloodGroup:'B+ve',
            identification:'Mole on left thye',
            remarks:'Having dust alergy'
        },
        {
            key:'4',
            babyName:'Kaaviyan',
            DOB:new Date(),
            placeOfBirth:'Bangalore',
            birthWeight:'2.7kg',
            lengthAtBirth:'40cm',
            bloodGroup:'B+ve',
            identification:'Mole on left thye',
            remarks:'pre machured baby'
        }
    ]
        Actions.babydetails({title:'Baby Details'})
        dispatch({type:'LOAD_BABYDETAILS',data})
    }

    
}


export function loadDoctorDetails() {
    console.log('dispatch action to load doctor details')

    return (dispatch) =>{
        let data = [{
            DOB:'',
            placeOfBirth:'',
            birthWeight:'',
            lengthAtBirth:'',
            bloodGroup:'',
            identification:'',
            remarks:''
        }]
        Actions.doctordetails({title:'Doctor Details'})
        dispatch({type:'SAVE_DOCTORDETAILS',data})
    }
}
