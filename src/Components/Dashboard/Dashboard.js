import React, { useEffect, useState } from 'react'
import { taskOfAUser } from '../Common/api'
import { Link, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from "../../context/Auth/AuthContext"
import Records from "../Records/Records"
import "../../dashboard.css"
const Dashboard = () => {
    const history = useHistory()
    const { LoadUser } = useContext(AuthContext)
    const [Todos,setTodos] = useState([])
    const getALlTasks = async () => {
        try {
            let result;
            result = await taskOfAUser(localStorage.getItem("userToken"));
            console.log(result)
            if (result.status == 200) {
                if(result.data.results){
                    // alert(result.data.msg)
                    setTodos(result.data.results)
                    console.log(result.data.results)
                }
            }
        } catch (E) {
            console.log(E)
            alert("Something went wrong")
            throw new Error(E)
        }
    }
    function logout(){
        localStorage.removeItem("userToken")
        history.push('/login')
    }
    useEffect(() => {
        if(!LoadUser()){
            history.push('/login')
        } else {
            getALlTasks()
        }
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Todo app</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                        </ul>
                        <form className="d-flex">

                            <Link className="nav-link " href="#" aria-disabled="true" to={'./add-task'}>Add Task</Link>


                            <button className="btn btn-outline-success" type="submit" onClick={()=>logout()}>Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
            {Todos?.map((e,i) => {
                return (<Records key={i} reload={getALlTasks} content={e.content} heading={e.heading} id={e._id} />)
            })}
        </>
    )
}

export default Dashboard