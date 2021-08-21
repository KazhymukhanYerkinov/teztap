import React from 'react';
import { Link } from 'react-router-dom'
import { appRoutes } from '@shared/routes';
import { FooterProps } from "./Footer.props";
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppContext } from '@context/app.context';




const useStyles = makeStyles({
  icon: {
    color: '#8E8E8E'
  },
  activeIcon: {
    color: '#222222',
  },
  stickyBottom: {
    width: '100%',
    maxWidth: '500px',

    position: 'fixed',
    bottom: 0,
    
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)'
  }
});



export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  const classes = useStyles();
  const { page, handlePage } = React.useContext(AppContext);


  return (
    <div {...props}> 
      <BottomNavigation value = { page } onChange = {handlePage!} className = {classes.stickyBottom}>

          <BottomNavigationAction 
            component = { Link }
            to = {appRoutes.search}
            label = 'Поиск'
            icon = {<SearchIcon className = {page === 0 ? classes.activeIcon : classes.icon}/> }  
          />

          <BottomNavigationAction 
            component = { Link }
            to = {appRoutes.subs}
            label = 'Подписка'
            icon = {<AddBoxIcon className = {page === 1 ? classes.activeIcon : classes.icon} /> } 
          />

          <BottomNavigationAction 
            component = { Link }
            label = 'Профиль'
            to = {appRoutes.profile}
            icon = {<AccountCircleIcon className = {page === 2 ? classes.activeIcon : classes.icon}/> }   
          />

      </BottomNavigation>
    </div>
  );
}