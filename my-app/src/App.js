import logo from './logo.svg';
import './App.css';

function Massage(props) {
  return(
    <div class="browse__box container">
      <div class="browse__button"><p class="browse__link">{props.text}</p></div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="start">
         Start
        </p>
        <Massage text="Name of button"/>
      </header>
    </div>
  );
}

export default App;
