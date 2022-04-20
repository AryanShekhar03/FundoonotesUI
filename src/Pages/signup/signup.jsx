import  React from "react";
import './signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { usersignup } from "../../Service/Userservice";
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;



function Signup(){
   const [signupobj,setsignupobj]= React.useState({ Email:" ", Password: " ",Firstname:" ",Lastname:" " })
   const [Firstnameerror,setFirstnameerror]= React.useState(false) 
   const [fnamehelpertext,setfnamehelpertext]= React.useState(" ")
   const [Lastnameerror,setLastnameerror]= React.useState(false) 
   const [lnamehelpertext,setlnamehelpertext]= React.useState(" ")
   const [usernameerror,setusernameerror]= React.useState(false) 
   const [unamehelpertext,setunamehelpertext]= React.useState(" ")
   const [passworderror,setpassworderror]= React.useState(false) 
   const [pwdtext,setpwdtext]= React.useState(" ")

   
   function regexFirstname(event){
      setsignupobj({...signupobj,Firstname:event.target.value})
   }
   function regexLastname(event){
      setsignupobj({...signupobj,Lastname:event.target.value})
   }
   function regexUsername(event){
      setsignupobj({...signupobj,Email:event.target.value})
   }
   function regexpwd(event){
      setsignupobj({...signupobj,Password:event.target.value})
   }

     

   function onsubmit(){
      let firstnameTest=firstNameRegex.test(signupobj.FirstName)
      let lastnameTest=lastNameRegex.test(signupobj.LastName)
      let usernameTest=emailRegex.test(signupobj.Username)
      let pwdTest=passwordRegex.test(signupobj.Password)

      if (firstnameTest==true){
         setFirstnameerror(false)
         setfnamehelpertext(" ")
      } 
      else{
         setFirstnameerror(true)
         setfnamehelpertext("Please Enter correct firstname")
      }

      if (pwdTest==true){
         setpassworderror(false)
         setpwdtext(" ")
      } 
      else{
         setpassworderror(true)
         setpwdtext("Please Enter correct Password")
      }
   

   if (lastnameTest==true){
      setLastnameerror(false)
      setlnamehelpertext(" ")
   } 
   else{
   setLastnameerror(true)
   setlnamehelpertext("Please Enter correct Lastname")
   }

   if (usernameTest==true){
      setusernameerror(false)
      setunamehelpertext(" ")
   } 
   else{
      setusernameerror(true)
      setunamehelpertext("Please Enter correct Username")
   }
   if(usernameTest==true , pwdTest==true){
      usersignup(signupobj).then((respons)=>{console.log(respons)}).catch((error)=>{console.log(error)})
      }
   }
   
    return(
        <div className='Wholecontainer'>
           <div className='signupcontainer'>
           <div className='google'>
              <span className='BOX1'>G</span>
              <span className='BOX2'>o</span>
              <span className='BOX3'>o</span>
              <span className='BOX4'>g</span>
              <span className='BOX5'>l</span>
              <span className='BOX6'>e</span></div>
              <div className='createaccount'><span>Create your Google Account</span></div>
              <div className='box'>
                 <TextField className='name' label="First name" onChange={regexFirstname} error= {Firstnameerror}helperText= {fnamehelpertext} variant="outlined" size="small"/>
                 <TextField className='name' label="Last name"  onChange={regexLastname} error= {Lastnameerror}helperText= {lnamehelpertext}variant="outlined" size="small"/>
              </div>
              <div className='emailbox'>
                 <TextField fullWidth label="Username" onChange={regexUsername} error= {usernameerror}helperText= {unamehelpertext} size="small" /> 
                 <div className='emailtxt'><span>you can use letters,numbers & periods</span></div>
              </div>

              <div class="emailblue"><span>Use my current email address instead</span></div>
                     <div className='box'>
                 <TextField className='name' type="password" label="Password" onChange={regexpwd} error= {passworderror}helperText= {pwdtext} variant="outlined" size="small"/>
                 <TextField className='name'type="password" label="Confirm" onChange={regexpwd} error= {passworderror}helperText= {pwdtext} variant="outlined" size="small"/>
              </div>
              <div className='text'><span>use 8 or more characters with a mix of letters, numbers &
                 symbols</span></div>
                 <div class="lastcontainer">
                     <Button variant="text" size="medium">Sign in instead</Button>
                     <Button variant="contained" onClick={onsubmit}size="large">Next</Button>                 
                </div>  
     
            </div>
            
              <div className='containerImg'>
              <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt='' />

               <div className='imgtxt'>One account. All of Google<br></br> working for you</div>
                  
                   
              </div>
              
        </div>
   
   )
}
export default Signup
