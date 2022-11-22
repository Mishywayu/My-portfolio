import '../App.css';

export default function Contact() {
    return (

        <div className='contact-container'>
            <h1> Contact</h1>
            <hr></hr>
            <p>Have a question or want to work together?</p>

            <div className='contact-box'>
                <form>
                    <input type="text" className='field' placeholder='Your name' />
                    <input type="email" className='field' placeholder='Email' />
                    <textarea className='field textarea'>Your message</textarea>
                    <button type='button' className='contact-btn'>Submit</button>
                </form>
            </div>
        </div>
    );
}