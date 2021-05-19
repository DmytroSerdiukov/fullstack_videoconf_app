import { Button } from '@material-ui/core'
import { TextField } from 'material-ui'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from '../Videoconference/styles.module.css'


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

const MessageForm = (props) => {
    return <form  onSubmit={props.handleSubmit}>
        <div class={styles.leftside}>
            <Field 
                component={Input} 
                type='text' 
                name='message' 
                placeholder='Напишіть повідомлення...'
                // style={{marginLeft: '25px'}}
            />
            <Button
                variant='contained'
                style={{width: '200px',
                marginBottom: '20px',
                marginTop: '20px',
                // marginLeft: '25px'
            }}
                type="submit"
            >
                Підтвердити
            </Button>
        </div>
    </form>
}


const ChatMarkup = (props) => {
    
    const data = data => console.log(data)

    return <>
        <div class={styles.leftside}>
            <div style={{
                border: "1px solid black",
                width: '300px',
                height: '400px',
                overflowX: 'hidden',
                overflowY: 'auto',
                textAlign:'justify',
                margin: 0
            }}
            > 
            </div>
            <ReduxMessageForm onSubmit={data}/>
        </div>
    </>
}

const ReduxMessageForm = reduxForm({form: 'chat'})(MessageForm)

export default ChatMarkup