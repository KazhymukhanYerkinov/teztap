import cn from 'classnames';
import { DescriptionProps } from './Description.props';

import styles from './Description.module.scss';

export const Description = ({ children, className, position = 'left', size = 'medium', ...props }: DescriptionProps): JSX.Element => {
  return (
    <div className = {cn(styles.description, className, {
      [styles.medium]: size === 'medium',
      [styles.small]: size === 'small',
      [styles.left]: position === 'left',
      [styles.center]: position === 'center',
      [styles.right]: position === 'right',
    })} {...props}>
      {children}
    </div>
  );
}

