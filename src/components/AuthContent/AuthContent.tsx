import { AuthContentProps } from './AuthContent.props';
import { BackNavigation, Logo } from '@components/index';

import styles from './AuthContent.module.scss';

export const AuthContent = ({ children }: AuthContentProps): JSX.Element => {
  return (
    <div className = {styles.content}>
      <BackNavigation className = {styles.content__back} />
      
      <div className = {styles.content__block}>
        <Logo className = {styles.content__logo} />
        { children }
      </div>

    </div>
  );
}

