import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>        
        <NavigationItem link="/Blog" exact>Blog</NavigationItem>
        <NavigationItem link="/Lab" exact>Lab</NavigationItem>        
        <NavigationItem link="/About" exact>About</NavigationItem>
    </ul>
);

export default navigationItems;