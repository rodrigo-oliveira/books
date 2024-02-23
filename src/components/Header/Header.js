import './Header.css';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import Logo from '../Logo/Logo';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

function Header() {
    return (
        <header className='header'>
            <Logo></Logo>
            <HeaderMenu></HeaderMenu>
            <HeaderIcons></HeaderIcons>
        </header>
    );
}

export default Header;