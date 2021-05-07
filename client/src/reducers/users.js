const SET_USERS = 'SET_USERS'

let initState = {
    users: []
}

const usersReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

export const setUsers = users => ({type: SET_USERS, users})

export default usersReducer