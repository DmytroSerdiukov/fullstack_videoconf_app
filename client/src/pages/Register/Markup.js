import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import UserAPI from '../../api/api'



const RegisterForm = (props) => {
    const {handleSubmit} = props

    const form = {
        style: {
            height: '50px',
            marginBottom: '20px',
            borderRadius: 5
        }
    }

    const Input = 
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


    const FormField = ({name, placeholder}) => <Field {...form} component={Input} type='text' name={name} placeholder={placeholder} />


    return <form onSubmit={handleSubmit}>
        <h1 style={{
            marginTop: '100px',
            marginLeft: '600px'
        }}>
            Введіть свої дані
        </h1>
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        marginTop: '50px',
        marginLeft: '600px'
    }}>

        <FormField name='firstname' placeholder="Ім`я"/>
        <FormField name='middlename' placeholder='По-батькові'/>
        <FormField name='lastname' placeholder='Прізвище'/>
        <FormField name='email' placeholder='Ел. пошта'/>
        <FormField name='password' placeholder='Пароль'/>
        <FormField name='repeatpassword' placeholder='Повторити пароль'/>
        <Button 
            color='primary' 
            variant='contained'
            type='submit'
            >
                Створити запис
        </Button>
        </div>
    </form>
}


const RegisterPageMarkup = props => {

    const submitFormData = (data) => {
        console.log(data)
        if (data.email === '' || data.password === '') {
            console.error('enter your data')
            return
        }
        UserAPI.registerMe(data)
    }

    return <div>
        <ReduxRegisterForm onSubmit={submitFormData}/>
    </div>
}

const ReduxRegisterForm = reduxForm({form: 'auth'})(RegisterForm)
export default RegisterPageMarkup


