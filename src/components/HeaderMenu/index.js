import { Link } from 'react-router-dom';
import styled from 'styled-components';

const menuItems = [
    'Categorias',
    'Estante',
    'Favoritos'
];

const HeaderMenuContainer = styled.ul`
    display: flex;
`;

const MenuItem = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 120px;
    text-transform: uppercase;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`;

const MenuLink = styled(Link)`
    text-decoration: none;
    color: #181818;

    &:hover {
        text-decoration: underline;
    }
`;

function HeaderMenu() {
    return (
        <HeaderMenuContainer>
            { menuItems.map(menuItem => (
                <MenuItem key={menuItem}>
                    <MenuLink to={`${menuItem.toLowerCase()}`}>{ menuItem }</MenuLink>
                </MenuItem>
            )) }
        </HeaderMenuContainer>
    );
}

export default HeaderMenu;