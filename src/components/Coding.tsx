import React from "react";
import mock01 from '../assets/images/LeetCode.png';
import mock02 from '../assets/images/Codeforces.png';
import mock03 from '../assets/images/Codechef.png';
import mock04 from '../assets/images/GFG.png';

import '../assets/styles/Project.scss';

function Coding() {
    return(
    <div className="projects-container" id="projects">
        <h1 style={{ fontFamily: 'Uzicute' } }>Coding Profiles</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://leetcode.com/u/vinitsingh27/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://leetcode.com/u/vinitsingh27/" target="_blank" rel="noreferrer"><h2 style={{ fontFamily: 'Times New Roman' } }>LeetCode</h2></a>
                {/* <p>Arrays , Strings , Graph ,Dynamic Programming ,
Backtracking ,
Divide and Conquer ,

Trie ,
Stack & Queue and
Segment Tree
 </p> */}
            </div>
            <div className="project">
                <a href="https://codeforces.com/profile/vinitsingh27" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://codeforces.com/profile/vinitsingh27" target="_blank" rel="noreferrer"><h2 style={{ fontFamily: 'Times New Roman' } }>Codeforces</h2></a>
                {/* <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p> */}
            </div>
            <div className="project">
                <a href="https://www.codechef.com/users/rivishr27" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="https://www.codechef.com/users/rivishr27" target="_blank" rel="noreferrer"><h2 style={{ fontFamily: 'Times New Roman' } }>CodeChef</h2></a>
            
            </div>
            <div className="project">
                <a href="https://www.geeksforgeeks.org/user/babyvinp5ip/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                 <a href="https://www.geeksforgeeks.org/user/babyvinp5ip/" target="_blank" rel="noreferrer"><h2 style={{ fontFamily: 'Times New Roman' } }>GeeksforGeeks</h2></a>
               {/* <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p> */}
            </div>

           
          
           
          
            
        </div>
    </div>
    );
}

export default Coding;