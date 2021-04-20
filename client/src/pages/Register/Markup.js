import React from 'react'
import { Field, reduxForm } from 'redux-form'
import UserAPI from '../../api/api'

const RegisterForm = (props) => {
    const {handleSubmit} = props

    return <form onSubmit={handleSubmit}>
        <Field component='input' type='text' name='firstname' placeholder='First Name' />
        <Field component='input' type='text' name='lastname' placeholder='Last Name' />
        <Field component='input' type='text' name='email' placeholder='E-mail'/>
        <Field component='input' type='text' name='password' placeholder='Password' />
        <Field component='input' type='text' name='repeatpassword' placeholder='Repeat Password'/>
        <button>Submit</button>
    </form>
}


const RegisterPageMarkup = props => {

    const submitFormData = (data) => {
        UserAPI.registerMe(data)
    }

    return <div>
        Register
        <ReduxRegisterForm onSubmit={submitFormData}/>
    </div>
}

const ReduxRegisterForm = reduxForm({form: 'auth'})(RegisterForm)
export default RegisterPageMarkup


