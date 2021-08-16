import cn from 'classnames';
import { InputProps } from './Input.props';

import styles from './Input.module.scss';

export const Input = ({ error, errorText, ...props }: InputProps): JSX.Element => {
  return (
    <div className = {styles.inputWrapper}>
      <input className = {cn(styles.input, {[styles.input__error]: error})} {...props} />
      {error && <span className = {styles.inputError}> { errorText } </span>}
    </div>
  );
}

