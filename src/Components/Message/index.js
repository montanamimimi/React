
export const Message = (props) => {

    return (
        <div class="message" key={props.key}>
            <div class="message-item message__name">{props.name}</div>
            <div class="message-item message__text">{props.text}</div>            
        </div>    
    )
            

}




