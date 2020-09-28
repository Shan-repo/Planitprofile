import React, { Component } from 'react';
//import profile from '../../../profile.json';

import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import StarIcon from '@material-ui/icons/Star';

const styles = {
  skillChip: 'skillChip',
  skillPanelDetail: 'skillPanelDetail'
}

class Skills extends Component {
  render() {
    const profile = require ('../../../../../Profiles/'+this.props.profiles+'.json');
    return (
      <div className="card">
        <div className="card-content">
          <h4 className="header-font">
            CORE SKILLS
          </h4>
          {
            profile.Skills.map((skill) => {
              return (
                <Accordion key={skill.Area} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">{skill.Area}</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.skillPanelDetail}>
                    {
                        skill.SkillSet.map((skillDetail) => {
                            return (
                                <Chip
                                    icon={skillDetail.Hot ? <StarIcon /> : null}
                                    label={skillDetail.Name}
                                    className={styles.skillChip}
                                    color="primary"
                                    key={skillDetail.Name}
                                />
                            );
                        })
                    }
                </AccordionDetails>
            </Accordion>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Skills;
