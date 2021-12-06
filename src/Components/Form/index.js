import React, { useEffect, useState, useRef } from 'react';
import Messages from '../Messages';
import './Form.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../Store/messages/actions';


export const Form = (props) => {

    const chatId = props.chatId;    
    const dispatch = useDispatch();

    const [newMessage, setNewMessage] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [lastAuthor, setLastAuthor] = useState('Human');    
    const inputRef = useRef();
    const nameRef = useRef();
    const [idCounter, setId] = useState(2);
    
    const bzzMessageList = useSelector(state => state.messages);

    const [messageList, setMessage] = useState(bzzMessageList);    

    const myBots = useSelector(state => state.chats);

    let currentAdmin = myBots.find( bot => bot.id == chatId);

    useEffect(() => {        
        currentAdmin = myBots.find( bot => bot.id == chatId);                                   
    }, [chatId]);

    useEffect(() => {    
        if (currentAdmin) {
            if (lastAuthor !== currentAdmin.name) { 
                const timeout = setTimeout( () => {                
                    const adminMessage = { chatId: chatId, id: idCounter + 1, name: currentAdmin.name, text: currentAdmin.message};                       
                    dispatch(addMessage(adminMessage));                   
                    setLastAuthor(currentAdmin.name);      
                }, 1500);        
                setId((prevId) => prevId + 1);
                return () => clearTimeout(timeout);
            }    
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
        const messageObject = {chatId: chatId, id: idCounter + 1, name: newAuthor, text: newMessage};
        setId((prevId) => prevId + 1);
        setLastAuthor(newAuthor);              
        dispatch(addMessage(messageObject));  
        setNewMessage('');     
        inputRef.current?.focus();                
    }

    if (!currentAdmin) {
        return <Navigate replace to="/chats" />
    }
    
    return (
        <>            
            <h3>Add new message to {currentAdmin.name} </h3>
            <form> 
                
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
                <Messages chatId={chatId} />           
            </div>           

        </>
    )

}

export default Form;