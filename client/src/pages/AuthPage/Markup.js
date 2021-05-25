import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css'


const Email = 
(
    { input, label, meta: { touched, error }, ...custom },
  ) => (
    <TextField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );

const Password = (
    { input, label, meta: { touched, error }, ...custom },
  ) => (
    <TextField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );


const AuthForm = (props) => {
    const {handleSubmit} = props
    const [value, setRedirect] = useState(false)
    return <>
        {value ? <Redirect to="/register" /> : 
            <div class={styles.form}>
                <form onSubmit={handleSubmit}>
                    <div class={styles.container}>
                        <Field 
                            component={Email} 
                            type='text' 
                            name='email' 
                            placeholder='Ел. пошта'
                        />
                        <Field 
                            component={Password}
                            type='text' 
                            name='password' 
                            placeholder='Пароль' 
                        />
                    </div>
                    <Button
                        variant='contained'
                        style={{
                        width: '200px',
                        marginBottom: '20px',
                        marginTop: '20px',
                        marginLeft: '50px'}}
                        type="submit"
                    >
                        Підтвердити
                    </Button>
                </form>
                <Button
                    variant='contained'
                    color='primary'
                    style={{width:'300px'}} 
                    onClick = { () => setRedirect(!value)}
                >
                    Немає облікового запису?
                </Button>
            </div>
        }
    </>

}

const AuthPageMarkup = ({authMe}) => {

    const submitFormData = (data) => {
        console.log(data)
        authMe(data)
    }

    return <div class={styles.main}>
        <h1>Введіть свої дані</h1>
        <ReduxAuthForm onSubmit={submitFormData}/>
    </div>
}

const ReduxAuthForm = reduxForm({form: 'auth'})(AuthForm)

export default AuthPageMarkup