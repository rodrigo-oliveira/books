import HeaderIcons from '../HeaderIcons';
import Logo from '../Logo/Logo';
import HeaderMenu from '../HeaderMenu';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <HeaderMenu />
            <HeaderIcons />
        </HeaderContainer>
    );
}

export default Header;