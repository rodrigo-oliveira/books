import { books } from './lastReleasesData';
import styled from 'styled-components'
import Title from '../Title';
import CardRecommendation from '../CardRecommendation';
import PlaceholderBookSvg from '../../images/placeholder_book_140.svg';

const LastReleasesContainer = styled.section`
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
    margin-right: 20px;
`;

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title
                fontSize={'36px'}>Últimos lançamentos</Title>
            <NewBooksList>
                { books.map( book => (
                    <NewBook key={book.id}>
                        <img key={book.id} src={PlaceholderBookSvg} alt={book.name} />
                    </NewBook>
                ) ) }
            </NewBooksList>
            <CardRecommendation
                title='Talvez você se interesse por esse livro'
                subtitle='Angular 11'
                description='Construindo uma aplicação com a plataforma Google'
                img={PlaceholderBookSvg}
            />
        </LastReleasesContainer>
        
    )
}

export default LastReleases;