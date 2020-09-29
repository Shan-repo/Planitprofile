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
            profile.skills.map((skill) => {
              return (
                <Accordion key={skill.name} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">{skill.name}</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.skillPanelDetail}>
                    {
                        skill.keywords.map((skillDetail) => {
                            return (
                                <Chip
                                    icon={skillDetail.Hot ? <StarIcon /> : null}
                                    label={skillDetail}
                                    className={styles.skillChip}
                                    color="primary"
                                    key={skillDetail}
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
