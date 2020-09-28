import React  from "react"; 
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from "react-router-dom";
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
  

  const useStyles = makeStyles((theme) => ({
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
  }));
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

export default function Homepage()  {

  
    const classes = useStyles();
    let history = useHistory();
    const getResume = () => history.push('resume');
    const generator = () => history.push('home');
 
    return ( 
        <div>       
        <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <img src="https://cdn.planittesting.com/planit/media/siteimages/components/planit-logo-140.png" width="50" alt ="logo" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Planit Employee Search
          </Typography>
     
          <form className={classes.form} >
          <Typography variant="h7">
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
              options = { options }
              autoFocus
            />
            <br></br>
            <Typography variant="h7">
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
              options = { experience }
              autoFocus
            />

        <br></br>
            <Typography variant="h7">
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
              options = { Resources }
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
              onClick={getResume}

            >
              Get Resumess
            </Button>
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={generator}

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