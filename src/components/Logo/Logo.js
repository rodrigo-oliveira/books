import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    color: #181818;
`;

function Logo() {
    return (
        <LogoContainer>
            <p>Books</p>
        </LogoContainer>
    );
}

export default Logo;