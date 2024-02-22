import './Menu.css';

const menuItems = [
    'Categorias',
    'Minha estante',
    'Favoritos'
];

function Menu() {
    return (
        <ul className='menu'>
            { menuItems.map(menuItem => (
                <li className='menu__item'>{menuItem}</li>
            ))}
        </ul>
    );
}

export default Menu;