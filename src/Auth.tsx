import { authRoutes } from '@shared/routes';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { LoginPage, RegisterPage, RecoveryEmail, RecoveryPassword, SuccessRecovery, SuccessRegister } from '@pages/index';

const Auth = () => {

  const location = useLocation();

  return (
    <div className = 'auth-container'>
      <TransitionGroup>
        <CSSTransition key = { location.key } timeout = { 300 } classNames = 'fade'>
          <Switch>
            <Route exact path = { authRoutes.login } component = { LoginPage } />
            <Route exact path = { authRoutes.register } component = { RegisterPage } />
            <Route exact path = { authRoutes.recovery_email } component = { RecoveryEmail } />
            <Route exact path = { authRoutes.recovery_password } component = { RecoveryPassword } />
            <Route exact path = { authRoutes.success_recovery } component = { SuccessRecovery } />
            <Route exact path = { authRoutes.success_register } component = { SuccessRegister }/>
            
            <Route path = '*' render = {() => <Redirect to = {authRoutes.login} />}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Auth;