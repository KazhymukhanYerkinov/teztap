import cn from 'classnames';
import { LogoProps } from './Logo.props';

import styles from './Logo.module.scss';

export const Logo = ({ className }: LogoProps): JSX.Element => {
  return (
    <div className = {cn(styles.logo, className)}> Tez<span className = {styles.tap}>Tap</span> </div>
  )
}