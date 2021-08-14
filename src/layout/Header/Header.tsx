import { HeaderProps } from './Header.props';
import { Logo } from '@components/index';

import styles from './Header.module.scss';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div {...props} className = {styles.header}> 
      <Logo />
    </div>
  );
}