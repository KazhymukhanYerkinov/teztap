import { Switch, Route } from 'react-router-dom';
import { authRoutes } from '@shared/routes';
import LoginPage from '@pages/login-page';

const Auth = () => {
  return (
    <div className = 'auth-container'>
      <Switch>
        <Route exact path = { authRoutes.login } component = { LoginPage }/>
      </Switch>
    </div>
  );
}

export default Auth;