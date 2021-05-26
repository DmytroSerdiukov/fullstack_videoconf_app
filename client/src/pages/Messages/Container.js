import React, { useEffect, useState } from 'react';
import MessagesAPI from '../../api/messages';
import MessagesMarkup from './Markup';


const MessagesContainer = () => {

    const [ messages, setMessages] = useState(null)
    // useEffect( () => {
    //     const data = getUserMessages()
    //     setMessages(data)
    // }, [])

    const getUserMessages = async() => {
        const messages = await MessagesAPI.getUserMessages()
    }

    const sendMessageByUserdId = (id, body) => {

    }

    const deleteMessage = () => {

    }
    
    return <MessagesMarkup
        messages={messages}  
    />
}

export default MessagesContainer