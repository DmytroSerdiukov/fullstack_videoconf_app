import { Button, TextField } from '@material-ui/core'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom'
import { io } from 'socket.io-client'


const Message = ({lastMessage, myId, userId}) => {
    return <div style={{height: '100px'}}>
        <div>{lastMessage.myId}</div>
        <div>{lastMessage.body}</div>
        {/* <div>{messages}</div> */}
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

const MessagesMarkup = () => {

    const socket = io.connect('http://localhost:5000')

    const [messages, setMessages] = useState(null)
    console.log(messages)

    useEffect( () => {
        socket.emit('get_messages', {myId: Cookies.get('user')})
    })
    socket.on('get_messages', data => setMessages(data))
    
    // console.log('msg', messages.lastMessage)
    const [form, setForm] = useState(false)
    const getMessages = (messages) => {
        if (messages === null ||
            messages === undefined) {
            // const a = [1,2,3,45]
            // const list = a.map( m => <Message/>)
            return null
            // return 'No messages'
        }
        const list = messages.map( m => <Message
            lastMessage={m.lastMessage}
            myId={m.myId}
            userId={m.userId}    
        />)
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