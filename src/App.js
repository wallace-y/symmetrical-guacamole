import './App.css';
import TemperatureCounter from './Components/Temperature';

function App() {
  return (
    <div className="App">
      <h1>Temperature controller</h1>
      <p>Increment the temperature using the buttons below.</p>
      <TemperatureCounter />
    </div>
  );
}

export default App;
