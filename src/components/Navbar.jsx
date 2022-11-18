import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='header'>
            <Router>
                <nav>
                  <input type="checkbox" id="check" />
                  <label for="check" className='checkbtn'>
                  <i className='fas fa-bars'></i>
                  </label>
                    <label className='logo'>Michelle</label>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li> <a href='/portfolio'>Portfolio</a></li>
                        <li><a href='/podcast'>Podcast</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </nav>
            </Router>
        </div>
    );
}