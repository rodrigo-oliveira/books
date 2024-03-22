import { ShoppingBag, User } from 'react-feather';
import styled from 'styled-components';

const HeaderIcon = styled.li`
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
             <HeaderIcon>
                <User></User>
             </HeaderIcon>
             <HeaderIcon>
                <ShoppingBag></ShoppingBag>
             </HeaderIcon>
        </HeaderIconsContainer>
    );
}

export default HeaderIcons;