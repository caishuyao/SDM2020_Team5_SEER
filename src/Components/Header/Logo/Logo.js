import React from 'react';

import myLogo from '../../../assets/images/seer.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <a href='/'><img src={myLogo} alt="AP" /></a>
        <div>SEER</div>
    </div>
);

export default logo;