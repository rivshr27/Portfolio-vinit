import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "Node.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Flask",
    "Python",
    "SQL",
    "MongoDB",
    "Firebase"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Render",
    "Chrome DevTools",
    "Vercel",
  
    // "Linux",
    // "Snowflake",
    // "Pandas",
    // "Selenium",
];

const labelsThird = [
    "DaVinci Resolve",
  
    "Adobe Premiere Pro",
    "Final Cut Pro",
   
    "Color Grading",
    "Sound Design",
    "Music Editing",
    "Audio Mixing",
    "Visual Effects",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1 style={{ fontFamily: 'Uzicute' }}>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3 style={{ fontFamily: 'Uzicute' }}>Full Stack Web Development</h3>
                    <p style={{ fontFamily: 'Times New Roman' }}>I have built a diverse array of web applications from scratch using modern technologies such as React. I have a strong proficiency in frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title" style={{ fontFamily: 'Uzicute' }}>Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3 style={{ fontFamily: 'Uzicute' }}>DevOps & Automation</h3>
                    <p style={{ fontFamily: 'Times New Roman' }}>Once the application is built, I help clients set up DevOps testing and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title" style={{ fontFamily: 'Uzicute' }}>Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faVideoCamera} size="3x"/>
                    <h3 style={{ fontFamily: 'Uzicute' }}>Video Editing</h3>
                    <p style={{ fontFamily: 'Times New Roman' }}>Stay ahead in the industry by utilizing advanced editing techniques and cinematic tools. I have professional experience creating high-quality videos and cinematic content that captivate audiences and tell compelling stories.</p>
                    <div className="flex-chips">
                        <span className="chip-title" style={{ fontFamily: 'Uzicute' }}>Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;