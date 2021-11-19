import React from 'react';
import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { addBook } from '../redux/books/books';
import BookList from './BookList';
import AddBooks from './AddBook';

const selectBooks = (state) => state.books;

const Books = () => {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const dispatch = useDispatch();
  const newBooks = useSelector(selectBooks);

  return (
    <div>
      <div className="book-list">
        {
            newBooks.map((book) => (
              <BookList
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
              />
            ))
         }

      </div>
      <AddBooks />
    </div>
  );
};
export default Books;
