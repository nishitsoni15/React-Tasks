import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainDiv , WrapperDiv ,Input,Wrapper , Label, Button, ValidateP} from "../components/style";
import { validEmail,validUsername, validPassword } from "../components/validation";
const Dashboard = () => {
    const navigate = useNavigate();
    const[userData,setUserData] = useState(
        {
            username:"",
            email:"",
            password:""
        }
    );
//    const[error,setError] = useState({
//        usernameError:"false",
//        emailError:"false",
//        passwordError:"false"
//    })
const[usernameError,setUsernameError] = useState(false)
const[emailError,setEmailError] = useState(false)
const[passwordError,setPasswordError] = useState(false)
const[disabled,setDisabled] = useState(true)
   
const handleChange = (e) => {
    setUserData({
        ...userData,

        [e.target.name]:e.target.value
    })
    setDisabled(e.target.value === "" || usernameError === true || emailError === true || passwordError === true)
}

const handleUsernameFocus = () => {
    setUsernameError(false)
}

const handleEmailFocus = () => {
    setEmailError(false)
}
const handlePasswordFocus = () => {
    setPasswordError(false)
}

var data = "Data Passed Successfully!";
const handleSubmit = () => {

if(!validUsername.test(userData.username) && !validEmail.test(userData.email) && !validPassword.test(userData.password)){
    setUsernameError(true)
    setEmailError(true)
    setPasswordError(true)
}
else{
    setUsernameError(false)
    setEmailError(false)
    setPasswordError(false)
    navigate('/display',{state:{data,userData}})
}
}
    return(
        <>
        <Wrapper>
        <WrapperDiv>
            <MainDiv>
             <Label for="username">User Name</Label>   
            <Input type="text" placeholder="UserName" name="username" onChange={handleChange} onFocus={handleUsernameFocus}/>
            {usernameError && <ValidateP>username invalid!</ValidateP>}
            </MainDiv>
            
            <MainDiv>
             <Label for="email">Email</Label>   
            <Input type="email" placeholder="Email" name="email" onChange={handleChange} onFocus={handleEmailFocus}/>
            {emailError && <ValidateP>email invalid!</ValidateP>}
            </MainDiv>
            
            <MainDiv>
             <Label for="password">Password</Label>   
            <Input type="password" placeholder="Password" name="password" onChange={handleChange} onFocus={handlePasswordFocus}/>
            {passwordError && <ValidateP>password invalid!</ValidateP>}
            </MainDiv>
            
            <MainDiv>
                <Button type="submit" onClick={handleSubmit} disabled={disabled}>Submit</Button>
            </MainDiv>
        </WrapperDiv>
        </Wrapper>
        </>
    )
}
export default Dashboard;