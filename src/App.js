import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ZoomImage from './components/ZoomImage'

function App() {
  const timestamp = 1660262400000;
  var dateObj = new Date(timestamp);
  // Random component
  const Completionist = () => <span>It's Baby time!</span>;
  const [menino, setMenino] = useState(0);
  const [menina, setMenina] = useState(0);
  
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{days} dias {hours} horas {minutes} minutos {seconds} segundos </span>;
    }
  };
  useEffect(() => {
    // Atualiza as contagens da API
    
  });
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Container>
          <ZoomImage />
          <div style={{
            display: 'flex',
            justifyContent: 'space-around'
            }}>
            <Button
              onClick={()=>{console.log("Menino")}}>
                Menino
            </Button>
            <Button
              onClick={()=>{console.log("Menina")}}>
                Menina
            </Button>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around'
            }}>
              <div>Bolão Menino: {menino}</div>
              <div>Bolão Menina: {menina}</div>
              
          </div>

        </Container>
      </header>
    </div>
  );
}

export default App;
