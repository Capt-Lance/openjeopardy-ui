import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

type NavBarProps = {
    title: string;
    children: React.ReactNode;
}

const NavBar :React.FunctionComponent<NavBarProps> = (props) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6"> {props.title} </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={true} anchor="left" variant="permanent">
                {props.children}
            </Drawer>
        </div>
        
    );
}

export default NavBar;