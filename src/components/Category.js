import React from 'react';
import Widget from './Widget';

const Category = ({ category }) => {
  return (
    <div>
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} />
      ))}
    </div>
  );
};

export default Category;

