import React from 'react'
import { Globe, Menu, UserRound } from 'lucide-react';


export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 h-20">

        <p>Logo</p>
        <div className="flex gap-6">
            <button>Stays</button>
            <button>Experiences</button>
        </div>
        <div className="flex items-center gap-3">
            <a>Airbnb your home</a>
            <Globe size={16} />
            <div className="flex border w-[86px] h-12 p-4 rounded-full border-slate-400 items-center justify-around">
              <Menu size={16} />
              <div className="bg-slate-400 rounded-full p-1">
                <UserRound className="rounded-full" />
              </div>
            </div>
        </div>
        <div>
          
        </div>
    </header>
  )
}
