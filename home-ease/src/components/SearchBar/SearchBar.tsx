"use client"

import React from 'react'
import { Search } from 'lucide-react'

export function SearchBar() {
  
  return (
    <div className="flex w-2/3 border rounded-full mx-auto shadow-md ">
      <div className=" pt-3.5 flex-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:-z-20 relative before:bg-transparent hover:before:bg-slate-300">
        <div className=" px-8 hover:rounded-full border-r ">
          <p className="text-xs">Where</p>
          <input type='text' id='where' placeholder='Search destinations' className="hover:bg-slate-300 border-transparent focus:outline-none focus-visible:ring-0 placeholder:text-[#646464] text-sm" />
        </div>
      </div>
      <div className=" pt-3.5 flex-1 flex flex-row before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:-z-20 relative before:bg-transparent hover:before:bg-slate-300">
        <div className=" px-8 flex-1 border-r-2">
          <p className="text-xs">Check in</p>
          <p className="text-sm text-[#6A6A6A]">Add dates</p>
        </div>
      </div>
      <div className=" pt-3.5 flex-1 flex flex-row before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:-z-20 relative before:bg-transparent hover:before:bg-slate-300">
        <div className=" px-8 flex-1 border-r-2">
          <p className="text-xs">Check in</p>
          <p className="text-sm text-[#6A6A6A]">Add dates</p>
        </div>
      </div>
      <div className=" pt-3.5 flex-1 flex flex-row before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:-z-20 relative before:bg-transparent hover:before:bg-slate-300">
        <div className=" px-8 flex-1 ">
          <p className="text-xs">Who</p>
          <p className="text-sm text-[#6A6A6A]" >Add guests</p>
        </div>
        <Search className="flex rounded-full p-2 border-red-50" />
      </div>
    </div>
  )
}


export default SearchBar