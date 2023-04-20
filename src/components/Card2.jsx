import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Body from './Body';

const Card2 = () => {
  return (
    <div className="w-[80%] flex flex-col items-center py-4 sm:h-[2400px]  md:h-[1550px] lg:h-[800px]">
      <div className="w-[90%]">
        <Header />
        <NavBar />
        <Body />
      </div>
    </div>
  );
};

export default Card2;
