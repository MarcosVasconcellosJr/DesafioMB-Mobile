import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
import eventReducer from './reducers/event'
//Add others Reducers here !!


const reducers = combineReducers({
    user: userReducer,
    event: eventReducer, 
})

const storeConfig = () => {
	return createStore(reducers)
}

export default storeConfig