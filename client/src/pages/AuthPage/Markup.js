import React from 'react'
import { Field, reduxForm } from 'redux-form'


const AuthForm = (props) => {
    const {handleSubmit} = props

    return <form onSubmit={handleSubmit}>
        <Field component='input' type='text' name='email' placeholder='E-mail'/>
        <Field component='input' type='text' name='password' placeholder='Password' />
        <button>Submit</button>
    </form>
}

const AuthPageMarkup = ({authMe}) => {

    const submitFormData = (data) => {
        authMe(data)
    }

    return <div>
        AuthPage
        <ReduxAuthForm onSubmit={submitFormData}/>
    </div>
}

const ReduxAuthForm = reduxForm({form: 'auth'})(AuthForm)

export default AuthPageMarkup