import { useHistory } from 'react-router-dom';
import { BackNavigationProps } from './BackNavigation.props';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import styles from './BackNavigation.module.scss';

export const BackNavigation = ({ ...props }: BackNavigationProps): JSX.Element => {
  const history = useHistory();

  const handleBackNavigation = () => {
    history.goBack();
  }

  return (
    <div {...props} className = {styles.back} onClick = {handleBackNavigation}>
      <ArrowBackIcon />
    </div>
  );
}

