import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Countdown from 'react-countdown';

function CountComp() {
    const timestamp = 1660262400000;
    var dateObj = new Date(timestamp);
    // Random component
    const Completionist = () => <span>You are good to go!</span>;
  
    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <span>Faltam {days} dias {hours} horas {minutes} minutos {seconds} segundos </span>;
      }
    };
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Container>
          <Row>
            <Col> 
              <Countdown 
                date={dateObj}
                renderer={renderer}
              />
            </Col>
          </Row>
        </Container>
  
        </header>
      </div>
    );
  }
  
  export default CountComp;
  