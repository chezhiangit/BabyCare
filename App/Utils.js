const regx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")


export const validatePassword = (pwd)=>{
    return regx.test(pwd);
}