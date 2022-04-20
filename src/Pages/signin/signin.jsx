import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signin.css'
import {usersignin}  from "../../Service/Userservice";

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin(){
    const [signinobj,setsigninobj]= React.useState({ Email: " " , Password: " " })
    const [emailerror,setemailerror]= React.useState(false) 
    const [emailhelpertext,setemailhelpertext]= React.useState(" ")
    const [ passworderror, setpassworderror]= React.useState(false)
    const [passwordhelperhelpertext,setpasswordhelpertext]= React.useState(" ")
    function regexemail(event){
    setsigninobj({...signinobj,Email:event.target.value})
    }
    function regexpassword(event){
        setsigninobj({...signinobj,Password:event.target.value})
    }

    function onsubmit(){

        let emailRegextest= emailRegex.test(signinobj.Email)
        let passwordRegextest =passwordRegex.test(signinobj.Password)
     if (emailRegextest==true){
         setemailerror(false)
         setemailhelpertext(" ")
     } 
     else{
         setemailerror(true)
         setemailhelpertext("Please Enter correct Email")
     }
     if (passwordRegextest==true){
        setpassworderror(false)
        setpasswordhelpertext(" ")
    } 
    else{
        setpassworderror(true)
        setpasswordhelpertext("Please Enter correct Password")
    }
    

    if(emailRegextest==true){
        console.log(signinobj)
    usersignin(signinobj).then((respons)=>{console.log(respons);localStorage.setItem("token",respons.data.data.token)}).catch((error)=>{console.log(error)})
    }
    }
    return(
    <div className='container'>
    
        <div className='googleContainer'>
       
            <span className="BOX1">G</span>
            <span className="BOX2">o</span>
            <span className="BOX3">o</span>
            <span className="BOX4">g</span>
            <span className="BOX5">l</span>
            <span className="BOX6">e</span></div>

            <div className='SigninContainer'><span>Sign in</span></div>
                <div className='signinContainer2'><span>Use Your Google Account</span></div>
                <div className='input'>
                    <div id="signinbox"><TextField fullWidth label="Email" onChange={regexemail} error= {emailerror}helperText= {emailhelpertext} size='small'/></div>    
                    <div id="signinbox"><TextField fullWidth label="Password" onChange={regexpassword} error={passworderror} helperText= {passwordhelperhelpertext}size='small'/></div>
                </div>
            <div className='forgetmailContainer'><span>Forget email?</span></div>
            <div id="text"><span>Not Your Computer? Use Guest mode to sign in privately.</span></div>
            <div className='learnMoreContainer'><span>Learn more</span></div>
            <div className='createAccount'>
                    <div className='createAccountText'><Button variant="text" >Create account</Button></div>
                    <div className='createAccountButton'><Button variant="contained" onClick={onsubmit}>Next</Button></div>
            </div>
            
        
    </div>

        
    )
}
export default Signin