"use client"

import React, { useState, useEffect } from 'react'
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarTrigger,
// } from "@/components/ui/menubar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Form from 'next';
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CircleMinus, CirclePlus, Plus, Search } from 'lucide-react';
import JSXStyle from 'styled-jsx/style'
import { Button } from '../ui/button';
import GuestComponent from './Guest';


// Element comp - state obj ["check in, out, who, where].map((title) => {'title': title, 'active': true})

export function SearchBar() {
  const [elementList, setElementList] = useState([
    { title: 'Where', active: false },
    { title: 'Check in', active: false },
    { title: 'Check out', active: false },
    { title: 'Who', active: false }
  ]);

  useEffect(() => {
    
  })

  return (
    <>
      <Outline elementList={elementList} setElementList={setElementList} />
    </>
  )
}


type ElementType = {
  title: string;
  active: boolean;
  number?: number | any;
};

type TabElementProps = {
  purpose: ElementType;
  tabClicked: (purpose: ElementType) => void;
}

type OutlineProps = {
  elementList: ElementType[];
  setElementList: (elementList: ElementType[]) => void;
};

const Outline: React.FC<OutlineProps> = ({ elementList, setElementList }) => {
 
  // const [activeTab, setActiveTab] = React.useState([])


  function tabClicked(purpose: {title:string, active: boolean}) {
    console.log("clickced on " + purpose.title, purpose.active);

    const elementListTemp = elementList.map((p) => {
      if(p.title === purpose.title){
        return {...p, active: !p.active};
      } else{
        return p;
      }
    });

    setElementList(elementListTemp);
  }

  return (
    <div className="flex">
    
      <div className=" flex border relative rounded-full mx-auto shadow-md ">

        {elementList.map((purpose, index) => (
          <div key={index}>
            <TabElement purpose ={purpose} key={index} tabClicked={(p) => tabClicked(p)} />
            <Wrapper elementList={elementList} key={index} index={index} />
          </div>
        ))}
      </div>
  
    </div>
  )
}



const TabElement: React.FC<TabElementProps> = ({purpose, tabClicked}) => {
  if (purpose.title === 'Where') {
    return (
      <div 
        className="py-3.5 flex-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:-z-20 relative before:bg-transparent hover:before:bg-[#EBEBEB]  focus:bg-[#EBEBEB]"
        onClick={() => tabClicked({title: purpose.title, active: !purpose.active})}
        >
        
        <div className=" px-8 hover:rounded-full border-r focus:bg-[#EBEBEB] hover:bg-[#EBEBEB] ">
          <p className="text-xs">{purpose.title}</p>
          <input type='text' id='where' placeholder='Search destinations' className="hover:before:bg-[#EBEBEB] p-0 m-0 border-transparent focus:outline-none  focus:bg-[#EBEBEB] focus-visible:ring-0 placeholder:text-[#646464] text-sm" />
        </div>
      </div>

    )
  }
  else if (purpose.title === 'Who') {
    return (
      <div 
        className="flex before:bg-transparent cursor-pointer hover:before:bg-[#EBEBEB] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:-z-20 relative"
        onClick={() => tabClicked({title: purpose.title, active: !purpose.active})}
      >
        <div className=" py-3.5 flex-1 flex flex-row ">
          <div className=" px-8 flex-1 ">
            <p className="text-xs">{purpose.title}</p>
            <p className="text-sm text-[#6A6A6A]" >Add guests</p>
          </div>
        </div>
        <button type="submit" className="flex items-center justify-around mr-2"><Search className=" rounded-full p-2 bg-red-500 justify-around" size="32px" color="white" /></button>
      </div>
    );
  }
  return (
    <div 
      className=" py-3.5 flex-1 flex before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:-z-20 relative before:bg-transparent hover:before:bg-[#EBEBEB]"
      onClick={() => tabClicked({title: purpose.title, active: !purpose.active})}
    >
      <div className=" px-8 flex-1 border-r">
        <p className="text-xs">{purpose.title}</p>
        <p className="text-sm text-[#6A6A6A]">Add dates</p>
      </div>
    </div>);
}



const Wrapper: React.FC<any> = ({elementList, index}) => {
    // const [selectedTab, setSelectedTab] = useState(0)
    if(index === 3 && elementList && elementList[index].active) {
      // <GuestComponent index={index} />
      return (
        <div className={`absolute left-${index} z-1 mt-3 rounded-[32px] border shadow-md w-1/2 px-8 right-0 top-full`}>
          <section className="flex justify-between py-6 border-b-[1px]">
            <div className="flex flex-col">
              <span>Adults</span>
              <span className="text-sm text-[#6a6a6a]">Ages 13 or above</span>
            </div>
            <div className="flex items-center">
              <CircleMinus color="grey" size="32" strokeWidth="1" />
              <span className="mx-2">0</span>
              <CirclePlus color="grey" size="32" strokeWidth="1" />
            </div>
          </section>
          <section className="flex justify-between py-6 border-b-[1px]">
            <div className="flex flex-col">
              <span>Children</span>
              <span className="text-sm text-[#6a6a6a]">Ages 2-12</span>
            </div>
            <div className="flex items-center">
              <CircleMinus color="grey" size="32"  strokeWidth="1" />
              <span className="mx-2">0</span>
              <CirclePlus color="grey" size="32"  strokeWidth="1" />
            </div>
          </section>
          <section className="flex justify-between py-6 border-b-[1px]">
            <div className="flex flex-col">
              <span>Infants</span>
              <span className="text-sm text-[#6a6a6a]">Under 2</span>
            </div>
            <div className="flex items-center">
              <CircleMinus color="grey" size="32"  strokeWidth="1" />
              <span className="mx-2">0</span>
              <CirclePlus color="grey" size="32"  strokeWidth="1" />
            </div>
          </section>
          <section className="flex justify-between py-6">
            <div className="flex flex-col">
              <span>Pets</span>
              {/* <span className="">Ages 13 or above</span> */}
            </div>
            <div className="flex items-center">
              <CircleMinus color="grey" size="32"  strokeWidth="1" />
              <span className="mx-2">0</span>
              <CirclePlus color="grey" size="32"  strokeWidth="1" />
            </div>
          </section>
        </div>)
    } 
    return (
    <></>);
}


export default SearchBar