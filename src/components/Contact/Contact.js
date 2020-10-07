import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return ( 
        <div className="contact">
            <div>
                <h3>My Email:</h3>
                <h5><address><a href="mailto:zahra.amanova.02@gmail.com">zahra.amanova.02@gmail.com</a></address></h5>
            </div>
            <div>
                <h3>My Phone:</h3>
                <h5>+994 (51) 971 75 55</h5>
            </div>
            {/* <div>
                <h3>My GitHub:</h3>
                <h5><a href="" target="_blank" className="projects__button" style={{textDecoration:"none"}}>GitHub</a></h5>

            </div> */}
        </div>
     );
}
 
export default Contact;