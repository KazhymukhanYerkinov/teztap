import { userRoutes, appRoutes } from '@shared/routes';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { ChangeEmail, ChangePassword, SuccessEmail, SuccessPassword } from '@pages/index';

const User = () => {
  
  const location = useLocation();

  return (
    <div className='auth-container'>
      <TransitionGroup>
        <CSSTransition key = { location.key } timeout = { 300 } classNames = 'fade'>
          <Switch>
            <Route exact path={userRoutes.change_email} component={ChangeEmail} />
            <Route exact path={userRoutes.change_password} component={ChangePassword} />
            <Route exact path={userRoutes.success_email} component={SuccessEmail} />
            <Route exact path={userRoutes.success_password} component={SuccessPassword} />
            <Route path = '*' render = {() => <Redirect to = {appRoutes.profile} />}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default User;