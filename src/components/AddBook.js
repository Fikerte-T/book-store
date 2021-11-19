import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category] = useState('Fiction');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') { return; }
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
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
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
