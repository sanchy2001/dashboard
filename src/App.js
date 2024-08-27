import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Dashboard categories={data.categories}/>
    </div>
  );
}

export default App;