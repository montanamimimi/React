import { ADD_CHAT, DELETE_CHAT } from './actions';


const initialChats = [
    {id: `chat1`, name: 'R2-D2', message: 'beeeb-BIP-bep piu'},
    {id: `chat2`, name: 'C-3PO', message: 'How are you hello '},
    {id: `chat3`, name: 'BB-8', message: 'wzzz PIU-PIU piiiip'},
  ];

export const chatsReducer = (state = initialChats, { type, payload }) => {
    switch (type) {
        case ADD_CHAT:
            return [...state, payload];
        case DELETE_CHAT:
            return state.filter(({id}) => id != payload);   
        default:
            return state;
    }
}