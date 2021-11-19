import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookFromApi } from '../redux/books/books';
import BookList from './BookList';
import AddBook from './AddBook';

const selectBooks = (state) => state.books;

const Books = () => {
  const dispatch = useDispatch();
  const newBooks = useSelector(selectBooks);
  useEffect(() => {
    dispatch(getBookFromApi());
  }, []);
  return (
    <div>
      <div className="book-list">
        {
            newBooks.map((book) => (
              <BookList
                key={book.item_id}
                id={book.item_id}
                title={book.title}
                category={book.category}
              />
            ))
         }

      </div>
      <AddBook />
    </div>
  );
};
export default Books;
