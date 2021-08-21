import App from './App';
import Auth from './Auth';
import User from './User';
import { AppContextProvider } from '@context/app.context';
import { appRoutes, authRoutes, userRoutes } from '@shared/routes';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import '@scss/app.scss';


const Root = () => {
  return (
    <AppContextProvider>

      <div className = 'container'>
        <BrowserRouter>
          <Switch>
            <Route path = {appRoutes.root} component = { App } />
            <Route path = {authRoutes.root} component = { Auth } />
            <Route path = {userRoutes.root} component = { User } />
            <Route path = '*' render = {() => (<Redirect to = {appRoutes.root} />)} />
          </Switch>
        </BrowserRouter>
      </div>

    </AppContextProvider>
  )
}

export default Root;