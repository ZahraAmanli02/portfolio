import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>        
        {/* <Particles canvasClassName="particlesCanva"
          params={{
            particles: {
              number: {
                value: 45,
                density: {
                  enable: false,
                  value_area: 900
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width:1,
                  color: "tomato"
                }
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: true,
                  speed: 8,
                  size_min: 0.1,
                  sync: true
                }
                
              }
            }
          }} /> */}
      </div>
    );
  }
}

export default App;
