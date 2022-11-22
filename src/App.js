import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Podcast from './components/Podcast';
import Contact from './components/Contact';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/portfolio":
      component = <Portfolio />
      break
    case "/podcast":
      component = <Podcast />
      break
    case "/contact":
      component = <Contact />
      break
  }
  return (
    <div className="App">
      {/* <Home /> */}
      <Navbar />
      <div>
        {component}
      </div>
    </div>
  );
}

export default App;
