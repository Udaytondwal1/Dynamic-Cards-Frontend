import React, { FC } from "react";

const AdCard: FC<any> = ({ items }) => {
  return (
    <div className="card min-w-[15rem] max-w-[25rem] h-full shadow-lg p-2 bg-white dark:bg-darkCC z-10 snap-center font-inter">
      <div
        className="relative w-full h-[45%] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${items.imgURL})` }}
      >
        <div className="absolute text-center text-sm font-semibold font-poppins w-12 h-6 bg-black right-0">
          Ad
        </div>
      </div>
      <div className="text-sm px-5 mt-4">
        <h2 className="font-semibold my-[3%] text-[17px] text-xl">
          {items.title}
        </h2>
        <p>{items.disc}</p>
      </div>
    </div>
  );
};

export default AdCard;
