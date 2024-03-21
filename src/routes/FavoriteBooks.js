import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavoriteBook, getFavoriteBooks } from '../services/favoriteBooks';
import livroImg from '../images/livro.png'

const AppContainer = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`;

const ResultContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

const Result = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`;

const Title = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
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
       <Title>Aqui estão seus livros favoritos:</Title>
       <ResultContainer>
         {
           favoriteBooks.length !== 0 ? favoriteBooks.map(favoriteBook => (
             <Result>
               <p>{favoriteBook.name}</p>
               <img src={livroImg} alt={favoriteBook.name}/>
               <p onClick={()=>deleteFavorite(favoriteBook.id)}>Deletar favorito</p>
             </Result>
           )) : null
         }
       </ResultContainer>
     </div>
   </AppContainer>
  );
}

export default Favoritos;
