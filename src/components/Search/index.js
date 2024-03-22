import styled from 'styled-components';
import Input from '../Input';
import { useEffect, useState } from 'react';
import { getBooks } from '../../services/books';
import { postFavoriteBook } from '../../services/favoriteBooks';
import { Star } from 'react-feather';
import PlaceholderBookSvg from '../../images/placeholder_book_140.svg';
import DefaultButton from '../DefaultButton';

const SearchContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    background: #1B1A55;
    width: 100%;
`;
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;
const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;
const ResultsContainer = styled.div`
    padding: 20px;
    list-style: none;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
`;
const Results = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;
const Result = styled.li`
    margin: 20px 0;
    display: flex;
    border-bottom: 1px solid #4b496e;
    padding-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
        border-bottom: 0;
    }
`;
const ResultActions = styled.div`
    display: flex
`;
const ResultContainer = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid transparent;

    &:hover {
        border-color: white;
    }
`;

const ResultInfo = styled.div`
    display: flex;
    flex-flow: column;
    margin-left: 20px;
    text-align: left;

    h4 {
        margin-left: 10px;
    }
`;

function Search() {
    const [booksSearched, setBooksSearched] = useState([]);
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    }, []);
 

    async function fetchBooks() {
        const apiBooks = await getBooks();
        setBooks(apiBooks);
    }

    async function insertFavoriteBook(id) {
        await postFavoriteBook(id);
        alert(`Livro de id: ${id} inserido com sucesso`);
    }
 
    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre o seu livro em nossa estante.</Subtitle>
            <Input
                placeholder='Digite sua próxima leitura'
                onInput={event => {
                    const text = event.target.value;
                    const result = books.filter(book => book.name.includes(text));
                    setBooksSearched(result.length === books.length ? [] : result);
                }}/>
                {
                    booksSearched.length > 0 &&
                    <ResultsContainer>
                        <Subtitle>Resultado da pesquisa:</Subtitle>
                        <Results>
                            {
                                booksSearched.map(book => {
                                    return (<Result key={book.id}>
                                        <ResultContainer>
                                            <img src={PlaceholderBookSvg} alt={book.name} />
                                            <ResultInfo>
                                                <h4>{book.name}</h4>
                                                <ResultActions>
                                                    <DefaultButton
                                                        color='white'
                                                        onClick={() => insertFavoriteBook(book.id)}>
                                                            <Star></Star>Adicionar aos favoritos
                                                    </DefaultButton>
                                                </ResultActions>
                                            </ResultInfo>
                                        </ResultContainer>
                                    </Result>)
                                })
                            }
                        </Results>
                    </ResultsContainer>
                }
        </SearchContainer>
    )
}

export default Search;