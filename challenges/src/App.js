import './App.css';
import Challenges from './components/Challenges'; // Import the Challenges component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Challenges Page</h1>
      </header>
      <Challenges /> {/* Render Challenges directly below header */}
    </div>
  );
}

export default App;
