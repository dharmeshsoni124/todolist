import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import "./signin.css"


const Signin = () => {

    const [visibility, setVisibility] = useState(false);

    const toggleBtn = () => {
        setVisibility(prevVisibility => !prevVisibility)
    }

    let navigate = useNavigate()

    const naviSignup = () => {
        navigate("/signup")
    }
    const [signindata, setSignindata] = useState({ username: "", password: "" })


    const handleLogin = () => {
        if (signindata.username.length) {
            axios({
                url: "https://localhost:3010/signin",
                method: "POST",
                headers: {
                },
                data: signindata
            }).then((data) => {

                if (data.data.authToken.length > 0) {
                    localStorage.setItem("authorization", data.data.authToken);
                    localStorage.setItem('userid', signindata.username)
                    alert(`${signindata.username} signed in sucessfully`)
                    navigate("/Todolist")
                }
            }).catch((err) => {
                console.log(err)
                
                alert(err.response.data)
                if(err.response.data==="user not exist please signup"){
                    navigate("/register")
                }

            })
            
        }else{
            alert(" username cannot be empty")
        }
    }

    return (
        <div className="signin-container">
            <div className="logbox">
                <h1 className="logologin">MemberLogin</h1>
               
                 {/* <form >  */}
                <div>
                    <input className="logininput1" placeholder="User name" type="text" onChange={(e) => { setSignindata({ ...signindata, username: e.target.value }) }} />
                </div>
                <div className="input-wrapper">
                    <input className="logininput2" placeholder="Password" type={visibility ? "text" : "password"} onChange={(e) => { setSignindata({ ...signindata, password: e.target.value }) }} />
                    <button className="btn" onClick={toggleBtn}>{
                        visibility ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                    }</button>
                </div>
                <button className="signin" onClick={handleLogin}>Login</button>
                <p className="direct1" onClick={naviSignup}>Register</p>
            </div>

             {/* </form> */}
            {/* <div className="direct2">
                <span >Don't have an account?</span>
                <p className="blue" onClick={naviSignup}>Register</p>
            </div> */} 

        </div>
    )
}

export default Signin