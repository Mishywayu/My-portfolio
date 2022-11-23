import '../App.css';
import About from './About';

export default function Home() {
    return (
        <div className='home-container'>
            <h2>Hello, I'm <span className='special-text home-special'>Michelle Wayua</span> , <br />
                I'm a Front-End Developer.</h2>
            <div className='box'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <button className='home-btn'><a href='/portfolio'>View my work</a></button>
        </div>
    );
}