import { Drawer, makeStyles } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { DrawerProps } from './Drawer.props';
import styles from './Drawer.module.scss';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%',
    backgroundColor: '#FFFFFF'
  }
}))

export const DrawerComponent = ({ title, drawer, deactivateDrawer, children }: DrawerProps): JSX.Element => {

  const classes = useStyles();

  return (
    <Drawer
      open = {drawer}
      anchor = 'right'
      variant = 'persistent'
      className = {classes.drawer}
      classes = {{ paper: classes.drawerPaper }}>

        <div className = {styles.drawer}>

          <div className = {styles.drawer__header} onClick = {deactivateDrawer}>
            <ArrowBackIosIcon />
            <div className = {styles.drawer__title}> {title} </div>
          </div>

          <div className = {styles.drawer__content}>
            { children }
          </div>
          
        </div>

    </Drawer>
  );
};