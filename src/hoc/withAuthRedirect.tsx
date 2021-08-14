import React from 'react';
import { authRoutes } from '@shared/routes';
import { Redirect } from 'react-router-dom';
import { AppContext } from '@context/app.context';

export const withAuthRedirect = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
  return function WithAuthRedirectComponent(props: T): JSX.Element {
    const { isAuth } = React.useContext(AppContext);
    if (!isAuth) return <Redirect to = {authRoutes.login} />
    return <Component {...props} />
  }
}