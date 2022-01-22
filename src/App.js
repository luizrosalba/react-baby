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
    api.getValue(API_COUNTER_MENINO, API_COUNTER_NAMESPACE)
    .then( ans =>{
      setMenino(ans)
    })

    api.getValue(API_COUNTER_MENINA, API_COUNTER_NAMESPACE)
    .then( ans =>{
      setMenina(ans)
    })

  });

  const updateKeyValue = (key) => {
    api.updateKeyValue(key, API_COUNTER_NAMESPACE , 1)
      .then( ans =>{
        key===API_COUNTER_MENINO?setMenino(ans.value):setMenina(ans.value);
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
              style={{color:"#00005c", color: "white", fontSize:"30px", margin: "10px", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} outline
              onClick={()=>{updateKeyValue(API_COUNTER_MENINO)}}>
                Menino
            </Button>
            <Button
              style={{backgroundColor:"#FFB6C1", fontSize:"30px", color: "white", margin: "10px", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} outline
              onClick={()=>{updateKeyValue(API_COUNTER_MENINA)}}>
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
