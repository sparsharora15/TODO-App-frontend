import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../context/Auth/AuthContext'
import { login } from '../Common/api'
import "../../login_signup.css"


import '../../utility.css'
const Login = () => {
    const history = useHistory();
    const { LoadUser } = useContext(AuthContext)
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;
    // console.log(formData)
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async () => {
        try {
            let result = await login(formData);
            console.log(result)
            if (result.status == 200) {
                alert(result.data.msg)
                localStorage.setItem("userToken", result.data.token)
                history.push('/')
            }
            else {
                alert("Something went wrong")

            }
        } catch (E) {
            alert("Something went wrong")
            // throw new Error(E)
        }
    }
    useEffect(()=>{
        if(!LoadUser()){
            history.push('/login')
        } else {
            history.push('/')
        }
    },[])
    return (
        <div className='parentContainer'>
            <div className="mainconatiner">
                <div className="field">
                    <h1>Login</h1>
                    <input
                        type="text"
                        id="username"
                        className="inp"
                        name="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => onChange(e)} />

                    <input
                        type="password"
                        name="password"
                        className="inp"
                        value={password}
                        id="checkPass"
                        placeholder="Enter your password"
                        onChange={(e) => onChange(e)} />
                </div>
                <div className="flex justify-contnt align-item direction-row">
                    <button className="butn" onClick={() => onSubmit()}>LOGIN</button>
                    <button className="butn"><Link to={"./Signup"}>SIGNUP</Link></button>
                </div>
            </div>

        </div>
    )
}
export default Login