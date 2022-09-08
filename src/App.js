import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name="Ferran"></Greeting>*/}
        <Greetingf name="Ferran"></Greetingf>
      </header>
    </div>
  );
}

export default App;
