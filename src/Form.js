import React, { useEffect, useState, useRef } from 'react';
import Messages from './Messages';
import './Form.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const adminName = 'R2-D2';
const adminText = 'beeeb-BIP-bep piu';
const admin2Name = 'C-3PO';
const admin2Text = 'beeeb-xxxBIP-bep piu';
const admin3Name = 'BB-8';
const admin3Text = 'beeeb-zzzzzzBIP-bep piu';

const initialMessages = {
    chat1: [        
        {id: 1, name: 'John Doe', text: 'Hello there'}, 
        {id: 2, name: adminName, text: adminText},
    ],

    chat2: [        
        {id: 1, name: 'John Doe', text: 'Hello there'}, 
        {id: 2, name: admin2Name, text: admin2Text},
    ],

    chat3: [        
        {id: 1, name: 'John Doe', text: 'Hello there'}, 
        {id: 2, name: admin3Name, text: admin3Text},
    ]
};



export const Form = (props) => {

    const chatId = props.chatId;

    const [messageList, setMessage] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [lastAuthor, setLastAuthor] = useState(adminName);    
    const inputRef = useRef();
    const nameRef = useRef();
    const [idCounter, setId] = useState(2);

    useEffect(() => {    
        if (lastAuthor !== adminName) { 
            const timeout = setTimeout( () => {                
                const adminMessage = { id: idCounter + 1, name: adminName, text: adminText};                
                setMessage( (prevArray) => ({...prevArray, [chatId]: [...prevArray[chatId],  adminMessage]}));   
                setLastAuthor(adminName);      
            }, 1500);        
            setId((prevId) => prevId + 1);
            return () => clearTimeout(timeout);
        }    
    }, [lastAuthor]);

    useEffect(() => {
        nameRef.current?.focus();
    }, []);


    const editMessage = (e) => {        
        setNewMessage(e.target.value);
    }

    const editAuthor = (e) => {        
        setNewAuthor(e.target.value);
    }

    const addToList = (e) => {  
        e.preventDefault();    
        const messageObject = {id: idCounter + 1, name: newAuthor, text: newMessage};
        setId((prevId) => prevId + 1);
        setLastAuthor(newAuthor);
        setMessage((prevArray) => ({...prevArray, [chatId] : [...prevArray[chatId], messageObject]}) );   
        setNewMessage('');     
        inputRef.current?.focus();
        
    }
    
    return (
        <>
            <h3>Add new message</h3>
            <form> 
                {/* <input type="text" ref={myRef} /> */}
                <TextField 
                    label="Your name" 
                    variant="outlined" 
                    onChange={editAuthor} 
                    value={newAuthor} 
                    inputRef={nameRef}
                /> 
                <TextField 
                    label="Your message" 
                    variant="outlined" 
                    onChange={editMessage} 
                    value={newMessage} 
                    inputRef={inputRef}
                />                               
                <Button type="submit" variant="outlined" onClick={addToList}>Send message</Button>

            </form>     
            <div class="messages">
                <Messages messageList={messageList[chatId]} />           
            </div>           

        </>
    )

}

export default Form;