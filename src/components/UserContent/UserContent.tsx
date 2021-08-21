import React from 'react';
import { Avatar, makeStyles, createStyles, Theme } from '@material-ui/core';

import { UserContentProps } from './UserContent.props';
import styles from './UserContent.module.scss';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    large: {
      margin: '0 auto',
      width: theme.spacing(8),
      height: theme.spacing(8),
    }
  })
);

export const UserContent = ({ update, name, phone, ...props }: UserContentProps): JSX.Element => {

  const classes = useStyles();

  return (
    <div {...props} className = {styles.content}>
      <Avatar alt="Remy Sharp" className = {classes.large} />
      {!update
      ? <React.Fragment>
          <div className = {styles.content__name}> { name } </div>
          <div className = {styles.content__phone}> { phone } </div>
        </React.Fragment> 
      : <React.Fragment>
          <label htmlFor = 'upload-image'  className = {styles.content__label}> Изменить </label>
          <input id = 'upload-image' type = 'file' className = {styles.content__input} />
        </React.Fragment>
      }
    </div>
  );
};