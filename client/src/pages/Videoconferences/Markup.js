import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import {Redirect} from 'react-router-dom'

const Input = (
    { input, label, meta: { touched, error }, ...custom },
  ) => (
    <TextField
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );

const Form = (props) => <form onSubmit={props.handleSubmit}>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        }}>
        <Field 
            component={Input} 
            type='text' 
            name='conferencelabel' 
            placeholder='Назва конференції'
        />
        <Button 
            color='primary'
            variant='contained'
            type='submit'
        >
            Створити конференцію
        </Button>
    </div>

</form>

const Conference = ({label}) => {

    const [redirect, setRedirect] = useState(false)

    return <>{ !redirect ? 
        <>
            <div style={{
                width: '200px',
                height: '100px',
                border: '1px solid black',
                backgroundColor: 'blue',
                borderRadius: '5px',
                color: 'white',
                padding: '10px'
            }}>
                <div style={{marginBottom: '25px'}}>
                    {label}
                </div>
            <Button 
                color='primary'
                variant='contained'
                type='submit'
                onClick={ () => setRedirect(true)}
            >
                Приєднатися до конференції
            </Button>
            </div>

        </>
        : <Redirect to='/video' />
        }
    </>

}

const VideoconferencesMarkup = ({
    conferences,
    createVideoconference
}) => {

    const submit=(data)=>{
        console.log(data.conferencelabel )
        createVideoconference(data.conferencelabel)
    }

    const [visible, setVisible] = useState(true)
    return (<div>
        <div>
            {visible? <ReduxForm onSubmit={submit}/> : null}
        </div>
        <div style={{width: '200px', margin: '0 auto'}}>
            {conferences === null ? 'Nothing' : conferences.map( c => <Conference label={c.conferenceLabel}/>)}
        </div>
    </div>)
}

const ReduxForm = reduxForm({form: 'createconf'})(Form)
export default VideoconferencesMarkup