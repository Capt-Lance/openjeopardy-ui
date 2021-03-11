type NavLinkProps = {
    link: string;
    text: string;
}

function NavLink(props: NavLinkProps) {
    return (
        <a href={props.link}>{props.text}</a>
    )
}

export default NavLink;