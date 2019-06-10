import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionTypes';


const initialState = {
    nome: null,
    email: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                nome: action.payload.nome,
                email: action.payload.email
            };
        case USER_LOGGED_OUT:
            return {
                ...state,
                name: null,
                email: null
            }

        default:
            return state;
    }
}


export default reducer;