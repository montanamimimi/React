import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './BotsList.css';
import { useContext } from 'react';
import { ThemeContext } from '../../Utils/ThemeContext';
 
const myBots = [
    {id: 1, name: 'R2-D2'},
    {id: 2, name: 'C-3PO'},
    {id: 3, name: 'BB-8'},

];

export const BotsList = () => {

    const contextValue = useContext(ThemeContext);
    console.log(contextValue);
    
    return (
        <>  
            
            <div class="chats-list">
                <h3> List of chats </h3>
                <List>
                    {myBots.map((bot) => (
                        <ListItem key={bot.id} >
                            <ListItemButton>
                                <NavLink 
                                    style={({ isActive }) => ({ color: isActive ? 'red' : 'blue'})} 
                                    to={`/chats/chat${bot.id}`}>
                                    <ListItemText primary={bot.name} />
                                </NavLink>
                            </ListItemButton>
                        </ListItem>
                        
                    ))}
                </List>
            </div>            
        </>
    )

}

export default BotsList;