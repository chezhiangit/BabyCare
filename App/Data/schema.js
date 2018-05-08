export const User = {
    name:'User',
    primary:'username',
    properties:{
        username:'string',
        password:'string',
        DOB:'date?',
        hint:'string?'
    }
}
export const Doctor = {
    name:'Doctor',
    primary:'mobile',
    properties:{
        key:'string',
        username:'string',
        DrName:'string',
        NOH:'string?',
        mobile:'string',
        location:'string?',
        street:'string?',
        remarks:'string?'
    }
}
export const Baby = {
    name:"Baby",
    primary:"username",
    properties:{
        username:'string',
        babyId:'string',
        key:'string',
        babyName:'string',
        DOB:'date',
        placeOfBirth:'string',
        birthWeight:'string',
        lengthAtBirth:'string',
        bloodGroup:'string',
        identification:'string',
        remarks:'string'
    },
}
export const VaccinesSchema = {
    name:'Vaccines',
    properties:{
        key:'string',
        status:'int',
        name:'string',
        dueOn:'date',
        givenOn:'date',
        dosage:'string',
    }
}
export const VaccineListSchema = {
    name:'VaccineList',
    properties:{
        key:'string',
        title:'string',
        vaccines:'Vaccines[]'
    }
}
export const VaccinationSchema = {
    name:'Vaccination',
    primary:'babyId',
    properties:{
        username:'string',
        babyId:'string',
        key:'string',
        vaccinesdata:'VaccineList[]'
    }
}

