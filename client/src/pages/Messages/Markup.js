import { Button } from '@material-ui/core'
import React from 'react'
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
    
    const getMessages = (messages) => {
        if (messages === null ||
             messages === undefined) {
            const a = [1,2,3,45]
            const list = a.map( m => <Message/>)
            return list
            // return 'No messages'
        }
        const list = messages.map( m => <Message/>)
        return list
    }
    
    const messageList = getMessages(messages)

    return <div>
        <div style={{width:'300px', margin: '0 auto', marginTop: '30px'}}>
            {messageList}
        </div>
    </div>
}

export default MessagesMarkup