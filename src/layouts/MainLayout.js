import React from "react";
import {Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import AppRouter from "../router/Router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import Typography from "@material-ui/core/Typography";
import {fade, makeStyles, useTheme} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {InputBase} from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
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
        width: `calc(100% - ${drawerWidth}px)`
    },
}));

const MainLayout = (props) => {
    console.log("MainLayout");
    const {window} = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const classes = useStyles();
    const theme = useTheme();

    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const handleSidebarToggle = () => {
        console.log("handleSidebarToggle");
        setSidebarOpen(!sidebarOpen);
    };

    // const [value, setValue] = React.useState('recents');
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    return (
        <div className={classes.root}>
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
                    <Typography className={classes.title} variant="h6" noWrap>
                        {process.env.REACT_APP_NAME}
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
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
                        <Sidebar handleDrawerToggle={handleSidebarToggle}/>
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
