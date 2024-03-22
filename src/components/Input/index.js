import styled from 'styled-components';

const Input = styled.input`
    border: 2px solid #535C91;
    background: #fff;
    padding: 20px 140px;
    border-radius: 0;
    width: 200px;
    color: #181818;
    font-size: 16px;
    outline: none;

    &:focus {
        border-color: #9290C3;
    }

    &::placeholder {
        color: #181818;
        font-size: 16px;
    }
`;

export default Input;