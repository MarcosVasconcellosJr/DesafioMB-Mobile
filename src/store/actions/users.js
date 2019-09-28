import { USERS_GET_LIST, ADD_USER } from './actionTypes'
import { USER_LOGGED_IN, USER_LOGGED_OUT,  } from './actionTypes'

export function getUsers() {
    return {
        type: USERS_GET_LIST,
        payload: [
            {
                name: 'admin',
                email: 'admin@gmail.com',
                password: 'admin',
                age: '18',
                city: 'Sumaré',
                cash: '500',
                likes: ['1','2','3','4'],
                datePreferred: '',
            },
            {
                name: 'marcos',
                email: 'marcos@gmail.com',
                password: 'marcos',
                age: '19',
                city: 'Sumaré',
                cash: '20',
                likes: ['1','4','7','8'],
                datePreferred: '',
            }
        ]
    }
}

export const addUser = (users, user) => {

    users.push(user)

    return {
        type: ADD_USER,
        payload: users
    }
}

export const login = (user, userList) => {

    for(var i = 0; i < userList.length; i++) {
        if(userList[i].email === user.email) {
            if(userList[i].password === user.password){
                return {
                    type: USER_LOGGED_IN,
                    payload: user
                }
            }
        }
    }

    return 1
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}