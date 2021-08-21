import { userRoutes, appRoutes } from '@shared/routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ChangeEmail, ChangePassword, SuccessEmail, SuccessPassword } from '@pages/index';

const User = () => {
  return (
    <div className='auth-container'>
      <Switch>
        <Route exact path={userRoutes.change_email} component={ChangeEmail} />
        <Route exact path={userRoutes.change_password} component={ChangePassword} />
        <Route exact path={userRoutes.success_email} component={SuccessEmail} />
        <Route exact path={userRoutes.success_password} component={SuccessPassword} />
        <Route path = '*' render = {() => <Redirect to = {appRoutes.profile} />}/>
      </Switch>
    </div>
  );
}

export default User;