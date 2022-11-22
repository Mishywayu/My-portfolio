import '../App.css';

export default function About() {
    return (
        <div className='about-container'>
            <h1 className='h1'>About <span className='special-text'>Me</span></h1>
            <div className='left'>
                <div className='about-img'></div>
            </div>
            <div className='right'>
                <h1>Who is she <span>?</span> </h1>
                <p>I'm a Front-End Developer in Nairobi, Kenya.
                    <br />
                    I have serious passion for UI effects, animations and creating intuitive, dynamic user experience.
                    <br />
                    My goal is to create bold solutions and relevant experiences for users.
                    <br />
                    <a href='/contact'>Let's make something special.</a>
                </p>

                <div className='skills'>
                    <div className="box1">
                        <div className="percent">
                            <svg className='html'>
                                <circle cx={40} cy={40} r={40}></circle>
                                <circle cx={40} cy={40} r={40}></circle>
                            </svg>
                            <div className="number">
                                <h3>95<span>%</span></h3>
                            </div>
                        </div>
                        <h3 className='text'>HTML & CSS</h3>
                    </div>

                    <div className="box1">
                        <div className="percent">
                            <svg className='react'>
                                <circle cx={40} cy={40} r={40}></circle>
                                <circle cx={40} cy={40} r={40}></circle>
                            </svg>
                            <div className="number">
                                <h3>75<span>%</span></h3>
                            </div>
                        </div>
                        <h3 className='text'>React</h3>
                    </div>

                    <div className="box1">
                        <div className="percent">
                            <svg className='js'>
                                <circle cx={40} cy={40} r={40}></circle>
                                <circle cx={40} cy={40} r={40}></circle>
                            </svg>
                            <div className="number">
                                <h3>80<span>%</span></h3>
                            </div>
                        </div>
                        <h3 className='text'>JavaScript</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}