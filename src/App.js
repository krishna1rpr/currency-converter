import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Converter from './Converter';
require('dotenv').config();


function App() {
    return (
      <div className="App">
        <Converter />
      </div>
    );
}

export default App;
