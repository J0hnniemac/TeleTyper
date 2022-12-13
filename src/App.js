
import './App.css';
import TeleTyper from './components/TeleTyper';
import {openingText} from './components/TeleTyperData'


function App() {
  const teleTypeClickHandler = () => {
    console.log("You clicked the text");
  }
  return (
    <div>
      <TeleTyper text={openingText} characterDelay={100} teleTypeClickHandler={teleTypeClickHandler} />
    </div>
  );
}

export default App;
