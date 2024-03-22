import HeaderIcons from '../HeaderIcons';
import Logo from '../Logo/Logo';
import HeaderMenu from '../HeaderMenu';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

const LogoLink = styled(Link)`
    text-decoration: none;
    color: #181818;
`;

function Header() {
    return (
        <HeaderContainer>
            <LogoLink to="/">
                <Logo />
            </LogoLink>
            <HeaderMenu />
            <HeaderIcons />
        </HeaderContainer>
    );
}

export default Header;