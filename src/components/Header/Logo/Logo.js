import React from 'react';

import myLogo from '../../../assets/images/seer.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <a href='/'><img src={myLogo} alt="AP" /></a>
    </div>
);

export default logo;