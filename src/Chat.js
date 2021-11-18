import BotsList from './BotsList';
import Form from './Form';
import { useParams } from 'react-router-dom';

export const Chat = () => {        

  return (
    <div className="App">
      <div class="app-list">
        <BotsList />
      </div>
      <div class="app-main">
          <h3>Lets chat! </h3>          
          <Form chatId={useParams().chatId} />
      </div>      
    </div>
  );

}

export default Chat;