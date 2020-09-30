/**
 * @flow
 */

import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Loadable from 'react-loadable'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import { ScrollToTop, Loader } from '../common/components'
import { colors } from '../common/theme'
import NexaBold from './assets/nexa-bold.otf'
import NexaLight from './assets/nexa-light.otf'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { Main, PublicLayout, HomeLayout, ResumeLayout, ResumesLayout } from './pages/main';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  // html, body, #app {
  //   width: 100%;
  //   height: 100%;
  //   margin: 0;
  //   padding: 0;
  //   font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  //   font-size: 0.95em;
  //   background: ${colors.background};
  //   color: ${colors.foreground};
  // }

  ::selection {
    background: ${colors.primary};
    color: white;
  }

  ::-moz-selection {
    background: ${colors.primary};
    color: white;
  }

  .grabbing {
    cursor: move; /* fallback */
    cursor: grabbing;
  }

  @font-face {
    font-family: NexaBold;
    src: url('${NexaBold}') format('opentype');
  }

  @font-face {
    font-family: NexaLight;
    src: url('${NexaLight}') format('opentype');
  }
`

const LoadableHome = Loadable({
  loader: () => import('../app/pages/homepage'),
  loading: Loader
})

const LoadableGenerator = Loadable({
  loader: () => import('../app/pages/Generator'),
  loading: Loader
})

const LoadableAbout = Loadable({
  loader: () => import('../app/pages/About'),
  loading: Loader
})

const LoadableError404 = Loadable({
  loader: () => import('./pages/Error404'),
  loading: Loader
})

const LoadableResume = Loadable({
  loader: () => import('../app/pages/resume'),
  loading: Loader
})

const LoadableContact = Loadable({
  loader: () => import('./pages/contact'),
  loading: Loader
})

function App() {
  return (
    <ScrollToTop>
      <Switch>
        {/* <Route exact path="/" component={LoadableHome} />
        <Route path="/generator" component={LoadableGenerator} />
        <Route path="/about" component={LoadableAbout} />
        <Route path="*" component={LoadableError404} /> */}
        <Route path='/generator' component={PublicLayout} history={useHistory}/>
        <Route path='/home' component={HomeLayout} history={useHistory}/>
        <Route path='/resume' component={ResumeLayout} history={useHistory} />
        <Route exact path='/resumes/:resource' component={ResumesLayout} history={useHistory}/>
        <Route path="/contact" component={Main}history={useHistory}/>
        <Route path='/WebSite' component={() => { window.location.replace('https://www.planittesting.com/au/privacy'); return null; }} />
        <Route path='/terms' component={() => { window.location.replace('https://www.planittesting.com/au/terms-conditions'); return null; }} />
        <Route exact path='/' component={Main} history={useHistory} />
      </Switch>
    </ScrollToTop>
  )
}

export default hot(module)(App)
