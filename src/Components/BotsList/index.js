import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './BotsList.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addChat, deleteChat } from '../../Store/chats/actions';
import { addMessageChat } from '../../Store/messages/actions';
import { chatsList } from '../../Store/chats/selectors';

export const BotsList = () => {

    const dispatch = useDispatch();
    const myBots = useSelector(chatsList);    
     
    const [value, setValue] = useState();
    const handleChange = (e) => {
        setValue(e.target.value);        
    }

    const createChat = (e) => {
        e.preventDefault();
        setValue('');       
        let newId = `chat${Date.now()}`;
        dispatch(addChat({id: newId, name: value, message: 'Vzzzzzz'}));       
        
        let newMessagesChat = {};
        newMessagesChat[newId] = 
            [        
                {id: 1, name: value, text: 'Vzzzzzz'},                 
            ]
        

        dispatch(addMessageChat(newMessagesChat));      
    }
    const deleteChatItem = (e) => {        
        dispatch(deleteChat(e.target.id));   
    }
    
    return (
        <>  
            
            <div class="chats-list">
                <h3> List of chats </h3>
                <List>
                    {myBots.map((bot) => (
                        <ListItem 
                        key={bot.id} 
                        >
                            <ListItemButton>
                                <NavLink                                    
                                    to={`/chats/${bot.id}`}>
                                    <ListItemText primary={bot.name} />
                                </NavLink>
                            </ListItemButton>
                            <p onClick={deleteChatItem} id={bot.id} class="delete-p">
                                X
                            </p>
                        </ListItem>
                        
                    ))}
                </List>

                <h3>Add new chat</h3>
                <form onSubmit={createChat}> 
                    <TextField 
                        label="Bots name" 
                        variant="outlined" 
                        onChange={handleChange} 
                        value={value}                         
                    />                               
                    <Button type="submit" variant="outlined" >Create Chat</Button>
                </form>
            </div>            
        </>
    )

}

export default BotsList;