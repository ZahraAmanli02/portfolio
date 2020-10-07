import React from 'react';
import Typed from 'react-typed';
import './About.css';

const About = () => {
    return ( 
        // <div className="about">
        //         <h1>About me</h1>
        //         <p style={{textAlign:"justify", textIndent:"2%"}}>My name is Zahra. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        // </div>
        <div className="about">
        <div>
            <h1><Typed className="home__text" strings={["ZAHRA AMANLI"]} typeSpeed={40} /></h1>
        </div>
        <div style={{marginTop:"30px"}}>
            <p className="about_text"><b>BIRTH DATE:</b> 14.04.1998</p>
            <p className="about_text"><b>GENDER:</b> Female</p>
            <p className="about_text"><b>NATIONALITY:</b> Azerbaijani</p>
        </div>
        <div style={{marginTop:"30px"}}>
            <h2><Typed className="home__text" strings={["EDUCATION:"]} typeSpeed={40} /></h2>
        </div>
        <div style={{marginTop:"30px"}}>
            <p className="about_text"><b>Bachelor of Science (BSC)(2015-2020)</b> Baku Engineering University, Faculty of Engineering, Major: Information Technology and Systems </p>
            <p className="about_text"><b>Secondary school (2011 - 2015) </b> Technical Humanitarian Lyceum, Baku</p>
            <p className="about_text"><b>Secondary school (2007 - 2011) </b> ERA, Baku</p>
            <p className="about_text"><b>Secondary school (2004 - 2007) </b> №247, Bakub</p>
        </div>
        <div style={{marginTop:"30px"}}>
            <h2><Typed className="home__text" strings={["LANGUAGES:"]} typeSpeed={40} /></h2>
            <ul >
                <li><b>Azerbaijani</b> <i>Native</i></li>
                <li><b>English</b> <i>Intermediate</i></li>
                <li><b>Turkish</b> <i>Advanced</i></li>
                <li><b>German</b> <i>Beginner</i></li>         
            </ul> 
        </div>   
        <div>
            <h2><Typed className="home__text" strings={["CERTIFICATES:"]} typeSpeed={40} /></h2>
        </div>
        <div style={{marginTop:"30px"}}>
            <p className="about_text"><b>"React - The Complete Guide with React Hook Redux"</b>, Udemy, 2020 </p>
            <p className="about_text"><b>"Makers’ days 2017"</b>, Baku Engineering University, 2017 </p>
            <p className="about_text"><b>"Karl Popper Debate"</b>, Qafqaz University, 2015 </p>
            <p className="about_text"><b>"Intellectual game"</b>, Secondary school ERA, 2008 </p>
            <p className="about_text"><b>"Writing Competitions”:</b>, Secondary school ERA, 2007 </p>
        </div>    
        
    </div>
    );
}
 
export default About;