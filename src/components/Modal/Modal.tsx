import cn from 'classnames';
import CloseIcon from '@material-ui/icons/Close';

import { ModalProps } from './Modal.props';
import styles from './Modal.module.scss';

export const Modal = ({ children, title, modal, deactivateModal, ...props }: ModalProps): JSX.Element => {
  return (
    <div {...props} className = {cn(styles.modal, {
      [styles.activate]: modal
    })}>
      <div className = {styles.modal__inner}>
        <div className = {styles.modal__close} onClick = {deactivateModal}> <CloseIcon style = {{ color: '#ffffff' }}/> </div>
        <div className = {styles.modal__title}> {title} </div>
        {children}
      </div>
    </div>
  );
};