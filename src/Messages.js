import './Messages.css';

export const Messages = (props) => {

    // Чтобы было привычнее читать чат сделала реверс массива, новые сообщения появляются сверху

    const reverseMessages = props.messageList.slice().reverse();

    return reverseMessages.map((item) => (
        <div class="message" key={item.id}>
            <div class="message-item message__name">{item.name}</div>
            <div class="message-item message__text">{item.text}</div>            
        </div>
    ));
}

export default Messages;