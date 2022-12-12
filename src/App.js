
import './App.css';
import TeleTyper from './components/TeleTyper';
import {openingText} from './components/TeleTyperData'


function App() {
  
  return (
    <div>
      <TeleTyper text={openingText} characterDelay={100}/>
    </div>
  );
}

export default App;
