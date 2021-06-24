import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Menus from "src/router/routes/Menus";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const menus = Menus;


const menusList = [{"name": "Home", "path": "/"}
    , {"name": "V1", "path": "/v1"}
    , {"name": "V2", "path": "/v2"}
    , {"name": "V3", "path": "/v3"}
];

const Sidebar = (props) => {

console.log("#1 menus", menus);
console.log("#1 menusList", menusList);

    const RenderMenus = () => {
        return menus.map((menu, index) => {
            return (
                <Link to={menu.navLink}>
                    <ListItem button key={menu.id}>
                        <ListItemIcon>{menu.icon}</ListItemIcon>
                        <ListItemText primary={menu.title}/>
                    </ListItem>
                </Link>
            );
        });
    }

    const list = menusList.map((menu, index) => (<li key={index}>{menu.name}</li>));

    console.log("#3");
    return (
        <List>
            {/*{menus.map((menu, index) => (*/}
            {/*    <li key={menu.id}>{menu.title}</li>*/}
            {/*))}*/}

            {RenderMenus()}
            {/*{menus.map((menu, index) => (*/}
            {/*    <Link to={menu.navLink}>*/}
            {/*        <ListItem button key={menu.id}>*/}
            {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
            {/*            <ListItemText primary={menu.id}/>*/}
            {/*        </ListItem>*/}
            {/*    </Link>*/}
            {/*))}*/}

            {/*{menusList.map((menu, index) => (*/}
            {/*    <Link to={menu.path}>*/}
            {/*        <ListItem button key={menu.name}>*/}
            {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
            {/*            <ListItemText primary={menu.name}/>*/}
            {/*        </ListItem>*/}
            {/*    </Link>*/}
            {/*))}*/}
            {/*{Object.keys(menus).map((menu, index) => {*/}
            {/*    <Link to={menu.navLink}>*/}
            {/*        <ListItem button key={menu.id}>*/}
            {/*            <ListItemIcon>{menu.icon}</ListItemIcon>*/}
            {/*            <ListItemText primary={menu.title}/>*/}
            {/*        </ListItem>*/}
            {/*    </Link>*/}
            {/*})}*/}
        </List>
    );
}

export default Sidebar;
