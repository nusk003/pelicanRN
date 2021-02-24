import { updateObject } from "../utills";
import { GET_TASKS_START, GET_TASKS_SUCCESS,GET_TASKS_FAIL } from "../actions/actionTypes";

const initialState = {
    loading : false,
    tasks : []
}

const getTasksStart = (state=initialState,action) => {

    return updateObject(state,{
        loading : true
    })
}

const getTasksSuccess = (state=initialState,{tasks}) => {
    return updateObject(state,{
        loading : false,
        tasks
    })
}

const getTasksFail = (state=initialState,action) => {

    return updateObject(state,{
        loading : false
    })
}

export const getTasks = (state=initialState,action) => {

    switch(action.type){
        case GET_TASKS_START : return getTasksStart(state,action)
        case GET_TASKS_SUCCESS : return getTasksSuccess(state,action)
        case GET_TASKS_FAIL : return getTasksFail(state,action)
        default : return state
    }
} 