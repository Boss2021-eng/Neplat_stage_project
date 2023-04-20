import React from 'react';
import Card1 from './components/Card1';
import Card2 from './components/Card2';

const App = () => {
  return (
    <div className="flex sm:h-[2400px]  md:h-[1550px] lg:h-[900px] rounded-lg">
      <Card1 />
      <Card2 />
    </div>
  );
};

export default App;
