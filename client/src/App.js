import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom'
import CSSTUT from './CSS'
import JavaScript from './JavaScript'
import HTMLTUT from './HTML'
import ReactSJ from './ReactJS'
import Nav from './Nav/Nav'
import SideNav, {
	Toggle,
	NavItem,
	NavIcon,
	NavText
} from "@trendmicro/react-sidenav";
import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'emoji-mart/css/emoji-mart.css'

class App extends React.Component {

  render() {
  
    return (
      <Router>
        <Nav />
        <div className="container-fluid position-relative">
        <Switch>
          <Route path="/htmltut" component={HTMLTUT} />
          <Route path="/csstut" component={CSSTUT} />
          <Route path="/js" component={JavaScript} />
          <Route path="/reactjs" component={ReactSJ} />
        </Switch>
        </div>
        {/* <footer>
          <div className="row">
            <div className="col-sm-12">
              <a href="https://www.jshero.net/en/success.html" rel="noopener">JS HERO</a>
              <a href="https://www.jshero.net/en/success.html" rel="noopener">PRACITFY</a>
            </div>
          </div>
        </footer> */}
      </Router>
    );
  }
}

export default App;
