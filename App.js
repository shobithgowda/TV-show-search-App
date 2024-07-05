// src/App.js

import React from 'react';
import './App.css';
import TableComponent from './TableComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Shows Search</h1>
      </header>
      <main>
        <TableComponent />
      </main>
    </div>
  );
}

export default App;
