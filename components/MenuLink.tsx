import Link from 'next/link';

const MenuLink = ({children, href, className = ''}) => {
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
};

export default MenuLink;