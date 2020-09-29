import React, { Component } from 'react';
//import profile from '../../../profile.json';
import moment from "moment";
import Typography from '@material-ui/core/Typography';


class Education extends Component {
  render() {
    const profile = require ('../../../../../Profiles/'+this.props.profiles+'.json');
    return (
      <div className="card">
        <div className="card-content">
          <h4 className="header-font">
            EDUCATION
          </h4>
          {
            profile.education.map((education) => {

              const stDate = moment(education.startDate);
              const tEnd = moment(education.endDate);
              return (
                <React.Fragment key={education.institution}>
                <div className="row mt-top">
                  <div className="col xl4 l4 m6 s12">

                    <h6 className="no-pad mt-bottom">
                      <strong className='company-font'>{education.institution}</strong>
                      <span >
                        <Typography style={{ float: 'right' }} variant="h6" >
                          {education.gpa}
                        </Typography>
                      </span>
                      <br></br>
                      <strong>{education.area}</strong>
                      <br></br>
                      <span className="jobDuration">{stDate.format('YYYY')} - {tEnd.format('YYYY')} </span>

                    </h6>
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

export default Education;


