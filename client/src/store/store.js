import {combineReducers, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from '../reducers/auth'


let reducers = combineReducers({
    form: formReducer,
    auth: authReducer
})

let store = createStore(reducers)
export default store