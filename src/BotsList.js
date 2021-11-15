import { NavLink } from 'react-router-dom';

const myBots = [
    {id: 1, name: 'R2-D2'},
    {id: 2, name: 'C-3PO'},
    {id: 3, name: 'BB-8'},

];

export const BotsList = () => {

    
    return (
        <>
            <h3> List of chats </h3>
            <ul>
                {myBots.map((bot) => (
                    <li>
                        <NavLink 
                            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue'})} 
                            to={`chat${bot.id}`}>
                                {bot.name}
                        </NavLink>
                    </li>
                    
                ))}
            </ul>
        </>
    )

}

export default BotsList;