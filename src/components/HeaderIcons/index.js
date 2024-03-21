import { ShoppingBag, User } from 'react-feather';
import styled from 'styled-components';

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`;

const HeaderIconsContainer = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
`;

function HeaderIcons() {
    return (
        <HeaderIconsContainer>
             <User></User>
             <ShoppingBag></ShoppingBag>
        </HeaderIconsContainer>
    );
}

export default HeaderIcons;