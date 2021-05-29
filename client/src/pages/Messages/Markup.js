import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom'


const Message = () => {
    // const 
    return <div style={{height: '100px'}}>
        <div>name</div>
        <div>body</div>
        <Link to={'/messages/chat/'}>
            <Button 
                color='primary'
                variant='contained'
            >
                Написати
            </Button>
        </Link>
    </div>
}

const MessagesMarkup = ({messages}) => {
    console.log('msg', messages)
    const [form, setForm] = useState(false)
    const getMessages = (messages) => {
        if (messages === null ||
            messages === undefined) {
            // const a = [1,2,3,45]
            // const list = a.map( m => <Message/>)
            return null
            // return 'No messages'
        }
        const list = messages.map( m => <Message/>)
        return list
    }
    
    const messageList = getMessages(messages)

    return <div>
        <div>
        <Button 
            variant="contained"
            color="primary"
            onClick={() => {
                setForm(!form)
            }}
        >
			Написати повідомлення
		</Button>
        <div style={{
            height: '50px', 
            marginTop: '20px', 
            marginBottom: '20px'}}
        >
            {form ? <TextField placeholder='Напишіть повідомлення...'/> : null}
        </div>
        
        </div>
        <div style={{width:'300px', margin: '0 auto', marginTop: '30px'}}>
            {messageList}
        </div>
    </div>
}

export default MessagesMarkup