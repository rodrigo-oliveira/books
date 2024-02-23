import './HeaderMenu.css';

const menuItems = [
    'Categorias',
    'Minha estante',
    'Favoritos'
];

function HeaderMenu() {
    return (
        <ul className='header-menu'>
            { menuItems.map(menuItem => (
                <li className='header-menu__item'>{ menuItem }</li>
            ))}
        </ul>
    );
}

export default HeaderMenu;