import styled from 'styled-components'

const menuItems = [
    'Categorias',
    'Minha estante',
    'Favoritos'
]

const HeaderMenuContainer = styled.ul`
    display: flex;
`

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
`

function HeaderMenu() {
    return (
        <HeaderMenuContainer>
            { menuItems.map(menuItem => (
                <MenuItem>{ menuItem }</MenuItem>
            ))}
        </HeaderMenuContainer>
    );
}

export default HeaderMenu;