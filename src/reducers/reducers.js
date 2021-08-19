import { USER_CREATE_FAIL, USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../constants";

export const userCreateReducer = (state={users: []},action) => {
    switch(action.type){
        case USER_CREATE_REQUEST:
            return {loading:true, users:[]};
        case USER_CREATE_SUCCESS:
            return {loading:false, users: action.payload};
        case USER_CREATE_FAIL:
            return {loading:false, error: action.payload};
        
        default:
            return state;    
    }
}

export const userListReducer = (state={usersdata: []},action) => {
    switch(action.type){
        case USER_LIST_REQUEST:
            return {loading:true, usersdata:[]};
        case USER_LIST_SUCCESS:
            return {loading:false, usersdata: action.payload};
        case USER_LIST_FAIL:
            return {loading:false, error: action.payload};
        
        default:
            return state;    
    }
}

export const userDeleteReducer = (state={usersdata: []},action) => {
    switch(action.type){
        case USER_DELETE_REQUEST:
            return {loading:true};
        case USER_DELETE_SUCCESS:
            return {loading:false};
        case USER_DELETE_FAIL:
            return {loading:false};
        
        default:
            return state;    
    }
}