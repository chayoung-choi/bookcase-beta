import React from "react";
import Sidebar from "./Sidebar";
import AppRouter from "../router/Router";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {createMuiTheme, makeStyles, useTheme} from "@material-ui/core/styles";
import AppDrawer from "../components/Drawer";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {BrowserRouter, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Navigation from "../components/Navigation";
import {BottomNavigation, BottomNavigationAction, Box, Container} from "@material-ui/core";
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    bottomNaviation: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    toolbar: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

}));

const MainLayout = (props) => {
    console.log("MainLayout");
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const classes = useStyles();
    const theme = useTheme();

    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const handleSidebarToggle = () => {
        console.log("handleSidebarToggle");
        setSidebarOpen(!sidebarOpen);
    };

    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar color="inherit">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleSidebarToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {process.env.REACT_APP_NAME}
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="menu folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        // anchor="right"
                        open={sidebarOpen}
                        onClose={handleSidebarToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        <Sidebar handleDrawerToggle={handleSidebarToggle} />
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        open
                    >
                        <Sidebar/>
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                    <Switch>
                        <AppRouter/>
                    </Switch>
            </main>
                {/*<BottomNavigation value={value} onChange={handleChange} className={classes.bottomNaviation}>*/}
                {/*    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />*/}
                {/*    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />*/}
                {/*    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />*/}
                {/*    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />*/}
                {/*</BottomNavigation>*/}
        </div>
    );
}

MainLayout.propTypes = {
    // container: PropTypes.instanceOf(
    //     typeof Element === "undefined" ? Object : Element
    // )
    window: PropTypes.func,
};
export default MainLayout;
