import React, { useEffect, useState } from 'react'
import { editTask } from '../Common/api'
import { useContext } from 'react'
import { AuthContext } from "../../context/Auth/AuthContext"
import { useHistory, useParams } from 'react-router-dom'
const EditTask = () => {

    let { id } = useParams();
    const history = useHistory()

    console.log(id)
    const { LoadUser } = useContext(AuthContext)
    const [task, setTask] = useState({
        heading: "",
        content: ""
    })
    const { heading, content } = task;
    const onChange = (e) =>
        setTask({ ...task, [e.target.name]: e.target.value });
    const onSubmit = async () => {
        try {
            let result = await editTask(task, id, localStorage.getItem("userToken"));
            console.log(result)
            if (result.status == 200) {
                alert(result.data.msg)
            }
        } catch (E) {
            alert("Something went wrong")
            throw new Error(E)
        }
    };
    useEffect(() => {
        if(!LoadUser()){
            history.push('/login')
        }
    },[])
    return (
        <>
            <div className="Taskcontainer1">
                <div className='child'>
                    <h1>Edit Task</h1>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Task heading</label>
                        <input
                            type=""
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter heading"
                            name="heading"
                            value={heading}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Enter content </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder='Enter content'
                            name="content"
                            value={content}
                            onChange={(e) => onChange(e)}
                        ></textarea>
                        <button className="btn btn-outline-success mb-3" type="submit" onClick={() => onSubmit()} >Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTask