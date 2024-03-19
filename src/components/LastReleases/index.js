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

const NewBooksList = styled.ul`
    margin: 30px 0;
    padding: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    list-style: none;
`;

const NewBook = styled.li`
    cursor: pointer;
`;

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title
                color={"#EB9B00"}
                fontSize={"36px"}>Últimos lançamentos</Title>
            <NewBooksList>
                { books.map( book => (
                    <NewBook key={book.id}>
                        <img key={book.id} src={book.src} alt={book.name} />
                    </NewBook>
                ) ) }
            </NewBooksList>
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