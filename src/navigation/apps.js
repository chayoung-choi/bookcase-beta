import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from '@material-ui/icons/Inbox';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

export default [
    {
        id: 'home',
        title: 'Home',
        icon: <HomeIcon size={20}/>,
        navLink: '/'
    },
    {
        id: 'bookshelf',
        title: 'Bookshelf',
        icon: <LibraryBooksIcon size={20}/>,
        navLink: '/bookshelf'
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
        id: 'v3',
        title: 'V3',
        icon: <CollectionsBookmarkIcon size={20}/>,
        navLink: '/v3'
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
