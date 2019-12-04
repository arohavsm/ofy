import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
  useRouteMatch,
  useLocation
} from "react-router-dom";


import Basics from "./Basics";
import Basics2 from './Basics/basics2'
import Objects from "./Objects";
import Basics3 from './Basics/basics3'

const JavaScript = () => {
	let match = useRouteMatch();
	return (
		<Router>
			<Switch>
				<Route path={`${match.path}/basics`} component={Basics} />
        <Route path={`${match.path}/basics2`} component={Basics2} />
        <Route path={`${match.path}/basics3`} component={Basics3} />
				<Route path={`${match.path}/objects`} component={Objects} />
			</Switch>
		</Router>
	);
};

export default JavaScript;
