import {createSelector} from 'reselect'


const getId = (state) => {
    return state.auth.userId
}

export const getUserId = createSelector(getId, id => id)