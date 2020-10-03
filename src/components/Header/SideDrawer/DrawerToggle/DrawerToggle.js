import React from 'react';

import classes from './DrawerToggle.css';
import iconClasses from '../../../UI/iconfont/iconfont.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
       <span className={iconClasses.iconfont}>&#xe7f4;</span>
    </div>
);

export default drawerToggle;