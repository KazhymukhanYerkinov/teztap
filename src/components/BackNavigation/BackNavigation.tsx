import cn from 'classnames';
import { useHistory } from 'react-router-dom';
import { BackNavigationProps } from './BackNavigation.props';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import styles from './BackNavigation.module.scss';

export const BackNavigation = ({ className, ...props }: BackNavigationProps): JSX.Element => {
  const history = useHistory();

  const handleBackNavigation = () => {
    history.goBack();
  }

  return (
    <div {...props} className = {cn(styles.back, className)} onClick = {handleBackNavigation}>
      <ArrowBackIcon />
    </div>
  );
}

