import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes'

export const getUsers = () => {
    return {
        type: USER_LOGGED_IN,
        payload: [
            
        ]
    }
}

export const logout = user => {
    return {
        type: USER_LOGGED_OUT,
        payload: user
    }
}