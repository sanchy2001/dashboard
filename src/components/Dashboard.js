import React from 'react';
import Category from './Category';

const Dashboard = ({ categories }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;