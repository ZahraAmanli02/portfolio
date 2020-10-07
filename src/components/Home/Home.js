import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/zahraAmanli.jpeg';
import Typed from 'react-typed';
import './Home.css';

const Home = () => {
    return ( 
        <div className="container">
                <img className="image" src={Image} alt="Zahra Amanli" />
                <h3 className="title">
                    <Typed className="home__text" strings={["Zahra Amanli"]} typeSpeed={40} /> 
                </h3>
                <h4 className="subtitle">
                    <Typed className="home__text" strings={["Hello" ,"I am a Front-end Developer"]} typeSpeed={40} backSpeed={60} loop/>   
                </h4> 
                <Link className="link_me" to="/about"><span className="home__text material-icons" style={{fontWeight: "bold"}}>perm_identity</span> Learn more about me</Link>
        </div>
     );
}

 
export default Home;