import React from 'react'
import { Globe, Menu, UserRound } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu';

export default function Header() {
  return (
    // ToDo not centered
    <header className="flex justify-between items-center px-10 h-20">  

      <p>Logo</p>
      <div className="flex gap-6">
        <button>Stays</button>
        <button>Experiences</button>
      </div>
      <div className="flex items-center gap-3">
        <a>Airbnb your home</a>
        <Globe size={16} />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex border w-[86px] h-12 p-4 rounded-full border-slate-400 items-center justify-around">
              <Menu size={16} />
              <div className="bg-slate-400 rounded-full p-1">
                <UserRound className="rounded-full" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>Log In</DropdownMenuItem>   
            <DropdownMenuItem>Sign Up</DropdownMenuItem>
            {/* //ToDo: color not showing */}
            <DropdownMenuSeparator /> 
            <DropdownMenuItem>Airbnb your home</DropdownMenuItem>
            <DropdownMenuItem>Help Centre</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>

      </div>
    </header>
  )
}
