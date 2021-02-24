import { GET_TASKS_START, GET_TASKS_FAIL, CREATE_TASK_START, CREATE_TASK_SUCCESS, CREATE_TASK_FAIL, GET_TASKS_SUCCESS } from "./actionTypes";
import ApiService from "../../services/apiService";

export const getTasksStart = () => {

    return{
        type : GET_TASKS_START
    }
}

export const getTasksSuccess = (tasks) => {

    return{
        type : GET_TASKS_SUCCESS,
        tasks
    }
} 

export const getTasksFail = () => {

    return{
        type : GET_TASKS_FAIL
    }
}

export const getTasks = () => {
    return (dispatch) => {
        dispatch(getTasksStart())
        ApiService.get('/tasks/')
        .then(tasks=>{
            console.log(tasks)
            dispatch(getTasksSuccess(tasks))
        })
        .catch(error=>{
            console.log(error)
            dispatch(getTasksFail())
        })
    }
}

export const createTaskStart = () => {

    return {
        type : CREATE_TASK_START
    }
}

export const createTaskSuccess = () => {

    return {
        type : CREATE_TASK_SUCCESS
    }
}

export const createTaskFail = () => {

    return {
        type : CREATE_TASK_FAIL
    }
}

const updateTasks = (task) => {

    return (dispatch,getState) => {
        const tasks = [...getState().getTasks.tasks]
        tasks.push(task)
        dispatch(getTasksSuccess(tasks))
    }
}

export const addTask = (payload,successCallback,errorCallback) => {

    return (dispatch) => {
        dispatch(createTaskStart())
        ApiService.post('/tasks/add',payload)
        .then(task=>{
            console.log(task)
            dispatch(createTaskSuccess())
            dispatch(updateTasks(task))
            if (successCallback){
                successCallback()
            }
        })
        .catch(error=>{
            dispatch(createTaskFail())
            if (errorCallback){
                errorCallback()
            }
        })
    }
}