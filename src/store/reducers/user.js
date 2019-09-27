import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/actionTypes';

const inicialState = {
  name: null,
  email: null,
  password: null,
  age: null,
  city: null,
  cash: null,
  likes: [],
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        age: action.payload.age,
        city: action.payload.city,
        cash: action.payload.cash,
        likes: action.payload.likes,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        name: null,
        email: null,
        password: null,
        age: null,
        city: null,
        cash: null,
        likes: null,
      };
    default:
      return state;
  }
};

export default reducer;