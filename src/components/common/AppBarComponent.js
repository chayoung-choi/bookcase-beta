import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import {AppBar, InputBase, MenuItem, Menu} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
const AppBarComponent = (props) => {

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" className={props.classes.appBar}>
            <Toolbar color="inherit">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.handleSidebarToggle}
                    className={props.classes.menuButton}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography className={props.classes.title} variant="h6" noWrap>
                    {props.toolBarTitle}
                </Typography>
                <div className={props.classes.search}>
                    <div className={props.classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: props.classes.inputRoot,
                            input: props.classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                {auth && (
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default AppBarComponent;
