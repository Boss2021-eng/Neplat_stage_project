import React from 'react';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';

const Body = () => {
  return (
    <div className="rounded-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
};

export default Body;
