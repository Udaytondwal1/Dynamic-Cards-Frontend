import React, { FC } from "react";

const TicketCard: FC<any> = ({items}) => {
  return (
    <div className="card min-w-[15rem] max-w-[27rem] xl:min-w-[16.5rem] h-[100%] shadow-md bg-white snap-center md:snap-start font-inter dark:bg-darkCC dark:overflow-hidden">
      <div className="m-[.8rem] h-[67%] shadow-xl">
        <div className='h-full bg-cover bg-no-repeat bg-center ' style={{ backgroundImage: `url(${items.imgURL})` }}></div>
      </div>

      <div className="h-5 shadow-none flex justify-between items-center">
        <div className="rounded-r-full size-5 -translate-x-2  bg-blue-50 dark:bg-gredientB shadow-[inset_-5px_0_6px_-6px_rgba(0,0,0,0.3)]"></div>
        <div className="line w-full h-1 border-t-[2px] border-zinc-400 border-dashed mx-2 dark:border-zinc-500"></div>
        <div className="rounded-l-full size-5 translate-x-2  bg-blue-50 dark:bg-gredientB shadow-[inset_5px_0_6px_-6px_rgba(0,0,0,0.3)]"></div>
      </div>
      <div className="relative w-full h-[24%] text-center mx-auto">
        <div className="absolute h-full flex flex-col justify-between text-sm">
          <h5 className="text-base font-semibold font-poppins">{items.title}</h5>
          <h5 className="font-poppins">{items.date} | {items.day} | {items.time}</h5>
          <div className="text-zinc-600 px-[1rem] dark:text-zinc-400">
            <span>{items.addres}</span>
          </div>
          <button className="w-[90%] h-[25%] mx-auto bg-zinc-800 text-white dark:bg-black">
            Take Flight Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
