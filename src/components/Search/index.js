import styled from 'styled-components';
import Input from '../Input';
import { useState } from 'react';
import { books } from './booksData';

const SearchContainer = styled.section`
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
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
const Results = styled.div`
    margin-bottom: 20px;
    padding: 20px;
`;
const Result = styled.div`
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

function Search() {
    const [booksSearched, setBooksSearched] = useState([]);

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre o seu livro em nossa estante.</Subtitle>
            <Input
                placeholder="Digite sua próxima leitura" 
                onBlur={event => {
                    const text = event.target.value;
                    const result = books.filter(book => book.name.includes(text));
                    setBooksSearched(result);
                }}/>

                <Results>
                    <Subtitle>Resultado da pesquisa:</Subtitle>
                    {
                        booksSearched.map(book => {
                            return (<Result key={book.id}>
                                <p>{book.name}</p>
                                <img src={book.src} alt={book.name} />
                            </Result>)
                        })
                    }
                </Results>
        </SearchContainer>
    )
}

export default Search;