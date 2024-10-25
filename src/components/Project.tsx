import React from "react";
import mock01 from '../assets/images/project1.png';
import mock02 from '../assets/images/project02.png';

import mock07 from '../assets/images/chat.png';
import mock08 from '../assets/images/mock08.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1 style={{ fontFamily: 'Uzicute' } }>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://phihield-mails.vercel.app/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://phihield-mails.vercel.app/" target="_blank" rel="noreferrer"><h2 style={{ fontFamily: 'Uzicute' } }>Phi-Shield Mails</h2></a>
                <p style={{ fontFamily: 'Times New Roman' } }>
                Developed Phishield Mails, a secure email management system with a CORS-enabled API, enhancing cross-origin communication. Integrated AI-driven classification to categorize emails, streamlining the manual review process.</p>
            </div>
            <div className="project">
                <a href="https://lms-flax-pi.vercel.app/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lms-flax-pi.vercel.app/" target="_blank" rel="noreferrer"><h2 style={{ fontFamily: 'Uzicute' } }>L-M-S</h2></a>
                <p style={{ fontFamily: 'Times New Roman' } }>Developed a Library Management System to streamline book organization and reduce paperwork. Created a React-based portal integrated with the college database, improving access and management for over 500 students</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2 style={{ fontFamily: 'Uzicute' } }>Astro Raiders</h2></a>
                <p style={{ fontFamily: 'Times New Roman' } }>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://lets-chat-indol.vercel.app/login" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lets-chat-indol.vercel.app/login" target="_blank" rel="noreferrer"><h2 style={{ fontFamily: 'Uzicute' } }>Lets-Chat</h2></a>
                <p style={{ fontFamily: 'Times New Roman' } }>This is an online chat application that offers real-time messaging and notifications. I developed the entire application using Node.js and React, ensuring a seamless user experience.</p>
            </div>
         
          
          
        </div>
    </div>
    );
}

export default Project;