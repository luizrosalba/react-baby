import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import ZoomImage from './components/ZoomImage'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <ZoomImage />
        </Container>
      </header>
    </div>
  );
}

export default App;
