import React from "react";
import {Link} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import apps from "../navigation/apps";

const Sidebar = (props) => {

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
        <List>
            {RenderMenus()}
        </List>
    );
}

export default Sidebar;
