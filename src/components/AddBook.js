import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') { return; }
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input type="text" placeholder="Book title" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <input type="text" placeholder="Book author" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} />
        <select name="Category">
          <option value="">Category</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBooks;
