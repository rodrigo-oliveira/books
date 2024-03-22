import styled from 'styled-components';

const Button = styled.button`
    background-color: #535C91;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
        background-color: #9290C3;
    }
`;

function PrimaryButton(props) {
    return <Button {...props}>{props.children}</Button>;
}

export default PrimaryButton;