import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
    <header className={classes.header}>
        <img className={classes.logo} src='https://steamuserimages-a.akamaihd.net/ugc/2040735491767476405/E4F8C72584384CAA8819DE71985528C50BBD95A6/?imw=512&amp;imh=499&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'></img>
    </header>
    );
}

export default Header;