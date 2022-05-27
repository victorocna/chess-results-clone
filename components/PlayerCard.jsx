import React from 'react'

export default function PlayerCard({
    board,
    white,
    black,
    result,
  }) {
    const splitRes = result.split('-');
    return (
    <div className='w-full flex'> 
        <div className="w-1/12 flex items-center justify-center">
            <p className='text-lg'>{board}</p>
        </div>

        <div className="w-full flex justify-center flex-col">
            <div className="w-full sm:flex">
                {/* visible details WHITE*/}
                <div className="w-full flex items-center">
                    <p className="mr-1 px-1.5 text-tiny font-mono text-white  bg-default rounded">
                        {white?.title}
                    </p>
                    <p className="mr-1 text-sm truncate">
                        {white?.name}
                    </p>
                    <p className="text-xs text-gray-700">
                        ({white?.civ})
                    </p>
                </div>
                {/* hidden details WHITE*/}
                <div className="w-full flex">
                <p className='sm:w-full sm:text-center text-xs text-gray-700 mr-2'><span className='sm:hidden'>Start No: </span>{white?.rank}</p>
                    <p className='sm:w-full sm:text-center text-xs text-gray-700'><span className='sm:hidden'>Score: </span>{white?.points}</p>
                </div>
            </div>
            
            <div className="w-full sm:flex">
                {/* visible details BLACK*/}
                <div className="w-full flex items-center">
                    <p className="mr-1 px-1.5 text-tiny font-mono text-white  bg-default rounded">
                        {black?.title}
                    </p>
                    <p className="mr-1 text-sm truncate">
                        {black?.name}
                    </p>
                    <p className="text-xs text-gray-700">
                        ({black?.civ})
                    </p>
                </div>
                {/* hidden details BLACK*/}
                <div className="w-full flex">
                    <p className='sm:w-full sm:text-center text-xs text-gray-700 mr-2'><span className='sm:hidden'>Start No: </span>{black?.rank}</p>
                    <p className='sm:w-full sm:text-center text-xs text-gray-700'><span className='sm:hidden'>Score: </span>{black?.points}</p>
                </div>
            </div>
        </div>

        <div className="w-1/12 flex flex-col justify-around">
            <p className='text-lg text-center'>{splitRes[0]}</p>
            <p className='text-lg text-center'>{splitRes[1]}</p>
        </div>
    </div>
    )
}
