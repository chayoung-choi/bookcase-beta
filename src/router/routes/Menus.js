import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";

export default [
    {
        id: 'home',
        title: 'Home',
        icon: <HomeIcon size={20}/>,
        navLink: '/'
    },
    {
        id: 'v1',
        title: 'V1',
        icon: <MailIcon size={20}/>,
        navLink: '/v1'
    },
    {
        id: 'v2',
        title: 'V2',
        icon: <InboxIcon size={20}/>,
        navLink: '/v2'
    },
    {
        id: 'v1',
        title: 'V1',
        icon: <MailIcon size={20}/>,
        navLink: '/v1'
    },
    {
        id: 'login',
        title: 'Login',
        icon: <MailIcon size={20}/>,
        navLink: '/login'
    },
    {
        id: 'logout',
        title: 'Logout',
        icon: <MailIcon size={20}/>,
        navLink: '/logout'
    }
]
