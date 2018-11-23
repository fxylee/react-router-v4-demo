import React, {Fragment} from 'react';
import ReactDom from 'react-dom';

import { Router, Route, Switch, Redirect, BrowserRouter, HashRouter, Link, NavLink } from 'react-router-dom';

const Home = (arg) => {
  return (
    <Fragment>
      <h1>Home</h1>
      <Link to="/users">To Users</Link>
    </Fragment>
  );
};

const Users = (props) => {console.log(props);
  return (
    <Fragment>
      <h1>Users</h1>
      <NavLink to="/users">To Home</NavLink>
    </Fragment>
  );
};

const NoPath = () => <h1>NoPath</h1>;

const Routes = () => {

  const title = 'abc';

  return (
    <Fragment>
      <Route path="/users" component={Users} />
      <Route path="/" component={Home} />
      <Route path="/:id" component={Home} />
      <Route component={NoPath} />
    </Fragment>
  );
};

const SwitchRoutes = () => {
  return (
    <Switch>
      <Route path="/users" component={Users} />
      <Redirect from="/user2" to="/users" />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

const RouterComponent = () => {
  return (
    <BrowserRouter>
      {/*<Routes />*/}
      <SwitchRoutes/>
    </BrowserRouter>
  );
};


ReactDom.render(
  <RouterComponent />,
  document.querySelector('#root')
);
