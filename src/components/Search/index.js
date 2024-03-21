import styled from 'styled-components';
import Input from '../Input';
import { useEffect, useState } from 'react';
import { getBooks } from '../../services/books';
import { postFavoriteBook } from '../../services/favoriteBooks';
import { Star } from 'react-feather';

const SearchContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
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
`;
const Results = styled.ul`
    list-style: none;
    padding: 0;
`;
const Result = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    padding: 20px;
    border: 1px solid transparent;

    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

const ResultActions = styled.div`
display: flex
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

    async function inserFavoriteBook(id) {
        await postFavoriteBook(id);
        alert(`Livro de id: ${id} inserido com sucesso`);
    }
 
    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre o seu livro em nossa estante.</Subtitle>
            <Input
                placeholder="Digite sua próxima leitura" 
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
                                        <p>{book.name}</p>
                                        <img src={book.src} alt={book.name} />
                                        <ResultActions>
                                            <Star onClick={() => inserFavoriteBook(book.id)}></Star>Adicionar aos favoritos
                                        </ResultActions>
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