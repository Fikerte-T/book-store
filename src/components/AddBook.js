import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === 'default') { return; }
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    // setCategory('');
  };

  return (
    <div className="add-book">
      <h3 className="add-book-title">ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input className="inputs" type="text" placeholder="Book title" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
        {/* <input className="inputs"
        type="text" placeholder="Book author"
        name="author" onChange={(e) => setAuthor(e.target.value)} value={author} /> */}
        <select required className="inputs category" name="Category" onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled selected>Category</option>
          <option value="Fiction">Fiction</option>
        </select>
        <button className="btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
