const AUTH_COMPLETED = 'AUTH_COMPLETED'
const SET_USER_ID = 'SET_USER_ID'

let initState = {
    authIn: false,
    userId: ''
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case AUTH_COMPLETED:
            return {...state, authIn: action.payload}
        case SET_USER_ID:
            return {...state, userId: action.payload}
        default:
            return state
    }
}

export const setAuth = (value) => ({type: AUTH_COMPLETED, payload: value})
export const setUserId = (value) => ({type: SET_USER_ID, payload: value})


export default authReducer