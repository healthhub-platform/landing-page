// App.js
import React from 'react';
import './App.css'
import EmailForm from './components/EmailForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Health Hub</h1>
        <p>Are you pre-health? 
          <br></br>
          Do you want to build community?
        </p>
      </header>
      <EmailForm />
    </div>
  );
}

export default App;
