import {realmDB} from './rootModel'

export function loadBaby(username){
    console.log('Load baby for the user : - ',username)
    let babyList = null;
    try{
        if(realmDB!==null){
            let query = 'username=='+`'${username}'`
            babyList = realmDB.objects('Baby').filtered(query)
            return [...babyList]
        }
        return null;
    }catch(e){
        console.log("Error Fetch Baby Data from DB:- ",e.name)
        return null
    }
    return null;
}
export function updateBaby(data){
    console.log('Baby details to be updated : ',data)
    let babyList = null;
    try{
            if(realmDB!==null){
                console.log('Valid realm found')
                console.log('Baby key : -' ,data.key)
                console.log('user name: - ',data.username)
                let query = 'username=='+`'${data.username}'` +' AND key=='+`'${data.key}'`
                babyList = realmDB.objects('Baby').filtered(query)
                
                if(babyList!==null){
                    realmDB.write(()=>{
                        babyList[0].babyName=data.babyName,
                        babyList[0].DOB=data.DOB,
                        babyList[0].placeOfBirth=data.placeOfBirth,
                        babyList[0].birthWeight=data.birthWeight,
                        babyList[0].lengthAtBirth=data.lengthAtBirth,
                        babyList[0].bloodGroup=data.bloodGroup,
                        babyList[0].identification=data.identification,
                        babyList[0].remarks=data.remarks
                    })
                    return true;
            }
            console.log('Baby details not found in DB: ')
            return false
            
        }
        return false;
    }catch(e){
        console.log("Error update baby Data in DB:- ",e.name)
        return false
    }
    return false;
}
export function saveBaby(data){
    try {   
    if(realmDB!==null){
        realmDB.write(() => {
            console.log('baby data to be written to DB:- ',data)
            realmDB.create('Baby', {
                username:data.username,
                babyId:data.key,
                key:data.key,
                babyName:data.babyName,
                DOB:data.DOB,
                placeOfBirth:data.placeOfBirth,
                birthWeight:data.birthWeight,
                lengthAtBirth:data.lengthAtBirth,
                bloodGroup:data.bloodGroup,
                identification:data.identification,
                remarks:data.remarks
            });
            }
        );
        return true;
    }else {
        return false;
    }
    
    } catch (e) {
        console.log("Error write baby Data to DB:- ",e.name);
        return false;
    }
}

export function deleteBaby(data){
    console.log('Baby to be deleted :- ',data.username)
    let babyList = null;
    try {   
        if(realmDB!==null){
            console.log('RealmDB found valid')
            let query = 'username=='+`'${data.username}'` +' AND babyName=='+`'${data.babyName}'`
            babyList = realmDB.objects('Baby').filtered(query)
            if(babyList!==null){
              realmDB.write(()=>{
                realmDB.delete(babyList)
              })
                return true
            }
            return false
        }
    } catch (e) {
        console.log("Error delete baby Data from DB:- ",e.name);
        return false;
    }
}