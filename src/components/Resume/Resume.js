import React from 'react';
import Typed from 'react-typed';
import './Resume.css';

const Resume = () => {
    return ( 
        <div className="resume">
        <h1 style={{textAlign:"center"}}><Typed className="home__text" strings={["RESUME"]} typeSpeed={40} /></h1>
        <h2><Typed className="home__text" strings={["FRONT-END SKILLS:"]} typeSpeed={40} /></h2>
        <div className="resume__container">
            <div className="group">
                <h3>Programming Languages:</h3>
                <ul>
                    <li>HTML/HTML5</li>
                    <li>CSS/CSS3</li>            
                    <li>JavaScript</li>            
                </ul>
            </div>
            <div className="group">
                <h3>Frameworks/Libraries:</h3>
                <ul >
                    <li>JQuery</li>
                    <li>Bootstrap 3/4</li>            
                    <li>React </li> 
                    <li>Redux</li>           
                </ul>
            </div>
            <div className="group">
                <h3>Tools/Platforms:</h3>
                <ul >
                    <li>Git/GitHub</li>
                    <li>NodeJS</li>            
                    <li>Yarn</li>            
                    <li>Photoshop</li> 
                    <li>Firebase</li>           
                </ul> 
            </div>  
        </div>

        <h2><Typed className="home__text" strings={["EXPERIENCE:"]} typeSpeed={40} /></h2>
        <div className="resume__container">
            <div>
                <h3>Business Analyst/Product Owner, Sourced Agile MMC, 25.10.2019 – 20.05.2020</h3>
                <p>A Joint project with other vendors in analyzing of etender.gov.az (for ASAN Agency EGov) and procure.az. etender.gov.az and procure.az is the procurement automation system in public and private sector, respectively. The project consists of many module of procurement process, such as creating tender, adding lots and etc.  </p>
                <h3>Main Responsibilities: </h3>
                <p>Communication with Product Owners, Analyzing Modules and Business Processes, Mapping Business Processes, Creating Overall User Stories, Analyzing Master Data, Creating Mock Up of UI of the pages, Reverse Engineering of available systems into User Story format.</p>
            </div>
        </div> 
        </div>
    );
}
 
export default Resume;