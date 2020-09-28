import React,{ Component }  from 'react';
//import Profile from "../../../profile.json";
import Typography from '@material-ui/core/Typography';
import ImgProfile from '../../../Image/shan.jpg';
import ExampleComponent from 'react-rounded-image';



export default class About extends Component {
render() {
  const Profile = require ('../../../../../Profiles/'+this.props.profiles+'.json');
  return (
    <div> 
      <div  className="card">
        <div className="card-content" >
          <h3 className="mt-bottom">
          {Profile.Name}
          <div style={{float: 'right'}}>
                <ExampleComponent
                  image={ImgProfile}
                  roundedColor="#321124"
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="10"
                />
          </div>
          </h3>

          <h4 className="mt-bottom">
          {Profile.Position}
          </h4>
          <span >
          <Typography variant="h6" >
             {Profile.Description}
          </Typography>
          </span>
        </div>
      </div>
      <div>
      <div  className="card">
        <div className="card-content" >
        
        Planit Contact: {Profile.Name} // {Profile.Email} // {Profile.Mobile} 
 
        </div>
        </div>
      </div>
    </div>

   
  );
}
}