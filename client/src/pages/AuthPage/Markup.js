import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'


const AuthForm = (props) => {
    const {handleSubmit} = props
    const [value, setRedirect] = useState(false)
    return <>{value ? <Redirect to="/register"/> : 
        <>
            <form onSubmit={handleSubmit}>
                <Field component='input' type='text' name='email' placeholder='E-mail'/>
                <Field component='input' type='text' name='password' placeholder='Password' />
                <button>Submit</button>
            </form>
            <button onClick = { () => setRedirect(!value)}>Don't have an account?</button>
        </>
    }</>

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