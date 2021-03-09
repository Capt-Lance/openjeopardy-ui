import { AppBar, IconButton, Menu, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function BoardEditor() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6"> Create </Typography>
            </Toolbar>
            
        </AppBar>
    );
  }

  export default BoardEditor;
  