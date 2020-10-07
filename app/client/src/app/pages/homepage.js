import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { withRouter, type RouterHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import styled from 'styled-components'
import { lighten, darken, rgba } from 'polished'
import { Bars, Logo, RoundButton, Icon } from '../../common/components'
import { uploadFileAndGenerateResume } from '../../features/form/actions'
import { clearState } from '../actions'
import { clearPreview } from '../../features/preview/actions'
import { hasPrevSession } from '../selectors'
import { colors } from '../../common/theme'
import type { State } from '../types'
import Image1 from '../../../../Images/generic/generic.jpg'



const options = [
  { value: 'Automation', label: 'Automation' },
  { value: 'Performance', label: 'Performance' },
  { value: 'Functional', label: 'Functional' },
  { value: 'Security', label: 'Security' },
];

const experience = [
  { value: '1-3 years', label: '1-3 Years' },
  { value: '3-7 Years', label: '3-7 Years' },
  { value: '10+ Years', label: '10+ Years' },
  { value: '15+ Years', label: '15+ Years' },
];

const Resources = [
  { value: 'Shanavas', label: 'Shanavas' },
  { value: 'Peter', label: 'Peter' },
  { value: 'Sarang', label: 'Sarang' },
  { value: 'John', label: 'John' },

];


const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  submitmargin: {
    margin: theme.spacing(1),
    width: "45%",
  },
});


function createSelectItems() {
  const ctx = require.context('../../../../Profiles', true)
  const files = ctx.keys()
  let fileitems = [];
  let items = [];
  let filteredvalues, data = [];
  {
    ctx.keys().map((item, i) => (
      fileitems.push(item)
    ))
  }
  var PATTERN = '.json',
    filtered = fileitems.filter(function (str) { return str.indexOf(PATTERN) === -1; });
  filteredvalues = filtered.map(s => s.substr(2));

  for (var i = 0; i < filteredvalues.length; i++) {
    data.push({ label: filteredvalues[i], value: filteredvalues[i] });
  }

  return data;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.planittesting.com/au/home">
        Planit Testing
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Buttons = styled(props => <Link />)`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  font-size: 0.875em;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  text-align: center;
  text-decoration: none;
  width: 200px;
  height: 23px;
  margin: 20px 0;
  backgroundColor: '#f50057';
  color: black;
  border-radius: 100px;
  border: 2px solid ${darken(0.1, '#f50057')};
  // box-shadow: 0 0 0 0 ${rgba(colors.primary, 0.7)};
  transition: all 0.4s ease;


  &:active {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06), 0 2px 40px rgba(0, 0, 0, 0.16);
    border-color: ${lighten(0.15, colors.primary)};
    color: ${lighten(0.15, colors.primary)};
  }

  &:focus {
    outline: none;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  background: ${colors.background};

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftSection = Section.extend`
  width: 40%;
  flex-direction: column;
`

const RightSection = Section.extend`
  width: 60%;
`


const Label = Buttons.withComponent('label')
const Input = styled.input`
  display: none;
`

const ResumePreview = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 850px) {
    display: none;
  }
`

const Image = styled.img`
  width: 50%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
  box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background: white;

  &:first-child {
    top: 10em;
    left: -15em;
    z-index: 3;
  }

  &:last-child {
    z-index: 1;
    top: -10em;
    left: 15em;
  }
`

const Footer = styled.footer`
  width: 100%;
  height: 75px;
  background: ${darken(0.02, colors.background)};
  border-top: 1px solid ${colors.borders};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
  color: ${lighten(0.3, colors.background)};

  @media screen and (max-width: 850px) {
    font-size: 0.75em;
  }
`

const Links = styled.div`
  margin-right: 50px;

  @media screen and (max-width: 850px) {
    margin-right: 15px;
  }

  a {
    text-decoration: none;
    color: ${lighten(0.3, colors.background)};
    margin: 0 1em;

    &:hover {
      text-decoration: underline;
    }
  }
`



const LoadWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImportRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const HelpButton = RoundButton.extend`
  position: absolute;
  right: -50px;
  border: none;

  &:hover {
    background: transparent;
    i {
      color: ${colors.primary};
    }
  }

  @media screen and (max-width: 850px) {
    display: none;
  }
`

const ctx = require.context('../../../../Images/generic', true)
const images = ctx.keys().map(ctx)

type Props = {
  hasPrevSession: boolean,
  resumeStatus: string,
  jsonUpload: {
    status?: 'pending' | 'success' | 'failure',
    errMessage?: string
  },
  clearState: () => void,
  clearPreview: () => void,
  uploadFileAndGenerateResume: (file: File) => Promise<void>,
  history: RouterHistory
}

class Homepage extends React.Component {

  state = {
    selectedStream: null,
    selectedExperience: null,
    selectedResource: null,
  };

  handleStreamChange = selectedStream => {
    this.setState(
      { selectedStream },
      () => console.log(`Option selected:`, this.state.selectedStream)
    );
  };
  handleExperienceChange = selectedExperience => {
    this.setState(
      { selectedExperience },
      () => console.log(`Option selected:`, this.state.selectedExperience)
    );
  };
  handleResourceChange = selectedResource => {
    this.setState(
      { selectedResource },
      () => console.log(`Option selected:`, this.state.selectedResource)
    );
  };


  // getResume = (p1, p2, p3) => {
  //   // if(history) history.push('/resume');
  //   const { history } = this.props;

  //   this.props.history.push({
  //     pathname: '/resume',
  //     state: {
  //       exp: p1.value,
  //       stream: p2.value,
  //       resource: p3.value,
  //     },
  //   })

  // }

  getResume = (p1, p2, p3) => {
    // if(history) history.push('/resume');
    const { history } = this.props;

    this.props.history.push({
      pathname: '/resumes/'+ p3.value,
      state: {
        exp: p1.value,
        stream: p2.value,
        resource: p3.value,
      },
    })

  }

  generator = () => {
    const { history } = this.props;
    this.props.clearState()
    window.localStorage.clear()
    if (history) history.push('/generator');
  }

  toastId: *

  onFileUpload = async (e: SyntheticInputEvent<*>) => {
    const { uploadFileAndGenerateResume } = this.props
    const file = e.target.files[0]

    await uploadFileAndGenerateResume(file)
    const { jsonUpload, history } = this.props

    if (jsonUpload.status === 'success') {
      history.push('/generator')
    } else if (jsonUpload.status === 'failure') {
      toast.error(jsonUpload.errMessage, { position: toast.POSITION.TOP_LEFT })
    }
  }

  clearState = () => {
    this.props.clearState()
    window.localStorage.clear()

  }

  render() {
    const { classes, history } = this.props;
    const { selectedStream, selectedResource, selectedExperience } = this.state;
    const {
      hasPrevSession,
      resumeStatus,
      jsonUpload,
      clearPreview
    } = this.props

    // Show loading screen if file is still uploading or if resume is generating
    if (jsonUpload.status === 'pending' || resumeStatus === 'pending') {
      return (
        <LoadWrapper>
          <Bars />
        </LoadWrapper>
      )
    }


    return (
      <div>
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <img src="https://cdn.planittesting.com/planit/media/siteimages/components/planit-logo-140.png" width="50" alt="logo" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Planit Employee Search
          </Typography>

            <form className={classes.form} >
              <Typography variant="h6">
                Stream
          </Typography>
              <Select
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Stream"
                label="Testing Stream"
                name="Stream"
                options={options}
                value={selectedStream}
                onChange={this.handleStreamChange}
              // autoFocus
              />
              <br></br>
              <Typography variant="h6">
                Experience
          </Typography>
              <Select
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Experience"
                label="Testing Experience"
                name="Experience"
                options={experience}
                value={selectedExperience}
                onChange={this.handleExperienceChange}
                autoFocus
              />

              <br></br>
              <Typography variant="h6">
                Resources
          </Typography>
              <Select
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Resources"
                label="Testing Resources"
                name="Resources"
                options={createSelectItems()}
                value={selectedResource}
                onChange={this.handleResourceChange}
                //onChange={handleChange}
                //value={state.Resources}
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // onChange={this.handleSubmit}
                onClick={() => {

                  this.getResume(selectedExperience, selectedStream, selectedResource)
                }}
              >
                Get Resumes
            </Button>

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.submitmargin}
                onClick={this.generator}
                size="small"

              > Create New
            </Button>
            <Label htmlFor="import-json">IMPORT JSON</Label>
              <Input
                id="import-json"
                type="file"
                onChange={this.onFileUpload}
              />


              {/* <Button 
                variant="contained"
                color="secondary"
                className={classes.submitmargin}
                onClick={this.onFileUpload}
                size="small"

              > Import/Edit Profile
            </Button> */}

            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapState(state: State) {
  return {
    hasPrevSession: hasPrevSession(state),
    resumeStatus: state.preview.resume.status,
    jsonUpload: state.form.resume.jsonUpload
  }
}

const mapActions = {
  clearState,
  clearPreview,
  uploadFileAndGenerateResume
}
export default withRouter(connect(mapState, mapActions)(withStyles(useStyles)(Homepage)));