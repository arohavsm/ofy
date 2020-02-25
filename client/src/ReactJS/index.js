import React from 'react'
import { BrowserRouter as Router, Switch, useRouteMatch, Route } from 'react-router-dom'
import Basics from './Basics/index'
import Create from './Basics/create'


function ReactSJ(){

    const match = useRouteMatch()
    return(
      <div>
         <Router>
        <Switch>
          <Route path={`${match.path}/basics`} component={Basics} />
          <Route path={`${match.path}/create`} component={Create} />
        </Switch>
      </Router>
      </div>
    )
}

export default ReactSJ