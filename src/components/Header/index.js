import React, { useState } from 'react';

import Logo from './Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './Header.css';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';
import SideDrawer from './SideDrawer/SideDrawer';


const header = props => {
    
    // const pageWidth = window.innerWidth;

    // const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    // const sideDrawerClosedHandler = () => {
    //     setSideDrawerIsVisible(false);
    // };

    // const sideDrawerToggleHandler = () => {
    //     setSideDrawerIsVisible(!sideDrawerIsVisible);
    // };

    const desktopHeader = (
        <header className={classes.Header} >
            <Logo />
            <NavigationItems />
        </header>
    );

    // const mobileHeader = (
    //     <header className={classes.Header}>
    //         <DrawerToggle clicked={sideDrawerToggleHandler} />
    //         <Logo />
    //         <SideDrawer
    //             open={sideDrawerIsVisible}
    //             closed={sideDrawerClosedHandler}
    //         />
    //     </header>
    // );

    // let adjustHeader = pageWidth < 769? mobileHeader: desktopHeader;

    return (
        desktopHeader
    );
};

export default header;