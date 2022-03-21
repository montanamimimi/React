import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './BotsList.css';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteChat } from '../../Store/chats/actions';
import { chatsList } from '../../Store/chats/selectors';
import { onValue, set } from 'firebase/database';
import { chatsRef, getChatMsgsRefById, getChatRefById } from '../../services/firebase'

export const BotsList = () => {

    const [chats, setChats] =  useState([]);
    const dispatch = useDispatch();
    const myBots = useSelector(chatsList);         
    const [value, setValue] = useState();

    useEffect(() => {
        onValue(chatsRef, (chatsSnap) => {            
            const newChats = [];
            chatsSnap.forEach((snapshot) => {                
                newChats.push(snapshot.val());
            });
            setChats(newChats);
        })
    }, []);

    const handleChange = (e) => {
        setValue(e.target.value);        
    }

    const createChat = (e) => {
        e.preventDefault();
        setValue('');       
        let newId = `chat${Date.now()}`;     
        
        set(getChatRefById(newId), { id: newId, name: value, message: 'Vzzzzzz' });
        set(getChatMsgsRefById(newId), {id: 1, name: value, text: 'Vzzzzzz'})

    }
    const deleteChatItem = (e) => {        
        dispatch(deleteChat(e.target.id));   
    }
    
    return (
        <>  
            
            <div class="chats-list">
                <h3> List of chats </h3>
                <List>
                    {chats.map((bot) => (
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