import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { appRoutes } from '@shared/routes';

import { SearchPage, SubsPage, ProfilePage } from '@pages/index';


import { withLayout } from '@layout/Layout';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path = {appRoutes.search} component = { SearchPage } />
        <Route exact path = {appRoutes.subs} component = { SubsPage } />
        <Route exact path = {appRoutes.profile} component = { ProfilePage } />
        <Route path = '*' render = {() => <Redirect to = {appRoutes.search} />}/>
      </Switch>
    </React.Fragment>
  );
}

export default withLayout(App);
