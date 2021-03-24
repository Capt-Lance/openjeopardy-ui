import {Link} from 'react-router-dom';

type NavLinkProps = {
    link: string;
    text: string;
}

function NavLink(props: NavLinkProps) {
    return (
        <Link to={props.link}>{props.text}</Link>
    )
}

export default NavLink;