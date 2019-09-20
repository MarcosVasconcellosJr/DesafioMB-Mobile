import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
//Add others Reducers here !!


const reducers = combineReducers({
	user: userReducer,
})

const storeConfig = () => {
	return createStore(reducers)
}

export default storeConfig