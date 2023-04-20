import React from 'react';
import Profile from '../assets/img/Profile.png';
import Dashboard from '../assets/img/Dashboard.png';
import Settings from '../assets/img/Settings.png';
import Users from '../assets/img/Users.png';
import AddedUser from '../assets/img/AddedUser.png';
import Affliate from '../assets/img/Affliate.png';
import Logout from '../assets/img/Logout.png';
import Plus from '../assets/img/Plus.png';

const Card1 = () => {
  return (
    <div className=" bg-[#1D1042] w-[20%] flex justify-center sm:text-sm md:text-md pb-4 sm:h-[2450px]  md:h-[1500px] lg:h-[900px]">
      <div className="flex flex-col justify-between w-[70%]">
        <div className="w-full sm:text-sm  ">
          <div className="border-b-2  border-[#FFFFFF] border-opacity-20 ">
            <div className="my-4  w-full">
              <button className="bg-[#45269C] w-full rounded-md border-[#45269C] ">
                <div className="flex gap-2 text-white p-2 justify-center border-2 rounded-md border-[#45269C] md:p-1 sm:p-0">
                  <div className="flex items-center sm:w-8">
                    <img src={Profile} alt="Welcome" />
                  </div>

                  <p className="">Welcome Keerthi </p>
                </div>
              </button>
            </div>
            <div className="flex gap-2 sm:my-6 md:my-4 lg:my-2 text-white">
              <div className="flex items-center sm:w-8">
                <img src={Dashboard} alt="Dashboard" />
              </div>
              <p>Dashboard </p>
            </div>
            <div className="flex gap-2 sm:my-6 md:my-4 lg:my-2 text-white">
              <div className="flex items-center sm:w-8">
                <img src={Settings} alt="Settings" />
              </div>
              <p>Settings </p>
            </div>
            <div className="flex gap-2 sm:my-6 md:my-4 lg:my-2 text-white">
              <div className="flex items-center sm:w-8">
                <img src={Profile} alt="Activities" />
              </div>
              <p>Activities </p>
            </div>
            <div className="flex gap-2 sm:my-6 md:my-4 lg:my-2 text-white">
              <div className="flex items-center sm:w-8">
                <img src={Users} alt="Users" />
              </div>
              <p>Users </p>
            </div>
            <div className="flex gap-2 sm:my-6 md:my-4 lg:my-2 text-white">
              <div className="flex items-center sm:w-8">
                <img src={AddedUser} alt="AddedUser" />
              </div>
              <p>Added User</p>
            </div>
            <div className="flex  gap-2 sm:my-6 md:my-4 lg:my-2 text-white">
              <div className="flex items-center sm:w-8">
                <img src={Profile} alt="Profile" />
              </div>
              <p>Profile</p>
            </div>
          </div>

          <div className="mt-6 ">
            <div className="flex gap-2 sm:my-6 md:my-4 lg:my-2 text-white">
              <div className="flex items-center sm:w-8">
                <img src={Logout} alt="Logout" />
              </div>
              <p>Logout</p>
            </div>
            <div className="flex gap-2 sm:my-6 md:my-4 lg:my-2 text-white">
              <div className="flex items-center sm:w-8">
                <img src={Affliate} alt="Affliate" />
              </div>
              <p>Affliate</p>
            </div>
          </div>
        </div>
        <div className="">
          <button className="bg-[#45269C] w-full rounded-md ">
            <div className="flex items-center gap-2 text-white p-2 justify-center border-2 rounded-md border-[#45269C]">
              <div>
                <img src={Plus} alt="Plus" />
              </div>
              <p>New Project </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
