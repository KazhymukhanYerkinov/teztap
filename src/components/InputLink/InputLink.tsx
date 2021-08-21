import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { InputLinkProps } from './InputLink.props';
import styles from './InputLink.module.scss';

export const InputLink = ({ children, href }: InputLinkProps): JSX.Element => {
  return (
    <Link to = {href} className = {styles.input}>
      <div className = {styles.input__text}> {children} </div>
      <ArrowForwardIosIcon style = {{ color: '#8E8E8E', fontSize: '14px' }}/>
    </Link>
  );
};