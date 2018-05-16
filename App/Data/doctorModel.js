import {realmDB} from './rootModel'

export function loadDoctor(username){
    console.log('Load doctors for the user : - ',username)
    let doctorList = null;
    try{
        if(realmDB!==null){
            let query = 'username=='+`'${username}'`
            doctorList = realmDB.objects('Doctor').filtered(query)
            console.log('Doctor list loaded :- ',doctorList)
            return [...doctorList] //[JSON.parse(JSON.stringify(doctorList))];
        }
        return null;
    }catch(e){
        console.log("Error Fetch Doctor Data from DB:- ",e.name)
        return null
    }
    return null;
}
export function updateDoctor(data){
    let doctorList = null;
    try{
            if(realmDB!==null){
                let query = 'username=='+`'${data.username}'` +' AND key=='+`'${data.key}'`
                doctorList = realmDB.objects('Doctor').filtered(query)
                if(doctorList!==null){
                realmDB.write(()=>{
                    doctorList[0].key=data.key,
                    doctorList[0].username=data.username,
                    doctorList[0].DrName=data.DrName,
                    doctorList[0].NOH=data.NOH,
                    doctorList[0].mobile=data.mobile,
                    doctorList[0].location=data.location,
                    doctorList[0].street=data.street,
                    doctorList[0].remarks=data.remarks
                })
                //console.log('Doctor list loaded :- ',doctorList)
                return true; //[JSON.parse(JSON.stringify(doctorList))];
            } 
            return false
        }
        return false;
    }catch(e){
        console.log("Error update Doctor Data in DB:- ",e.name)
        return false
    }
    return false;
}
export function saveDoctor(data){
    try {   
    if(realmDB!==null){
        realmDB.write(() => {
            console.log('Doctor data to be written to DB:- ',data)
            realmDB.create('Doctor', {
                key:data.key,
                username:data.username,
                DrName:data.DrName,
                NOH:data.NOH,
                mobile:data.mobile,
                location:data.location,
                street:data.street,
                remarks:data.remarks
            });
            }
        );
        return true;
    }else {
        return false;
    }
    
    } catch (e) {
        console.log("Error write Doctor Data to DB:- ",e.name);
        return false;
    }
}

export function deleteDoctor(data){
    console.log('Doctor to be deleted :- ',data.username)
    let doctorList = null;
    try {   
        if(realmDB!==null){
            console.log('RealmDB found valid')
            let query = 'username=='+`'${data.username}'` +' AND DrName=='+`'${data.DrName}'`
            doctorList = realmDB.objects('Doctor').filtered(query)
            if(doctorList!==null){
              realmDB.write(()=>{
                realmDB.delete(doctorList)
              })
                return true
            }
            return false
        }
    } catch (e) {
        console.log("Error delete Doctor Data from DB:- ",e.name);
        return false;
    }
}