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
import ReactJS from './ReactJS'
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
          <Route path="/reactjs" component={ReactJS} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
