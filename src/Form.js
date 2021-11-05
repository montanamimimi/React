import React, { useEffect, useState } from 'react';
import Messages from './Messages';
import './Form.css';

export const Form = () => {
    const amdinName = 'R2D2';
    const adminMessage = { name: amdinName, text: 'beeeb-BIP-bep piu'};
    const [messageList, setMessage] = useState([        
        {name: 'John Doe', text: 'Hello there'}, 
        adminMessage,
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [lastAuthor, setLastAuthor] = useState(amdinName);    

    useEffect(() => {    
        if (lastAuthor !== amdinName) {
            setTimeout( () => {
                setMessage((prevArray) => [...prevArray, adminMessage]);   
                setLastAuthor(amdinName);      
            }, 1500);        
        }    
    }, [lastAuthor]);


    const editMessage = (e) => {        
        setNewMessage(e.target.value);
    }

    const editAuthor = (e) => {        
        setNewAuthor(e.target.value);
    }

    const addToList = (e) => {  
        e.preventDefault();    
        const messageObject = {name: newAuthor, text: newMessage};
        setLastAuthor(newAuthor);
        setMessage((prevArray) => [...prevArray, messageObject]);        
        
    }
    
    return (
        <>
            <h3>Add new message</h3>
            <form onSubmit={addToList}> 
                <input placeholder="Your name" type="text" onChange={editAuthor}/>
                <input placeholder="Your message" type="text" onChange={editMessage}/>
                <input type="submit" />
            </form>                
            <Messages messageList={messageList} />            
        </>
    )

}

export default Form;