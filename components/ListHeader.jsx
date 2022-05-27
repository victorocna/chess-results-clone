import React from 'react'

export default function ListHeader() {
  return (
    <div className='w-full px-2 sm:flex justify-between hidden'>
        <p className="text-xs">Board</p>
        <p className="text-xs">Title / Name / Rank</p>
        <p className="text-xs">Start No</p>
        <p className="text-xs">Points</p>
        <p className="text-xs">Result</p>
    </div>
  )
}
