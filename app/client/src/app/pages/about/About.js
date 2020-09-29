import React,{ Component }  from 'react';
//import Profile from "../../../profile.json";
import Typography from '@material-ui/core/Typography';
import ImgProfile from '../../../../../Images/PlanitLogo.png';
import ExampleComponent from 'react-rounded-image';



export default class About extends Component {
render() {
  const Profile = require ('../../../../../Profiles/'+this.props.profiles+'.json');
  return (
    <div> 
      <div  className="card">
        <div className="card-content" >
          <h3 className="mt-bottom">
          {Profile.basics.name}
          <div style={{float: 'right'}}>
          <img src={ImgProfile} width="100" alt="logo" />
          </div>
          </h3>

          <h4 className="mt-bottom">
          {Profile.basics.position}
          </h4>
          <span >
          <Typography variant="h6" >
             {Profile.basics.summary}
          </Typography>
          </span>
        </div>
      </div>
      <div>
      <div  className="card">
        <div className="card-content" >
        
        Planit Contact: {Profile.basics.name} // {Profile.basics.email} // {Profile.basics.phone} 
 
        </div>
        </div>
      </div>
    </div>

   
  );
}
}