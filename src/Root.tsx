import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Auth from './Auth';
import { appRoutes, authRoutes } from '@shared/routes';

import '@scss/app.scss';
import { AppContextProvider } from '@context/app.context';

const Root = () => {
  return (
    <AppContextProvider>

      <div className = 'container'>
        <BrowserRouter>
          <Switch>
            <Route path = {appRoutes.root} component = { App } />
            <Route path = {authRoutes.root} component = { Auth } />
            <Route path = '*' render = {() => (<Redirect to = {appRoutes.root} />)} />
          </Switch>
        </BrowserRouter>
      </div>

    </AppContextProvider>
  )
}

export default Root;