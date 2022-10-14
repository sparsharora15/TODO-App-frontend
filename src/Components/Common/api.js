import axios from "axios"
import { BASE_URL } from "./config"
export const signUp = (data) => {
    return axios.post(BASE_URL + "signup",data)
}
export const addTask = (task,token) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }
    console.log(config)
    return axios.post(BASE_URL + "task/create",task,config)
}
export const editTask = (task,id,token) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }
    task['id'] = id
    if(task.content == ""){
        delete task.content
    }
    if(task.heading == ""){
        delete task.heading
    }
    return axios.post(BASE_URL + "task/updateTask",task,config)
}
export const deleteTask = async (id,token) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }
    let data = {
        id
    }
    console.log(data)
    return axios.post(BASE_URL + "task/deleteTask",data,config)
}
export const login = (data) => {
    console.log(data)
    return axios.post(BASE_URL + "signin",data)
}
export const taskOfAUser = (token) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }
    console.log(config)
    return axios.get(BASE_URL + "taskOfAUser",config)
}
export const getUser = (token) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }
    console.log(config)
    return axios.get(BASE_URL + "getUserById",config)
}