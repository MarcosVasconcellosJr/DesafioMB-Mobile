import { EVENT_GET_LIST } from '../actions/actionTypes'

const inicialState = {
    eventList: []
}

const reducer = (state = inicialState, action) => {
    switch(action.type) {
        case EVENT_GET_LIST:
            return {
                ...state,
                eventList: action.payload
            }
        default:
            return state
    }
}

export default reducer