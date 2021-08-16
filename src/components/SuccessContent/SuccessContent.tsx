import cn from 'classnames';
import { useHistory } from 'react-router-dom';
import { authRoutes } from '@shared/routes';
import { SuccessContentProps } from "./SuccessContent.props";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Button } from '@components/Button/Button';

import styles from './SuccessContent.module.scss';


export const SuccessContent = ({ className, children, title, ...props }: SuccessContentProps): JSX.Element => {

  const history = useHistory();

  const goLoginPage = () => {
    history.push(authRoutes.login);
  }

  return (
    <div {...props} className = {cn(styles.success, className)}>
      <div className = {styles.success__content}>
        <CheckCircleIcon style = {{ color: '#3F3F3F', fontSize: '32px' }}/>
        <div className = {styles.success__title}> { title } </div>
        { children }
        <Button fullWidth appearance = 'primary' onClick = { goLoginPage } className = 'm-top--20'> Войти </Button>
      </div>
    </div>
  )
}