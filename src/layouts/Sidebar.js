import React from "react";
import {Link} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import apps from "../navigation/apps";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import {Box, useTheme} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../assets/images/logo/logo.png";
import {Img} from "react-image";
import { sizing } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar
}));

const Sidebar = (props) => {

    const classes = useStyles();
    const theme = useTheme();

    const menus = apps;

    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const RenderMenus = () => {
        return menus.map((menu, index) => {
            return (
                <Link to={menu.navLink}>
                    <ListItem button key={menu.id}
                        // onClick={(event) => handleListItemClick(event, index)}
                        // selected={index === selectedIndex}
                              onClick={props.handleDrawerToggle}>
                        <ListItemIcon>{menu.icon}</ListItemIcon>
                        <ListItemText primary={menu.title}/>
                    </ListItem>
                </Link>
            );
        });
    }

    return (
        <>
            <Toolbar color="inherit">
                <Box marginRight={1} alignSelf={"center"}>
                    <Img src={logo} width={25} height={25}/>
                </Box>
                <Typography variant="h6" color="inherit">
                    {process.env.REACT_APP_NAME}
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {RenderMenus()}
            </List>
        </>
    );
}

export default Sidebar;
