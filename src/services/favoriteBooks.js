import axios from 'axios';
import serverConfig from '../config/server-config';

const favoriteBooksAPI = axios.create({baseURL: `${serverConfig.apiUrl}/books`});

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