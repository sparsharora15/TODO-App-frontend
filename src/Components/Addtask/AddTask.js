import React, { useState, useEffect } from 'react'
import { addTask } from '../Common/api'
import { useContext } from 'react'
import { AuthContext } from "../../context/Auth/AuthContext"
import "../../login_signup.css"
import { useHistory } from 'react-router-dom'
const AddTask = () => {
  const history = useHistory()
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
      let result = await addTask(task, localStorage.getItem("userToken"));
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
    if (!LoadUser()) {
      history.push('/login')
    }
  }, [])

  return (

    <>
      <div className="Taskcontainer1">
        <div className='child'>
          <h1>Add Task</h1>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Task heading</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter heading"
              name="heading"
              value={heading}
              onChange={(e) => onChange(e)} />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Enter content </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder='Enter content'
              name="content"
              value={content}
              onChange={(e) => onChange(e)}
            ></textarea>
            <button className="btn btn-outline-success mb-3" type="submit" onClick={() => onSubmit()}>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTask