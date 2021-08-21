import cn from 'classnames';
import { Link } from 'react-router-dom';
import { TagProps } from "./Tag.props";

import styles from './Tag.module.scss';

export const Tag = ({ className, children, size = 'medium', underline, position = 'left', href, ...props }: TagProps): JSX.Element => {
  return (
    <div className = {cn(styles.tag, className, {
      [styles.medium]: size === 'medium',
      [styles.small]: size === 'small',
      [styles.underline]: underline,
      [styles.line]: !underline,
      [styles.left]: position === 'left',
      [styles.center]: position === 'center',
      [styles.right]: position === 'right',
    })} {...props}>
    { href 
    ? <Link  to = {href}> {children} </Link>
    : <> { children } </>}
    </div>
  );
}