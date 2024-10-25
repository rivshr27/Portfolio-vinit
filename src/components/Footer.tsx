import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rivshr27/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/rivshr27/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p style={{ fontFamily: 'Times New Roman' } }>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Vinit Kumar Singh</a> with 💜</p>
    </footer>
  );
}

export default Footer;