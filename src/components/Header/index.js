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

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <HeaderMenu />
            <HeaderIcons />
        </HeaderContainer>
    );
}

export default Header;