import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainDiv , WrapperDiv ,Input,Wrapper , Label, Button} from "../components/style";
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
    const [usernameError,setUsernameError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
   
const handleChange = (e) => {
    setUserData({
        ...userData,

        [e.target.name]:e.target.value
    })
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
if(!validUsername.test(userData.username)){
    setUsernameError(true)
}else if(!validEmail.test(userData.email)){
    setEmailError(true)
}else if(!validPassword.test(userData.password)){
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
            {usernameError && <p>username should not be empty!</p>}
            </MainDiv>
            
            <MainDiv>
             <Label for="email">Email</Label>   
            <Input type="email" placeholder="Email" name="email" onChange={handleChange} onFocus={handleEmailFocus}/>
            {emailError && <p>email should not be empty!</p>}
            </MainDiv>
            
            <MainDiv>
             <Label for="password">Password</Label>   
            <Input type="password" placeholder="Password" name="password" onChange={handleChange} onFocus={handlePasswordFocus}/>
            {passwordError && <p>password should not be empty!</p>}
            </MainDiv>
            
            <MainDiv>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </MainDiv>
        </WrapperDiv>
        </Wrapper>
        </>
    )
}
export default Dashboard;