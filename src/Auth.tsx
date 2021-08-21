import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes } from '@shared/routes';

import { LoginPage, RegisterPage, RecoveryEmail, RecoveryPassword, SuccessRecovery, SuccessRegister } from '@pages/index';

const Auth = () => {
  return (
    <div className = 'auth-container'>
      <Switch>
        <Route exact path = { authRoutes.login } component = { LoginPage } />
        <Route exact path = { authRoutes.register } component = { RegisterPage } />
        <Route exact path = { authRoutes.recovery_email } component = { RecoveryEmail } />
        <Route exact path = { authRoutes.recovery_password } component = { RecoveryPassword } />
        <Route exact path = { authRoutes.success_recovery } component = { SuccessRecovery } />
        <Route exact path = { authRoutes.success_register } component = { SuccessRegister }/>
        
        <Route path = '*' render = {() => <Redirect to = {authRoutes.login} />}/>
      </Switch>
    </div>
  );
}

export default Auth;