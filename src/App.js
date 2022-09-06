import logo from './logo.svg';
import './App.css';
import Sum from './components/sum/Sum'

function App() {
  return (
    <div className="App" title='main'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Sum />
    </div>
  );
}

export default App;
