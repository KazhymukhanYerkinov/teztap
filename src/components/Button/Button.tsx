import cn from 'classnames';
import { ButtonProps } from "./Button.props";

import styles from './Button.module.scss'; 

export const Button = ({ appearance, children, fullWidth, isLoading, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className = {cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.outline]: appearance === 'outline',
      [styles.loading]: isLoading,
      [styles.fullWidth]: fullWidth
    })} disabled = {isLoading} {...props}>

      {isLoading ? 'Загрузка...': children }
      
    </button>
  );
}

