import { books } from './lastReleasesData';
import styled from 'styled-components'
import Title from '../Title';
import CardRecommendation from '../CardRecommendation';
import ImageBook from '../../images/livro2.png';

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NewBooksContainer = styled.div`
    margin: 30px 0;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title
                color={"#EB9B00"}
                fontSize={"36px"}>Últimos lançamentos</Title>
            <NewBooksContainer>
                { books.map( book => (
                    <li key={book.id}><img key={book.id} src={book.src} alt={book.name} /></li>
                ) ) }
            </NewBooksContainer>
            <CardRecommendation
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                img={ImageBook}
            />
        </LastReleasesContainer>
        
    )
}

export default LastReleases;