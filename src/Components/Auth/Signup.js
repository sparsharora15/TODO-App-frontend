import React, { useState } from 'react'
import '../../App.css'
import '../../utility.css'
import { Link } from 'react-router-dom'
import { signUp } from '../Common/api'
const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
	const { name, email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async () => {
        try{
            let result = await signUp(formData);
            console.log(result)
            if(result.status==200){
                alert(result.data.msg)
            }
        } catch(E){
            alert("Something went wrong")
            throw new Error(E)
        }
	};
    return (
        <div className='parentContainer'>
            <div className="conatiner2">
                <div className="field">
                    <h1>Signup</h1>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={(e) => onChange(e)}
                    />

                </div>
                <div className="flex justify-contnt align-item direction-row">
                    <button className="butn" onClick={()=>onSubmit()}>SIGNUP</button>
                    <Link to={'./Login'}>Already a user?</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup