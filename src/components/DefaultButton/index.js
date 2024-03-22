import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.color || '#181818'};
    background-color: ${props => props.backgroundColor || 'transparent'};
    padding: 10px;
    font-size: 16px;
    border: none;
    display: inline-flex;
    text-align: left;
    cursor: pointer;
    align-items: center;

    svg {
        margin-right: 10px;
    }
`;

function DefaultButton(props) {
    return <Button {...props}>{props.children}</Button>;
}

export default DefaultButton;