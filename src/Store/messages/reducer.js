import { ADD_MESSAGE, ADD_MESSAGE_CHAT } from './actions';


const initialMessages = {
    chat1: [        
        {id: 1, name: 'John Doe', text: 'Hello there'}, 
        {id: 2, name: 'R2-D2', text: 'beeeb-BIP-bep piu'},
    ],
  
    chat2: [        
        {id: 1, name: 'John Doe', text: 'Hello there'}, 
        {id: 2, name: 'C-3PO', text: 'How are you hello '},
    ],
  
    chat3: [        
        {id: 1, name: 'John Doe', text: 'Hello there'}, 
        {id: 2, name: 'BB-8', text: 'wzzz PIU-PIU piiiip'},
    ]
  };


export const messagesReducer = (state = initialMessages, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE:
            return {...state, [payload.chatId] : [...state[payload.chatId], {id: payload.id, name: payload.name, text: payload.text}] }; 
        case ADD_MESSAGE_CHAT:
            return {...state, ...payload};                          
        default:
            return state;
    }
}
