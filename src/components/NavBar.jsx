import React from 'react';
import BoardView from '../assets/img/NavBar/BoardView.png';
import image from '../assets/img/NavBar/image.png';
import ListView from '../assets/img/NavBar/ListView.png';
import Participants from '../assets/img/NavBar/Participants.png';
import Plus from '../assets/img/NavBar/Plus.png';
import PowerView from '../assets/img/NavBar/PowerView.png';

const NavBar = () => {
  return (
    <div className=" flex items-center justify-between w-full sm:text-[50%] md:text-[80%] lg:text-[100%]">
      <div className="">
        <div className="flex gap-2 text-[#B8B9BD] p-2 justify-center items-center">
          <div className="rounded-full">
            <img className="rounded-full" src={image} alt="image" />
          </div>
          <div>
            <img className="rounded-full" src={image} alt="image" />
          </div>
          <div>
            <img className="rounded-full" src={image} alt="image" />
          </div>
          <p className=" "> 8 members </p>
        </div>
      </div>
      <div className="flex text-[#7D8088]">
        <div className="flex gap-2 p-2 justify-center md:text-center ">
          <div className="rounded-full flex items-center sm:w-8">
            <img src={Participants} alt="Participants" />
          </div>

          <p className="text-sm"> Participants View </p>
        </div>

        <div className="flex gap-2  p-2 justify-center md:text-center ">
          <div className="flex items-center sm:w-8">
            <img src={BoardView} alt="BoardView" />
          </div>
          <p className="text-sm"> Board View </p>
        </div>

        <div className="flex gap-2  p-2 justify-center md:text-center ">
          <div className="flex items-center sm:w-8">
            <img src={ListView} alt="ListView" />
          </div>

          <p className="text-sm"> List View </p>
        </div>

        <div className="flex gap-2  p-2 justify-center md:text-center">
          <div className="flex items-center sm:w-8">
            <img src={PowerView} alt="PowerView" />
          </div>
          <p className="text-sm"> Power View </p>
        </div>

        <div className="flex gap-2  p-2 justify-center md:text-center">
          <div className="flex items-center sm:w-8">
            <img src={Plus} alt="Plus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
