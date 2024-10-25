import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from '../assets/images/IMG_8452.png';
import '../assets/styles/Main.scss';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={profile} className="zoom" alt="thumbnail" width="100%"/></a>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rivshr27" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rivshr27/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1  style={{ fontFamily: 'Times New Roman' } 
        }>Vinit Kumar Singh</h1>
          <p  style={{ fontFamily: 'Uzicute' }}>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/rivshr27" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rivshr27/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;