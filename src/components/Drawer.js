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

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar
}));

function Drawer(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
        <div className={classes.toolbar}/>
        <Divider/>
        <List>
            <Link to="/">
                <ListItem key="Home" >
                    <ListItemIcon>
                        <MailIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
            </Link>
            {["V1", "V2"].map((text, index) => (
                <Link to="/v1" >
                    <ListItem button key={text} >
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                </Link>
            ))}
        </List>
    </div>
    );
}
export default Drawer;
