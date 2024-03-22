import styled from 'styled-components';
import Title from '../Title';
import PrimaryButton from '../PrimaryButton';

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`;
const Description = styled.p`
    max-width: 300px;
`;
const Subtitle = styled.h4`
    color: #070F2B;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`;
const ImgBook = styled.img`
    width: 150px;
`;

function CardRecommendation({title, subtitle, description, img}) {
    return (
        <Card>
            <div>
                <Title fontSize='16px' align='left'>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Description>{description}</Description>
            </div>
            <div>
                <ImgBook src={img}/>
                <PrimaryButton>Saiba mais</PrimaryButton>
            </div>
        </Card>  
    )
}

export default CardRecommendation;