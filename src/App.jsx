
import './App.scss';
import Contact from './components/main/Contact';
import Intro from './components/main/Intro';
import Portfolio from './components/main/Portfolio';
import Teaching from './components/main/Teaching';
import Works from './components/main/Works';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Teaching/>
        <Contact/>

      </div>
      </div>
  );
}

export default App;
