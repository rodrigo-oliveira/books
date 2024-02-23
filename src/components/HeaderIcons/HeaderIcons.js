import './HeaderIcons.css';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const icons = [
    perfil,
    sacola
];

function HeaderIcons() {
    return (
       <ul className='header-icons'>
            {
                icons.map(icon => (
                    <li className='header-icons__icon'><img src={icon}></img></li>
                ))
            }
       </ul>
    );
}

export default HeaderIcons;