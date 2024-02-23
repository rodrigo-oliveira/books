import HeaderIcons from '../HeaderIcons/HeaderIcons';
import Logo from '../Logo/Logo';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <HeaderMenu></HeaderMenu>
            <HeaderIcons></HeaderIcons>
        </HeaderContainer>
    );
}

export default Header;