import { USERS_GET_LIST, ADD_USER } from '../actions/actionTypes'
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionTypes';

const inicialState = {
    email: null,
    password: null,
    userList: []
}

const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
        case USER_LOGGED_OUT:
            return {
                ...state,
                email: null,
                password: null,
            };
        case USERS_GET_LIST:
            return {
                ...state,
                userList: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                userList: action.payload
            }
        default:
            return state
    }
}

export default reducer