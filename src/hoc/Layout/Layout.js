import React, { Component } from 'react';

import Header from '../../components/Header';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import iconClasses from '../../components/UI/iconfont/iconfont.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {

        return (
            <Aux >
                <Header />
                <main className={classes.Main}>
                    {this.props.children}
                </main>
                {/* <div>© 2020 abnormalperks.net | Build By Jason Chen</div> */}
                {/* <div className={classes.Bottom}>
                    <hr className={classes.Line}/>
                    <div>
                        <div>
                            <a href="https://github.com/CHENJ137" target="_blank" rel="noopener noreferrer"><span className={iconClasses.iconfont}>&#xe718;</span></a>
                            <a href="https://www.linkedin.com/in/jian-chen-2018/" target="_blank" rel="noopener noreferrer"><span className={iconClasses.iconfont}>&#xe600;</span></a>
                            <a href="https://www.facebook.com/key.chan.54" target="_blank" rel="noopener noreferrer"><span className={iconClasses.iconfont}>&#xe635;</span></a>
                            <a href="https://instagram.com/he.is.enberg/" target="_blank" rel="noopener noreferrer"><span className={iconClasses.iconfont}>&#xe6fc;</span></a>
                        </div>
                    </div>
                </div> */}
            </Aux>
        )
    }
}

export default Layout;
