import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const icons = [
    perfil,
    sacola
];

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
            {
                icons.map(icon => (
                    <Icon><img src={icon}></img></Icon>
                ))
            }
       </HeaderIconsContainer>
    );
}

export default HeaderIcons;