import styled from "styled-components";

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    color: ${props => props.color || '#070F2B'};
    font-size: ${props => props.fontSize || '18px;'};
    text-align: ${props => props.align || 'center'};
    margin: 0;
`;

export default Title;