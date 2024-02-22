import './Header.css';
import HeaderIcons from './HeaderIcons';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
    return (
        <header className='Header'>
            <Logo></Logo>
            <Menu></Menu>
            <HeaderIcons></HeaderIcons>
        </header>
    );
}

export default Header;