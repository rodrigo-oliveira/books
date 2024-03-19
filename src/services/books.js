import axios from 'axios';

const booksAPI =  axios.create({baseURL: 'http://localhost:8000/livros'});

function getBooks() {
    const response = booksAPI.get('/');

    return response.data;
}

export {
    getBooks
}