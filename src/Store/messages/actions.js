export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_CHAT = 'MESSAGES::ADD_MESSAGE_CHAT';


export const addMessage = (newMessage) => ({
    type: ADD_MESSAGE,
    payload: newMessage
});

export const addMessageChat = (newChat) => ({
    type: ADD_MESSAGE_CHAT,
    payload: newChat
});

let timeout;

export const addMessageWithReply = (message) => (dispatch) => {
    dispatch(addMessage(message));     
    
    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {

        const botMessage = {
            id: `mess${Date.now()}`,
            text: message.adminText,
            name: message.adminName,
            chatId: message.chatId,
        }
        dispatch(addMessage(botMessage));    
    }, 1500);

}




