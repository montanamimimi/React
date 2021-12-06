import './Messages.css';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../Store/messages/selectors';
import { Message } from '../Message';

export const Messages = (props) => {

    const messageList = useSelector(selectMessages);    
    const currentChat = messageList[props.chatId]
    const reverseMessages = currentChat.slice().reverse();

    return reverseMessages.map((item) => (
        <Message key={item.id} name={item.name} text={item.text} />
    ));
}

export default Messages;