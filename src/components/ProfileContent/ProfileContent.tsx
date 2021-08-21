import { BackNavigation } from '@components/index';

import { ProfileContentProps } from "./ProfileContent.props";
import styles from './ProfileContent.module.scss';

export const ProfileContent = ({ title, children, ...props }: ProfileContentProps): JSX.Element => {
  return (
    <div {...props} className = {styles.content}>
      <BackNavigation />

      <div className = {styles.content__block}>
        <div className = {styles.content__title}> { title } </div>
        { children }
      </div>

    </div>
  );
};