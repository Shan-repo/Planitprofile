import React, { Component } from 'react';
import pic from '../../../../../Images/PlanitProject.png';
import moment from "moment";
import Typography from '@material-ui/core/Typography';

function renderImage(value) {
console.log("Paased value"+value)
  if ("yes"===value) {
      return (
          <img style={{ float: 'right' }} src={pic} />
      );
  }
}

class Experience extends Component {
  render() { 
    const profile = require ('../../../../../Profiles/'+this.props.profiles+'.json');
    return (
      <div className="card">
        <div className="card-content">
          <h4 className="header-font">
            EXPERIENCE
          </h4>
          {
            profile.work.map((experience) => {
              const startDate = moment(experience.startDate);
              const timeEnd = moment(experience.currentJob ? new Date() : new Date(experience.endDate));
              return (
                <React.Fragment key={experience.company}>
                <div className="row mt-top">
                  <div className="col xl4 l4 m6 s12">
                
                   
                    <h6 className="no-pad mt-bottom">
                          <strong className='company-font'>{experience.company}</strong>
                          {renderImage(experience.isplanitEngagement)}
                          <br></br>
                          <strong>{experience.position}</strong>
                          <br></br>
                          <span>
                            <span className="jobDuration">{startDate.format('MMM YYYY')} - {experience.currentJob ? 'Present' : timeEnd.format('MMM YYYY')}</span>
                          </span>
                        </h6>
                        <span >
                          <Typography variant="h6" >
                          {experience.projectdescription}
                          </Typography>
                        </span>
                        <br></br>
                          <strong>Roles & Responsibilities</strong>
                        <br></br>

                    {experience.highlights.map(function (role, i) {
                     
                      return <React.Fragment key={i}>
                       
                        <p><strong>{role}</strong></p>
                      </React.Fragment>
                    })}
                  </div>
                </div>
                </React.Fragment>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Experience;
