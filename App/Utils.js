const regx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
const spaceRegx = new RegExp("\\s", "g")


export const validatePassword = (pwd)=>{
    console.log('password : '+pwd)
    return (regx.test(pwd) && !spaceRegx.test(pwd))
}

export const validateUserName = (user)=>{
    console.log('User Name: '+user)
    return (!spaceRegx.test(user))
}