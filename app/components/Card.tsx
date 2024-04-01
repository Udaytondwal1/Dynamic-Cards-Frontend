import React, { FC } from 'react'

const Card: FC<any> = ({items}) => {
    return (
        <div className="card min-w-[15rem] max-w-[25rem] h-full shadow-lg p-2 bg-white dark:bg-darkCC z-10 snap-center font-inter">
            <div className='w-full h-[80%] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${items.imgURL})` }}></div>
            <h2 className="font-semibold my-[3%] text-[17px]">
                {items.title}
            </h2>
            <div className="w-full h-[11%] rounded-sm bg-zinc-100 dark:bg-darkMC flex">
                <div className="w-1/2 h-full p-1">
                    <h6 className="text-zinc-600 text-sm dark:text-zinc-200">Total Events</h6>
                    <h4 className="font-semibold">{items.totalEvents} Events</h4>
                </div>
                <div className="w-1/2 h-full p-1">
                    <h6 className="text-zinc-600 text-sm dark:text-zinc-200">Sport</h6>
                    <h4 className="font-semibold">{items.sport}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card