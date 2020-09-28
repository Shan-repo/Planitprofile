import React, { Component } from "react";
import {Card, CardTitle, CardText, Button, CardMenu, IconButton, CardActions,Snackbar} from "react-mdl"
import { IoMdCall,IoMdMail } from "react-icons/io";

class Contact extends Component{
    constructor(props) {
        super(props);
        this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
        this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
        this.state = { isSnackbarActive: false };
      }
    
      handleShowSnackbar() {
        this.setState({ isSnackbarActive: true });
      }
      handleTimeoutSnackbar() {
        this.setState({ isSnackbarActive: false });
      }
   
    render(){
        
        const { isSnackbarActive } = this.state;
        return (

            <div className='contact'>
                {
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}} >
                    <CardTitle className='serviceBanner' style={{color: '#fff', height: '176px', background: 'url(https://cdn.planittesting.com/planit/media/siteimages/backgrounds/training-bg.jpg?ext=.jpg) center / cover'}}>About Us</CardTitle>
                    <CardText >
                        <p tabIndex="0"> At Planit, we are quality specialists. We enable our clients to accelerate their delivery of quality software through our comprehensive range of quality assurance services, training, accelerators and on-demand solutions.</p>
                        <p tabIndex="0"> With offices across Australia, New Zealand, India and the United Kingdom, our 1,500+ strong team includes specialists across functional testing, automation, performance, monitoring, virtualization, devops, agile, accessibility, security and more.</p>
                    </CardText>
                    <CardActions border>
                        <Button raised onClick={this.handleShowSnackbar}>Contact Us</Button>
                        <Snackbar
                  active={isSnackbarActive}
                  onTimeout={this.handleTimeoutSnackbar}>
                      <div>
                      <span><IoMdCall/>&nbsp;
                      <i >+44 203 457 5020</i>
                      </span>
                      </div>
                      <a class="footer_contact_link" href="mailto:info@planittesting.com" tabindex="0">
                          <span ><span class="pi pi-Email"> <IoMdMail/>&nbsp;</span></span><i>info@planittesting.com</i></a>
                  </Snackbar>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                }
            </div>
                         
        );
    }
}

export default Contact;