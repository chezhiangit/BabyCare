import {Actions} from 'react-native-router-flux';
import * as BabyCareModel from '../Data/responseData';
import * as doctorModel from '../Data/doctorModel'
import * as babyModel from '../Data/babyModel'


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

export function loadVaccination(username) {
    console.log('start to create vaccination list')
    return (dispatch) =>{
        let babylist = babyModel.loadBaby(username)
        if(babylist===null){
            babylist = []
        }
      //  let vaccineData = BabyCareModel.getVaccinationList()
        let vaccineData=[]
        Actions.vaccine({title:'Vaccination'})
        dispatch({type:'LOAD_BABYLIST',data:{vaccineData,babylist}})
    }
}

export function loadBabyDetails(username) {
    console.log('dispatch action to load baby details')

    return (dispatch) =>{
    //     let data = [{
    //         key:'1',
    //         babyName:'Mane Shankar',
    //         DOB:new Date(),
    //         placeOfBirth:'Chennai',
    //         birthWeight:'2.7kg',
    //         lengthAtBirth:'40cm',
    //         bloodGroup:'B+ve',
    //         identification:'Mole on left thye',
    //         remarks:'Having dust alergy'
    //     },
    //     {
    //         key:'2',
    //         babyName:'Kaaviyan',
    //         DOB:new Date(),
    //         placeOfBirth:'Bangalore',
    //         birthWeight:'2.7kg',
    //         lengthAtBirth:'40cm',
    //         bloodGroup:'B+ve',
    //         identification:'Mole on left thye',
    //         remarks:'pre machured baby'
    //     },
    //     {
    //         key:'3',
    //         babyName:'Mane Shankar',
    //         DOB:new Date(),
    //         placeOfBirth:'Chennai',
    //         birthWeight:'2.7kg',
    //         lengthAtBirth:'40cm',
    //         bloodGroup:'B+ve',
    //         identification:'Mole on left thye',
    //         remarks:'Having dust alergy'
    //     },
    //     {
    //         key:'4',
    //         babyName:'Kaaviyan',
    //         DOB:new Date(),
    //         placeOfBirth:'Bangalore',
    //         birthWeight:'2.7kg',
    //         lengthAtBirth:'40cm',
    //         bloodGroup:'B+ve',
    //         identification:'Mole on left thye',
    //         remarks:'pre machured baby'
    //     }
    // ]
        console.log('User name : -',username)
        let babys = babyModel.loadBaby(username)
        if(babys!=null){
            dispatch({type:'LOAD_BABYDETAILS',data:babys})
        }else {
            dispatch({type:'LOAD_BABYDETAILS',data:[]})
        }
        Actions.babydetails({title:'Baby Details'})
       // dispatch({type:'LOAD_BABYDETAILS',data})
    }

    
}


export function loadDoctorDetails(username) {
    console.log('dispatch action to load doctor details')

    return (dispatch) =>{
    //     let data = [{
    //         key:'1',
    //         username:'',
    //         DrName:'Sudeep Kumar',
    //         NOH:'Nalam Clinic',
    //         mobile:'9585058087',
    //         location:'Chromepet',
    //         street:'EVR Colony',
    //         remarks:'Child Specialist'
    //     },
    //     {
    //         key:'2',
    //         username:'',
    //         DrName:'Suresh Kumar',
    //         NOH:'Nalam Clinic',
    //         mobile:'9585058087',
    //         location:'Chromepet',
    //         street:'EVR Colony',
    //         remarks:'Child Specialist'
    //     },
    //     {
    //         key:'3',
    //         username:'',
    //         DrName:'SasiKumar',
    //         NOH:'Nalam Clinic',
    //         mobile:'9585058087',
    //         location:'Chromepet',
    //         street:'EVR Colony',
    //         remarks:'Child Specialist'
    //     },
    //     {
    //         key:'4',
    //         username:'',
    //         DrName:'SarathKumar',
    //         NOH:'Nalam Clinic',
    //         mobile:'9585058087',
    //         location:'Chromepet',
    //         street:'EVR Colony',
    //         remarks:'Child Specialist'
    //     }
    // ]
        console.log('User name : -',username)
        let doctors = doctorModel.loadDoctor(username)
        if(doctors!=null){
            dispatch({type:'LOAD_DOCTORDETAILS',data:doctors})
        }else {
            dispatch({type:'LOAD_DOCTORDETAILS',data:[]})
        }
    Actions.doctordetails({title:'Doctor Details'})
    }
}

// export function loadDoctorList(username){
//     return (dispatch)=>{
        
//     }
// }
