import Tasks from './components/Tasks.js';

import InsertTask from './components/InsertTask.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <InsertTask />
      <Tasks />
      </header>
    </div>
  );
}

export default App;
