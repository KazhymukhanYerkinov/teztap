import React from 'react';
import { appRoutes } from '@shared/routes';
import { withLayout } from '@layout/Layout';
import { SearchPage, SubsPage, ProfilePage } from '@pages/index';
import { Route, Switch, Redirect } from 'react-router-dom';


const App = () => {

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={appRoutes.search} component={SearchPage} />
        <Route exact path={appRoutes.subs} component={SubsPage} />
        <Route exact path={appRoutes.profile} component={ProfilePage} />
        <Route path='*' render={() => <Redirect to={appRoutes.search} />} />
      </Switch>
    </React.Fragment>
  );
}

export default withLayout(App);
