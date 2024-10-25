import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1 style={{ fontFamily: 'Uzicute' }}>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Dec 2021 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3
  className="vertical-timeline-element-title"
  style={{ fontFamily: 'Uzi-stylish' }} // Use style prop for inline styling
>
  Student
</h3>

            <h4 className="vertical-timeline-element-subtitle" style={{ fontFamily: 'Times New Roman' } }>Indian Institution of Information Technology , Bhagalpur</h4>
            <p style={{ fontFamily: 'Times New Roman' } }>
             Grade:8.89
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2024 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
                    <h3
  className="vertical-timeline-element-title"
  style={{ fontFamily: 'Uzi-stylish' }} // Use style prop for inline styling
>Full Stack Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ fontFamily: 'Times New Roman' } }>Remote</h4>
            <p style={{ fontFamily: 'Times New Roman' }}>
              Frontend Development, Backend Development, User Experience, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon ={faBriefcase} />}
          >
                   <h3
  className="vertical-timeline-element-title"
  style={{ fontFamily: 'Uzi-stylish' }} // Use style prop for inline styling
>Video Editior</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ fontFamily: 'Times New Roman' } }>Freelancer</h4>
            <p style={{ fontFamily: 'Times New Roman' }}>
            Cinematography ,
           Color Grading,
          Motion Graphics
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
                   <h3
  className="vertical-timeline-element-title"
  style={{ fontFamily: 'Uzi-stylish' }} // Use style prop for inline styling
>Club Member</h3>
            <h4 className="vertical-timeline-element-subtitle"> Web Verse , IIIT Bhagalpur</h4>
            <p style={{ fontFamily: 'Times New Roman' } }>
             HTML , CSS , JavaScript , React.JS , Node.Js , MongoDB
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;





