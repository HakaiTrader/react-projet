import './App.css';
import Home from './Home/Home';
import Steps from './Steps/Steps';
import Slider from './Slider/Slider';
import Chair from './Chair/Chair';
import Meters from './Meters/Meters';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';




function App() {
  return (
    <div className="App">
    <Navbar />
     <Home />,
     <Steps />,
     <Slider />,
     <Chair />,
     <Meters />,
     <Contact />
    </div>
  );
}

export default App;
