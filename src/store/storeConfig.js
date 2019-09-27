import { createStore, combineReducers } from 'redux'
import eventReducer from './reducers/event'
import usersReducer from './reducers/users'
//Add others Reducers here !!


const reducers = combineReducers({
    event: eventReducer, 
    users: usersReducer
})

const storeConfig = () => {
	return createStore(reducers)
}

export default storeConfig