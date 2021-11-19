import React from 'react';

const Books = () => (
  <div>
    <h3>ADD NEW BOOK</h3>
    <input type="text" placeholder="Book title" />
    <select name="Category">
      <option value="">Category</option>
    </select>
    <button type="submit">ADD BOOK</button>
  </div>

);
export default Books;
