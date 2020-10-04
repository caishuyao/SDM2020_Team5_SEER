import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Search</NavigationItem>        
        <NavigationItem link="/Browse" exact>Browse</NavigationItem>
        <NavigationItem link="/Dashboard" exact>Dashboard</NavigationItem>   
        <NavigationItem link='/Submit' exact>Submiter</NavigationItem>     
        {/* <NavigationItem link="/About" exact>About</NavigationItem> */}
    </ul>
);

export default navigationItems;