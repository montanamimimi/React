import React, { useEffect, useState } from 'react';
import Messages from './Messages';
import './Form.css';

export const Form = () => {
    const [messageList, setMessage] = useState([        
        {name: 'John Doe', text: 'Hello there'}, 
        {name: 'R2D2', text: 'beeeb-BIP-bep piu'},
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [lastAuthor, setLastAuthor] = useState('R2D2');    

    useEffect(() => {    
        if (lastAuthor !== 'R2D2') {
            setTimeout( () => {
                setMessage((prevArray) => {                
                    let newArray = prevArray.slice();
                    newArray.push({ name: 'R2D2', text: 'beeeb-BIP-bep piu'});            
                    return newArray;
                });   
                setLastAuthor('R2D2');      
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
        let messageObject = {};
        messageObject.name = newAuthor;    
        messageObject.text = newMessage;  
        
        setLastAuthor(newAuthor);
        
        setMessage((prevArray) => {            
            let newArray = prevArray.slice();
            newArray.push(messageObject);            
            return newArray;
        });        


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