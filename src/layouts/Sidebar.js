import React from "react";
import {Link} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import apps from "../navigation/apps";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import {useTheme} from "@material-ui/core";

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
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {RenderMenus()}
            </List>
        </>
    );
}

export default Sidebar;
