import './Messages.css';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../Store/messages/selectors';

export const Messages = (props) => {

    const messageList = useSelector(selectMessages);    
    const currentChat = messageList[props.chatId]
    const reverseMessages = currentChat.slice().reverse();

    return reverseMessages.map((item) => (
        <div class="message" key={item.id}>
            <div class="message-item message__name">{item.name}</div>
            <div class="message-item message__text">{item.text}</div>            
        </div>
    ));
}

export default Messages;