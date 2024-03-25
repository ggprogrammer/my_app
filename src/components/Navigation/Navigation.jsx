import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/messages'>Message</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/messages'>News</NavLink>
        </div>      
        <div className={classes.item}>
          <NavLink to='/messages'>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/messages'>Settings</NavLink>
        </div>
      </nav>
    );
} 

export default Navigation