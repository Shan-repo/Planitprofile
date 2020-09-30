import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/homepage';
import Resume from '../pages/resume';
import Contact from '../pages/contact';
import generator from '../pages/Generator';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Loadable from 'react-loadable'
import { ScrollToTop, Loader } from '../../common/components'
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { resumes } from '.';

const LoadableGenerator = Loadable({
  loader: () => import('./Generator'),
  loading: Loader
})

const LoadableHome = Loadable({
  loader: () => import('./Home'),
  loading: Loader
})

const LoadableResume = Loadable({
  loader: () => import('./resume'),
  loading: Loader
})

const LoadableResumes = Loadable({
  loader: () => import('./resumes'),
  loading: Loader
})

export const Main = () => {
  const history = useHistory();
  const getResume = () => history.push('/');


  return (
    <div className="demo-big-content">
      <Layout >
        <Header className="header-color" title="Planit Profiles" scroll onClick={getResume}>
          {/* <Navigation>
            <Link to="/resume">Resume</Link>
            </Navigation> */}
        </Header>
        {/* <Drawer title="Planit Profiles">
            <Navigation>
            <Link to="/resume">Resume</Link>
            </Navigation>
            <Navigation >
            <Link to="/resourceUtilization">ResourceUtilization</Link>
            </Navigation>
        </Drawer> */}
        <Content>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/resume" component={LoadableResume} />
            {/* <Route path="/generator" component={LoadableGenerator} /> */}
            <Route path="/contact" component={Contact} />
            {/* <Route path="/userform" component={userform} />
            <Route path="/resourceUtilization" component={ResourceUtilization} /> */}
            <Route path='/WebSite' component={() => { window.location.replace('https://www.planittesting.com/au/privacy'); return null; }} />
            <Route path='/terms' component={() => { window.location.replace('https://www.planittesting.com/au/terms-conditions'); return null; }} />
          </Switch>

        </Content>
        <Footer size="mini">
          <div style={{ float: 'left' }}><img src="https://cdn.planittesting.com/planit/media/siteimages/components/planit-logo-140.png" width="50" alt="logo" /></div>
          <FooterSection type="right">
            <FooterLinkList>
              <Link to="/contact">Contact</Link>
              <a target="_blank" href="/terms">Terms & Conditions</a>
              <a target="_blank" href="/WebSite">Privacy</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>

  );

}

export const PublicLayout = (props) => {

  return (
    <div className="demo-big-content">
      <Layout >
        <Content>
          <Switch>
            {/* <Route path="/home" component={LoadableHome} /> */}
            <Route path="/generator" component={LoadableGenerator} />
          </Switch>
        </Content>
      </Layout>
    </div>

  );



}

export const HomeLayout = (props) => {
  const history = useHistory();
  const getResume = () => history.push('/');
  return (
    <div className="demo-big-content">
    <Layout >
        <Header className="header-color" title="Planit Profiles" scroll onClick={getResume}>
        </Header>
      <Switch>
        <Route path="/home" component={LoadableHome} />
      </Switch>
      </Layout>
    </div>
    

  );
}

export const ResumeLayout = (props) => {
  const history = useHistory();
  const getResume = () => history.push('/');


  return (
    <div className="demo-big-content">
      <Layout >
        <Header className="header-color" title="Planit Profiles" scroll onClick={getResume}>
          {/* <Navigation>
            <Link to="/resume">Resume</Link>
            </Navigation> */}
        </Header>
        {/* <Drawer title="Planit Profiles">
            <Navigation>
            <Link to="/resume">Resume</Link>
            </Navigation>
            <Navigation >
            <Link to="/resourceUtilization">ResourceUtilization</Link>
            </Navigation>
        </Drawer> */}
        <Content>
          <Switch>
            <Route path="/resume" component={LoadableResume} />            
          </Switch>

        </Content>
        <Footer size="mini">
          <div style={{ float: 'left' }}><img src="https://cdn.planittesting.com/planit/media/siteimages/components/planit-logo-140.png" width="50" alt="logo" /></div>
          <FooterSection type="right">
            <FooterLinkList>
              <Link to="/contact">Contact</Link>
              <a target="_blank" href="/terms">Terms & Conditions</a>
              <a target="_blank" href="/WebSite">Privacy</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>

  );
}


export const ResumesLayout = (props) => {
  const history = useHistory();
  const getResume = () => history.push('/');


  return (
    <div className="demo-big-content">
      <Layout >
        <Header className="header-color" title="Planit Profiles" scroll onClick={getResume}>
          {/* <Navigation>
            <Link to="/resume">Resume</Link>
            </Navigation> */}
        </Header>
        {/* <Drawer title="Planit Profiles">
            <Navigation>
            <Link to="/resume">Resume</Link>
            </Navigation>
            <Navigation >
            <Link to="/resourceUtilization">ResourceUtilization</Link>
            </Navigation>
        </Drawer> */}
        <Content>
          <Switch>
            <Route exact path='/resumes/:resource'  component={resumes} />            
          </Switch>

        </Content>
        <Footer size="mini">
          <div style={{ float: 'left' }}><img src="https://cdn.planittesting.com/planit/media/siteimages/components/planit-logo-140.png" width="50" alt="logo" /></div>
          <FooterSection type="right">
            <FooterLinkList>
              <Link to="/contact">Contact</Link>
              <a target="_blank" href="/terms">Terms & Conditions</a>
              <a target="_blank" href="/WebSite">Privacy</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>

  );
}

export default { Main, PublicLayout, ResumeLayout, ResumesLayout };


