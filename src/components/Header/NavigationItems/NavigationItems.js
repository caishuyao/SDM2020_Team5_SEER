import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';

const navigationItems = ( props ) => (
    <ul className="NavigationItems" > 
        <NavigationItem link="/" exact>Search</NavigationItem>        
        <NavigationItem link='/Submit' exact>Submiter</NavigationItem>     
        <NavigationItem link='/Login' exact>Login</NavigationItem>     
        <NavigationItem link='/Register' exact>Register</NavigationItem>     
        {/* <NavigationItem link="/About" exact>About</NavigationItem> */}
    </ul>
);

export default navigationItems;