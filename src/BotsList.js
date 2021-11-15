import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const BotsList = () => {

    const myBots = [
        {id: 1, name: 'R2-D2'},
        {id: 2, name: 'C-3PO'},
        {id: 3, name: 'BB-8'},
        {id: 4, name: 'D-0'}
    ];
    
    return (
        <>
           <List aria-label="contacts">
               {
                myBots.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemButton>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                                  
                    </ListItem>
                ))}               
           </List>
        </>
    )

}

export default BotsList;