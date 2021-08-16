import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes } from '@shared/routes';

import LoginPage from '@pages/auth/login-page';
import RegisterPage from '@pages/auth/register-page';
import RecoveryEmail from '@pages/auth/recovery-email';
import RecoveryPassowrd from '@pages/auth/recovery-password';

const Auth = () => {
  return (
    <div className = 'auth-container'>
      <Switch>
        <Route exact path = { authRoutes.login } component = { LoginPage } />
        <Route exact path = { authRoutes.register } component = { RegisterPage } />
        <Route exact path = { authRoutes.recovery_email } component = { RecoveryEmail } />
        <Route exact path = { authRoutes.recovery_password } component = { RecoveryPassowrd } />
        <Route path = '*' render = {() => <Redirect to = {authRoutes.login} />}/>
      </Switch>
    </div>
  );
}

export default Auth;