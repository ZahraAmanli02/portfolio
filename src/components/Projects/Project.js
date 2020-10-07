import React from 'react';
import './Projects.css';

const Project = (props) => {
    return ( 
        <div className="card">
            <h2>{props.title}</h2>
            <h3>{props.project}</h3>
            <p style={{textAlign:"center", margin:"20px", fontWeight:"bold"}}>{props.text}</p>
                <footer>
                    <a href={props.href} target="_blank"><button  className="projects__button">SHOW</button></a>
                    <a href={props.hrefG} target="_blank"><button  className="projects__button">GitHub</button></a>
                </footer>
        </div>
    );
}
 
export default Project;