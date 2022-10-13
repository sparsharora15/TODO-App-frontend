import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { deleteTask } from '../Common/api'
import { AuthContext } from '../../context/Auth/AuthContext'
const Records = (props) => {
    const {state} = useContext(AuthContext)
    const delTask = async (id) => {
        await deleteTask(id,state.token)
        alert('Deleted')
        props.reload()
    }
    return (
        <div>
            <div className="container">
                <div className="childContainer">
                    <div className='HeadingDiv'>
                        <h1>{props.heading}</h1>
                        <div className='buttnDiv'>
                            <Link rel="stylesheet" to={'/edit/'+props.id}>
                                <button className='btn buttn btn-primary my-2'>
                                    Edit task
                                </button>
                            </Link>
                            <button className='btn buttn btn-danger my-2' onClick={()=>delTask(props.id)}>Delete task</button>
                        </div>
                    </div>
                    <div className='content'>
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Records