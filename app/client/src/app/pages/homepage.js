import React from 'react';
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
import { withRouter } from "react-router";
import { lighten, darken, rgba } from 'polished'



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
});

const ctx = require.context('../../../../Profiles', true)
const files = ctx.keys().map(ctx)   

function createSelectItems() {
const ctx = require.context('../../../../Profiles', true)
const files = ctx.keys()    
let fileitems = [] ;
let items = [] ;
let filteredvalues,data = [] ;
{
  ctx.keys().map((item, i) => (
    fileitems.push(item)
  ))
}   
var PATTERN = '.json',
filtered = fileitems.filter(function (str) { return str.indexOf(PATTERN) === -1; });
filteredvalues = filtered.map(s => s.substr(2));

for(var i=0; i<filteredvalues.length; i++)  {
  data.push({label: filteredvalues[i], value: filteredvalues[i]});
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

  // onSubmit = () => {
  //   console.log("Test")
  //   console.log("TESSSSSSSS" + this.state.selectedStream)
  //   const { history } = this.props;
  //   const pathname = '/resume';
  //   const { search } = this.getLocation()
  //   const query = queryString.parse(search)
  //   if (this.state.search) {
  //     query.q = this.state.search
  //   } else {
  //     delete query.q
  //   }
  //   const string = queryString.stringify(query)
  //   console.log(string)
  //   debugger;
  //   history.push({
  //     pathname: '/resume',
  //     search: string ? `?${string}` : ''
  //   });
  //   // router.push({
  //   //   pathname,
  //   //   search: string ? `?${string}` : ''
  //   // })
  // };
 

  getResume = (p1,p2,p3) => {
    // if(history) history.push('/resume');
    const { history } = this.props;

    this.props.history.push({
      pathname: '/resume',
      state: {
        exp: p1.value,
        stream: p2.value,
        resource: p3.value,
      },
    })

  }

  generator = () => {
    const { history } = this.props;
    if (history) history.push('home');
  }

  render() {
    const { classes, history } = this.props;
    const { selectedStream, selectedResource, selectedExperience } = this.state;

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
                onClick = {() => {
                  
                  this.getResume(selectedExperience,selectedStream,selectedResource)}}
              >
                Get Resumes
            </Button>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={this.generator}

              > Create New
            </Button>
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

export default withStyles(useStyles)(Homepage);