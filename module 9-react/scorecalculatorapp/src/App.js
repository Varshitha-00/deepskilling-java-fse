import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Student Management Portal</h1>
      <CalculateScore
        name="John Doe"
        school="Springfield High"
        total={480}
        goal={500}
      />
    </div>
  );
}

export default App;
