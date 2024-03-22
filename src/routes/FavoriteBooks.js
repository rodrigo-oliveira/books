import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavoriteBook, getFavoriteBooks } from '../services/favoriteBooks';
import PlaceholderBookSvg from '../images/placeholder_book_140.svg';
import { Trash } from 'react-feather';
import DefaultButton from '../components/DefaultButton';
import Title from '../components/Title';

const AppContainer = styled.div`
  width: 100%;
`;
const ResultContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;
const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  max-width: 600px;
  width: 100%;
  border-bottom: 1px solid #070F2B;
  margin: 0 auto;

  &:only-child {
    border-bottom: 0;
  }

  p {
      width: 200px;
  }

  span {
    cursor: pointer;
    display: inline-flex;
    align-item: center;
  }
`;

function Favoritos() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  async function fetchFavoriteBooks() {
    const favorites = await getFavoriteBooks();
    setFavoriteBooks(favorites);
  }

  async function deleteFavorite(id) {
    await deleteFavoriteBook(id);
    await fetchFavoriteBooks();
    alert(`Livro de id: ${id} removido dos favoritos`);
  }

  useEffect(() => {
    fetchFavoriteBooks();
  }, []);

  return (
    <AppContainer>
     <div>
       <Title>Livros favoritos</Title>
       <ResultContainer>
         {
           favoriteBooks.length !== 0 ? favoriteBooks.map(favoriteBook => (
             <Result>
                <img src={PlaceholderBookSvg} alt={favoriteBook.name}/>
                <p>{favoriteBook.name}</p>
                <DefaultButton onClick={()=>deleteFavorite(favoriteBook.id)}><Trash></Trash>Deletar favorito</DefaultButton>
             </Result>
           )) : null
         }
       </ResultContainer>
     </div>
   </AppContainer>
  );
}

export default Favoritos;
