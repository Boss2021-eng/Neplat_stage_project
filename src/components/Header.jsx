import React from 'react';

const Header = () => {
  return (
    <div className=" w-full">
      <div className="w-full flex items-center justify-between ">
        <div className="mb-2">
          <h1 className="font-bold text-3xl">New Campaign Run </h1>
          <p className="text-sm text-[#B8B9BD]">
            A new campaign launch work for brand new feature in May month
          </p>
        </div>
        <div>
          <div className="my-4 w-full">
            <button className="bg-black w-full rounded-md">
              <div className="flex gap-2 text-white px-4 py-2 justify-center border-2 rounded-md border-black">
                <p className="text-md">ADD MEMBERS </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
