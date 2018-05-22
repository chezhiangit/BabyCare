import {
    realmDB
} from './rootModel'
import * as BabyCareStaticModel from './responseData';

export function loadVaccination(username, babyId) {
        console.log('Load baby list for the user : - ', username)
        console.log('Load vaccination list for the baby : - ', babyId)
        if(username==null || babyId===null || username===''||babyId==='') return null
        let vaccinationList = null;
        let data=[]
        try {
            if (realmDB !== null) {
                let query = 'username==' + `'${username}'` + ' AND babyId==' + `'${babyId}'`
                vaccinationList = realmDB.objects('Vaccination').filtered(query)
                // console.log('vaccination list loaded from db :- ', vaccinationList)
                // console.log('vaccination list loaded from db Username :- ', vaccinationList.username)
                console.log('vaccination length: =====',vaccinationList.length)

                if (vaccinationList.length ==0) {
                        console.log('No vaccination list found for the baby : ')
                        const newVaccineList = BabyCareStaticModel.getVaccinationList();
                        // console.log('Generated static vaccination data to be written to DB:- ', newVaccineList)
                        realmDB.write(() => {
                            realmDB.create('Vaccination', {
                                username: username,
                                babyId: babyId,
                                vaccinesdata: [...newVaccineList]
                            });
                        });
                        //console.log('Generated static vaccination data to be written to DB:- ', newVaccineList)
                        // console.log('Get static vaccination data from DB:- ')
                        vaccinationList = realmDB.objects('Vaccination').filtered(query)
                        // console.log('received static vaccination data from DB:- ',vaccinationList[0].vaccinesdata)
                        return [...(vaccinationList[0].vaccinesdata)]
                    }
               //  data = JSON.parse(JSON.stringify(vaccinationList[0].vaccinesdata))
                //  console.log('data ============= ',data)
                // let arr = Object.values(data);
                // return arr 
                return [...(vaccinationList[0].vaccinesdata)]
            }
            return null;
        } catch (e) {
            console.log("Error Fetch Vaccination Data from DB:- ", e.name)
            return null
        }
        return null;
}

export function updateVaccinationDates(data){
    let vaccinationList = null;
    try {
        if (realmDB !== null) {
                let query = 'username==' + `'${data.username}'` + ' AND babyId==' + `'${data.selectedBabyId}'`
                let vaccinationList = realmDB.objects('Vaccination').filtered(query)
                if(vaccinationList !== null && vaccinationList.length>0){
                        realmDB.write(() => {
                            vaccinationList[0].vaccinesdata[data.sectionIdex].data[data.index].dueOn=data.newDueDate
                            vaccinationList[0].vaccinesdata[data.sectionIdex].data[data.index].givenOn=data.newGivenDate
                            vaccinationList[0].vaccinesdata[data.sectionIdex].data[data.index].comments=data.comments
                        });
                        return true
                    }
                }
            return false
        } catch (e) {
            console.log("Error Fetch Vaccination Data from DB:- ", e.name)
            return false
        }
        return false;
}