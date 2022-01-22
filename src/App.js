import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ZoomImage from './components/ZoomImage'
import * as api from './api/AppRequests'
import { API_COUNTER_MENINO, API_COUNTER_MENINA, API_COUNTER_NAMESPACE } from './util/constants'

function App() {
  // Random component
  const Completionist = () => <span>It's Baby time!</span>;
  const [menino, setMenino] = useState(0);
  const [menina, setMenina] = useState(0);
  
  useEffect(() => {
    // Atualiza as contagens da API
    console.log('UseEffect')
  });

  const getCount = (key) => {
    api.getValue(key, API_COUNTER_NAMESPACE)
      .then( ans =>{
        console.log('result', ans)
      })
  }

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
              onClick={()=>{getCount(API_COUNTER_MENINO)}}>
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
