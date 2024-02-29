import styled from 'styled-components';

const Input = styled.input`
    border: 2px solid #306387;
    background: #fff;
    padding: 20px 140px;
    border-radius: 10px;
    width: 200px;
    color: #181818;
    font-size: 16px;
    margin-bottom: 10px;
    outline: none;

    &::placeholder {
        color: #181818;
        font-size: 16px;
    }
`;

export default Input;