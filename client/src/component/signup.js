import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import './signup.css'
import validator from 'validator'


const Signup = () => {
    let navigate = useNavigate()

    const [signupData, setSignupData] = useState({ username: "", password: "", confirmpassword: "" })


    const handleSignup = () => {
        if (signupData.password === signupData.confirmpassword && signupData.password.length > 0 && signupData.username.length>0 && (validator.isUsername(signupData.username))) {
            axios({
                url: "https://localhost:3010/register",
                method: "POST",
                headers: {
                },
                data: signupData,             
            }).then((res) => {
                console.log(res)
            
                alert(res.data)
                navigate("/")
                
            }).catch((err) => {
                
                alert(err.response.data)
                console.log(err)
            })
        } else {
            if (signupData.username.length === 0) {
                alert("username cannot be empty");
            }else if(!validator.isEmail(signupData.email)){
                alert("username is not valid")
            } 
             else if (signupData.password.length === 0) {
                alert("password cannot be empty")
            } 
            else{
                alert("password and confirm password should be same")
            }
        }
    }
    const navisignin = () => {
        navigate("/")
    }
    return (
        <div className="signup-container">
            <div className="box">
                <h1 className="logo">Register</h1>
                {/* <p className="para">Create New Account</p> */}
                {/* <form id="pushing" > */}
                    <div id="email">
                        <input className="signup-input" type="username" required placeholder="User Name" onChange={(e) => { setSignupData({ ...signupData, username: e.target.value }) }} />
                    </div>
                    <div id="password">
                        <input className="signup-input" type="password" required placeholder="Password" id="password" onChange={(e) => { setSignupData({ ...signupData, password: e.target.value }) }} />
                    </div>
                    <div id="confirmpassword">
                        <input className="signup-input" type="password" required placeholder=" Confirm password" id=" confirm password" onChange={(e) => { setSignupData({ ...signupData, confirmpassword: e.target.value }) }} />
                    </div>
                {/* </form> */}
                <button className="sign" onClick={()=>{handleSignup()}}>Register</button>
                <p className="foot" onClick={navisignin}>Member Login</p>
                
            </div>
           
        </div>
    )
}
export default Signup