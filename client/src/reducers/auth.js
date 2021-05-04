const AUTH_COMPLETED = 'AUTH_COMPLETED'

let initState = {
    authIn: false
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'AUTH_COMPLETED':
            return {...state, authIn: action.payload}

        default:
            return state
    }
}

export const setAuth = (value) => ({type: 'AUTH_COMPLETED', payload: value})

export default authReducer