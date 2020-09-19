import React from 'react';

import classes from './Homepage.css';
import Aux from '../../hoc/Aux/Aux';
import Header from '../../Components/Header';

const homePage = () => (
    <Aux>
        <Header/>
        <div className={classes.Content}>
            <div>
                <div className={[classes.Item, classes.fadeIn].join(' ')}>
                    <h1>SEER</h1>
                </div>
            </div>
        </div>
    </Aux>
);

export default homePage;