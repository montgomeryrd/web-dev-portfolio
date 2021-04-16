import './Footer.css';

const Footer = () => {
    const copyEmailAddress = () => {
        const emailAddress = document.querySelector('.email-text');
        const textArea = document.createElement('textarea');
        textArea.value = emailAddress.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('Copy');
        textArea.remove();
    };

    const copiedAlert = () => {
        const alert = document.querySelector('.copied-box');
        setTimeout(() => {
            alert.style = 'display: block';
        }, 1000);
    }
    
    return (
        <footer className="desktop mobile">
            <div className="footer-container">
                <section className="email">
                    <div className="copied-box">
                        <div className="copied-speech-bubble">
                            <span className="copied-alert">copied</span>
                        </div>
                        <div className="copied-speech-bubble-triangle"></div>
                    </div>
                    <span className="email-text" onClick={() => copyEmailAddress()}>montgomery_rd@yahoo.com</span>
                </section>
                <section className="footer-fontawesome-icons">
                    <a className="ml-3 p-3" href="https://github.com/montgomeryrd" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-alt"></i>
                    </a>
                
                    <a className="p-3" href="https://www.linkedin.com/in/montgomeryrd/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
            
                    <a className="p-3" href="https://twitter.com/richard04755318" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </section>
            </div>
        </footer>
    )
}

export default Footer
