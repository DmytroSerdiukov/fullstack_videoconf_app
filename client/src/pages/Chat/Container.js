import React from 'react';
import ChatMarkup from './Markup';

const ChatContainer = () => {
    const InputData = (data) => {
        console.log('data', data)
    }
    return <ChatMarkup onSubmit={InputData}/>
}

export default ChatContainer