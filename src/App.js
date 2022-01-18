import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import CountComp from './components/Countdown';
import CarouselComp from './components/Carrousel'

function App() {
  const timestamp = 1660262400000;
  var dateObj = new Date(timestamp);
  // Random component
  const Completionist = () => <span>It's Baby time!</span>;

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
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Container>
          <CountComp />
          <CarouselComp/>
        </Container>
      </header>
    </div>
  );
}

export default App;
