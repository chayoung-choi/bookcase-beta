import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {createMuiTheme, makeStyles, useTheme} from "@material-ui/core/styles";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Router";
import AppDrawer from "../components/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
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
        padding: theme.spacing(3)
    }
}));

function Navigation(props) {
    const {container} = props;
    const classes = useStyles();

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#1e88e5',
            },
            secondary: {
                main: '#448aff',
            },
        },
    });

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [mobile, setMobile] = React.useState(false);
    const [windowSize, setWindowSize] = React.useState(window.innerWidth);
console.log("windowSize", windowSize);
    const handleDrawerToggle = () => {
        console.log("handleDrawerToggle");
        console.log("mobile", mobile);
        if (mobile){
            setDrawerOpen(!drawerOpen);
        }
    };

    return (
        <div className={classes.root} >
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        {process.env.REACT_APP_NAME}
                    </Typography>
                </Toolbar>
            </AppBar>
            <BrowserRouter>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            setMobile={true}
                            anchor={theme.direction === "rtl" ? "right" : "left"}
                            open={drawerOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            <AppDrawer handleDrawerToggle={handleDrawerToggle}/>
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
                            <AppDrawer handleDrawerToggle={handleDrawerToggle}/>
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <AppRouter/>
                </main>
            </BrowserRouter>
        </div>
    );
}

Navigation.propTypes = {
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    )
};

export default Navigation;
