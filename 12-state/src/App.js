
import './App.css';
import CounterClass from './CounterClass';
import { CounterFunction } from './CounterFunction';
import { Sayfunction } from './Sayfunction';

function App() {
  return (
    <div className="App">
      <CounterClass></CounterClass>
      <hr />
      <CounterFunction value={'Plus 1'}></CounterFunction>
      <hr />
      <Sayfunction></Sayfunction>
     
    </div>
  );
}

export default App;
