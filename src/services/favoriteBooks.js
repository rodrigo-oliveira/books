import axios from 'axios';

const favoriteBooksAPI =  axios.create({baseURL: 'http://localhost:8000/favoritos'});

async function getFavoriteBooks() {
    const response = await favoriteBooksAPI.get('/');

    return response.data;
};

async function postFavoriteBook(id) {
    await favoriteBooksAPI.post(`/${id}`);
};

async function deleteFavoriteBook(id) {
    await favoriteBooksAPI.delete(`/${id}`);
};

export {
    getFavoriteBooks,
    postFavoriteBook,
    deleteFavoriteBook
};