import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar
}));

const menus = [{"name": "Home", "path": "/"}
    , {"name": "V1", "path": "/v1"}
    , {"name": "V2", "path": "/v2"}
    , {"name": "V3", "path": "/v3"}
];

const Drawer = (props) => {
    const classes = useStyles();
    const theme = useTheme();
// console.log(props.handleDrawerToggle());

    return (
        <>
            <div className={classes.toolbar}>
                <Link to="/">
                    <Typography variant="h5" noWrap>
                        {process.env.REACT_APP_NAME}
                    </Typography>
                </Link>
            </div>
            <Divider/>
            <List>
                {menus.map((menu, index) => (
                    <Link to={menu.path} onClick={() => props.handleDrawerToggle()}>
                        <ListItem button key={menu.name}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={menu.name}/>
                        </ListItem>
                    </Link>
                    // <Link to={menu.path}>
                    //     <ListItem button key={menu.name}>
                    //         <ListItemIcon>
                    //             {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                    //         </ListItemIcon>
                    //         <ListItemText primary={menu.name}/>
                    //     </ListItem>
                    // </Link>
                ))}
            </List>
        </>
    );
}
export default Drawer;
