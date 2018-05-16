import {realmDB} from './rootModel'

export function storeUserData(data){
    if(realmDB!==null){
      //  console.log('User data to be written to DB:- ',data)
        try {
            realmDB.write(() => {
                console.log('User data to be written to DB:- ',data)
                realmDB.create('User', {username:data.username,password:data.password,DOB:data.DOB,hint:data.hint});
                }
            );
            return true;
        } catch (e) {
            console.log("Error write User Data to DB:- ",e.name);
            return false;
        }
    } else if(realmDB===null){
        console.log("Error write User Data : realmDB is null ");
    }
return false;
}

export function validateUser(data){
    let userInfo = null;
    try{
        if(realmDB!==null){
            let query = 'username=='+`'${data.username}'`
            userInfo = realmDB.objects('User').filtered(query)
            return userInfo
        }
        return null;
    }catch(e){
        console.log("Error Fetch User Data from DB:- ",e.name)
        return null
    }
    return null;
}
export function forgotPassword(data){
    let userInfo = null;
    try{
        if(realmDB!==null){
            let query = 'username=='+`'${data.username}'`
            userInfo = realmDB.objects('User').filtered(query)
            if(userInfo!==null && userInfo.length>0){
                realmDB.write(()=>{
                    userInfo[0].password = data.password
                   // userInfo[0].DOB = data.DOB
                })
                return true
            }
            return false;
        }
        return false;
    }catch(e){
        console.log("Error update User Data to DB:- ",e.name)
        return false
    }
    return false;
}


