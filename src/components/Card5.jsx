import React from 'react';
import Card3 from '../assets/img/Card3/Card3.png';
import comments from '../assets/img/Card3/comments.png';
import Link from '../assets/img/Card3/Link.png';
import List from '../assets/img/Card3/List.png';
import Slider2 from '../assets/img/Card3/Slider2.png';
import Slider3 from '../assets/img/Card3/Slider3.png';
import image from '../assets/img/Card3/image.png';
import plus from '../assets/img/Card3/plus.png';

const Card5 = () => {
  return (
    <div className=" ">
      <div className="w-full  flex flex-col items-center ">
        <div className="flex items-center justify-between bg-[#F4F6F8] w-full px-4 py-2 rounded-md mb-6">
          <p className="text-lg text-[#858A93]">Completed</p>
          <div className="bg-black text-white text-lg w-[35px] h-[35px] rounded-md flex items-center justify-content text-center p-3">
            <p className="">2</p>
          </div>
        </div>
        <div className="w-[90%] my-4">
          <img className="w-full" bg-blue-900 src={Card3} alt="Card3" />
        </div>
        <div className="w-[90%]">
          <div>
            <p className="font-bold text-xl">High fidelity design</p>
            <p className="text-[#B8B9BD]">Make clear design and color</p>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-2 ">
              <div className="flex items-center ">
                <img src={List} alt="List" />
              </div>
              <p className="text-[#B8B9BD]">Progress </p>
            </div>
            <div>
              <p className="font-bold text-[#B8B9BD">2/10</p>
            </div>
          </div>
          <div className="flex items-center w-full  my-2">
            <img className="w-full" src={Slider3} alt="Slider3" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="flex gap-2">
                <div className="flex items-center ">
                  <img src={comments} alt="comments" />
                </div>
                <p className="text-[#B8B9BD]">7 </p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center ">
                  <img src={Link} alt="Link" />
                </div>
                <p className="text-[#B8B9BD]">2</p>
              </div>
            </div>

            <div className="flex">
              <div className="rounded-full ">
                <img className="rounded-full" src={image} alt="image" />
              </div>
              <div>
                <img className="rounded-full" src={image} alt="image" />
              </div>
              <div>
                <img className="rounded-full" src={image} alt="image" />
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 w-[90%] ">
          <div>
            <p className="font-bold text-xl">Usability fidelity design</p>
            <p className="text-[#B8B9BD]">Make clear design and color</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="flex items-center ">
                <img src={Link} alt="Link" />
              </div>
              <p className="text-[#B8B9BD]">Progress </p>
            </div>
            <div>
              <p className="font-bold">2/10</p>
            </div>
          </div>
          <div className="flex items-center w-full my-2 ">
            <img className="w-full" src={Slider3} alt="Slider3" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="flex gap-2">
                <div className="flex items-center ">
                  <img src={comments} alt="comments" />
                </div>
                <p className="text-[#B8B9BD]">7 </p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center ">
                  <img src={Link} alt="Link" />
                </div>
                <p className="text-[#B8B9BD]">2</p>
              </div>
            </div>

            <div className="flex">
              <div className="rounded-full ">
                <img className="rounded-full" src={image} alt="image" />
              </div>
              <div>
                <img className="rounded-full" src={image} alt="image" />
              </div>
              <div>
                <img className="rounded-full" src={image} alt="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <button className="w-full bg-[#F2F4F5]  text-[#7D8088] mt-2 border-1 border-[#7D8088] rounded-md ">
            <div className="flex gap-2 p-2 justify-center  ">
              <div>
                <img className="bg-[#7D8088]" src={plus} alt="plus" />
              </div>
              <p>Add Task</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card5;
