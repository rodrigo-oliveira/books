import axios from 'axios';
import serverConfig from '../config/server-config';

const booksAPI = axios.create({baseURL: `${serverConfig.apiUrl}/books`});

async function getBooks() {
    const response = await booksAPI.get('/');

    return response.data;
}

export {
    getBooks
}