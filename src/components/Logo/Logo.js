import logo from '../../images/logo.svg';
import './Logo.css';

function Logo() {
    return (
        <div className='logo'>
            <img className='logo__img' src={logo} alt='Books'></img>
            <p>Books</p>
        </div>
    );
}

export default Logo;