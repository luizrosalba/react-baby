import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import ZoomImage from './components/ZoomImage'
import AlertDismissible from './components/Alert'
import * as api from './api/AppRequests'
import { API_COUNTER_MENINO, API_COUNTER_MENINA, API_COUNTER_NAMESPACE } from './util/constants'

function App() {
  const [showThanks, setShowThanks] = useState(false);
  
  return (
    <div className="App">
      <header className="App-header">
        <AlertDismissible
          show={showThanks}
          setShowThanks={(val)=>setShowThanks(val)}
        />
        <Container>
          <ZoomImage />
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            height: '90vh'
            }}>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
