import React from 'react'




const MessagesMarkup = ({messages}) => {
    console.log('msg', messages)
    
    const getMessages = (messages) => {
        if (messages === null ||
             messages === undefined) {
            return 'No messages'
        }
        return mesagges
    }
    
    const messageList = getMessages(messages)

    return <div>
        <div>{messageList}</div>
        
    </div>
}

export default MessagesMarkup