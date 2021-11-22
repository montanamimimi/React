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

