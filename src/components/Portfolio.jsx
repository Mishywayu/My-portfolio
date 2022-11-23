import '../App.css';

export default function Portfolio() {
    return (
        <div className='portfolio-container'>
            <h1>Projects</h1>
            <hr></hr>
            <div className='projects'>

                <div className='proj-left'>
                    <div className='proj-img'></div>
                    <p>Landing page that allows user to see about, menu and contact information.</p>
                    <div className='proj-links'>
                        <a href=''>See Project</a>
                        <a href='https://github.com/Mishywayu/Menu'>See Source</a>
                    </div>
                </div>

                <div className='proj-right'></div>

            </div>
        </div>
    );
}