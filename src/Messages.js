import './Messages.css';

export const Messages = (props) => {

    return props.messageList.map((item) => 
        <div class="message">
            <div class="message-item message__name">{item.name}</div>
            <div class="message-item message__text">{item.text}</div>            
        </div>
    );
}

export default Messages;