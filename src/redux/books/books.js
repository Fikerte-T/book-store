const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK_FROM_API = 'bookstore/books/GET_BOOK_FROM_API';
// const booksUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WZwzwiH2F3FBWlYoGIqo/books';
const booksUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Vd926YynlQUSvPtDPnSi/books';

const initialState = [];

export const sendHttpResquest = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: data ? { 'Content-Type': 'application/json' } : {},
});

export const sendBookToApi = async (book) => {
  const response = await sendHttpResquest('POST', booksUrl, {
    item_id: book.item_id,
    title: book.title,
    category: book.category,
  });
  return response.text();
};

export const getBookFromApi = () => (async (dispatch) => {
  const response = await sendHttpResquest('GET', booksUrl);
  const data = await response.json();
  const booksData = Object.entries(data).map(([itemId, [book]]) => ({
    item_id: itemId,
    title: book.title,
    category: book.category,
  }));
  dispatch({
    type: GET_BOOK_FROM_API,
    payload: booksData,
  });
});

export const deleteBookFromApi = async (id) => {
  const response = await sendHttpResquest('DELETE', `${booksUrl}/${id}`, {
    item_id: id,
  });
  (await response.text());
};

export const addBook = (payload) => (async (dispatch) => {
  await sendBookToApi(payload);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
});

export const removeBook = (payload) => (async (dispatch) => {
  await deleteBookFromApi(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_BOOK_FROM_API:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default booksReducer;
