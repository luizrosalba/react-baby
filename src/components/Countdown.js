import React from 'react';
import Container from 'react-bootstrap/Container'
import Countdown from 'react-countdown';
import './Container.css';

function CountComp() {
    const timestamp = 1662951600000;
    var dateObj = new Date(timestamp);
    // Random component
    const Completionist = () => <span>Welcome Ana Clara !</span>;
  
    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        const element =  
        <>
        <div className='align-bottom'>
            <div className='text-caixa-semanas'>  
              Faltam {days/7} semanas
            </div>
            <div className='text-caixa-dias'>  
                <div> {days} dias {hours} horas {minutes} minutos</div> 
            </div>
          </div>
        </>
        return element
      }
    }
    return (
      <Container>
        <Countdown 
          date={dateObj}
          renderer={renderer}
        />
      </Container>
    );
  }
  
  export default CountComp;
  