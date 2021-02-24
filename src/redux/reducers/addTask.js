import { updateObject } from "../utills";
import { GET_TASKS_START, GET_TASKS_SUCCESS, CREATE_TASK_START, CREATE_TASK_SUCCESS, CREATE_TASK_FAIL } from "../actions/actionTypes";

const initialState = {
    loading : false,
}

const addTasksStart = (state=initialState,action) => {

    return updateObject(state,{
        loading : true
    })
}

const addTasksSuccess = (state=initialState,action) => {

    return updateObject(state,{
        loading : false
    })
}

const addTasksFail = (state=initialState,action) => {

    return updateObject(state,{
        loading : false
    })
}

export const addTask = (state=initialState,action) => {

    switch(action.type){
        case CREATE_TASK_START : return addTasksStart(state,action)
        case CREATE_TASK_SUCCESS : return addTasksSuccess(state,action)
        case CREATE_TASK_FAIL : return addTasksFail(state,action)
        default : return state
    }
} 