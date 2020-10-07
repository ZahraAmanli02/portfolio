import React, { Component } from 'react';
import Project from './Project';
import './Projects.css';

class Projects extends Component {
    state = { 
        projects: [
            {
                id: 1,
                title: "Portfolio",
                project: "Project 1",
                text: "I used HTML, CSS, Bootstrap, javaScript - React.js",
                href: "https://amanli-zahra.vercel.app/",
                hrefG: "https://github.com/ZahraAmanli02/portfolio.git"
            },
            {
                id: 2,
                title: "Students Portal",
                project: "Project 2",
                text: "I used HTML, CSS, Bootstrap, javaScript - React.js",
                href: "https://students-portal.vercel.app",
                hrefG: "https://github.com/ZahraAmanli02/students_portal.git"
            },
            { 
                id: 3,
                title: "The Enjoy",
                project: "Project 3",
                text: "I used HTML, CSS, Bootstrap, javaScript - React.js",
                href: "https://enjoy-app.vercel.app/",
                hrefG: "https://github.com/ZahraAmanli02/enjoy_app.git"
                },
                {
                id: 4,
                title: "The Color Game",
                project: "Project 4",
                text: "I used HTML, CSS, jQuery, JavaScript",
                href: "https://the-color-game.vercel.app/colorGame.html",
                hrefG: "https://github.com/ZahraAmanli02/the_color_game.git"
                }
        ]
     }
    render() { 
        let project = (
            <div className="projects">
                {
                    this.state.projects.map(project=> {
                        return (
                            <Project 
                                key={project.id}
                                title={project.title}
                                project={project.project}
                                text={project.text}
                                href={project.href}
                                hrefG={project.hrefG} />                    
                        );
                    })
                }
            </div>
        );
        return ( 
            <div >
                {project}
            </div>
         );
    }
}
 
export default Projects;