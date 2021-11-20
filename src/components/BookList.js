import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const BookList = (props) => {
  const { id, title, category } = props;
  const [author] = useState('Haddis Alemayehu');
  const percentage = 85;
  const dispatch = useDispatch();

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="books-container">
      <div className="book-info">
        <div className="books">
          <p className="book-category">{category}</p>
          <p className="book-title">{title}</p>
          <p className="book-author">{author}</p>
        </div>
        <div className="util-btn-container">
          <button className="util-btn" type="button">Comments</button>
          <button className="util-btn" type="button" onClick={() => removeBookFromStore(id)}>Remove</button>
          <button className="util-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress">
          <CircularProgressbar
            value={percentage}
            className="progress-bar"
          />
        </div>
        <div className="number-percentage">
          <p className="percentage">
            {percentage}
            %
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="chapter-container">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="btn update">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
BookList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default BookList;
