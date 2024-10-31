// src/components/CategoryList.js
import React, { useState } from 'react';
import api from '../api';

function CategoryList({ categories, fetchCategories }) {
  const [categoryName, setCategoryName] = useState('');

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await api.post('/categories', { name: categoryName });
      setCategoryName('');
      fetchCategories();
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <form onSubmit={handleAddCategory}>
        <input
          type="text"
          placeholder="New category"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />
        <button type="submit">+ Add category</button>
      </form>
    </div>
  );
}

export default CategoryList;
