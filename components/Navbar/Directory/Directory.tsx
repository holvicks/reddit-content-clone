import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import { ChevronDownIcon } from 'lucide-react';
import { TiHome } from "react-icons/ti";
import Communities from './Communities';

type DirectoryProps = {
    
};

const Directory:React.FC<DirectoryProps> = () => {
    const [open, setOpen] =  useState(false)

    const menuOpen = () => {
        setOpen(!open)
       }

       const handleClickOutside = (event: MouseEvent) => {
        const homemenuElement = document.getElementById('home-menu');
        if (homemenuElement && !homemenuElement.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <>
    <div className='relative p-1' id="home-menu">
    <Button onClick={menuOpen} className='bg-white text-[#000] flex gap-2  hover:bg-gray-100 border flex-start'>
    <>
            <TiHome  className='text-[20px] text-gray-500'/> <p className='hidden lg:flex'>Home</p>
            <div className="flex-col  hidden md:flex flex-start text[13px]">
            {/* <p>{user ? user.displayName || user.email?.split("@")[0] : "Guest"}</p> */}
            <ChevronDownIcon/>
            </div>
            </>
</Button>
    {
        open && (
            <div className='flex flex-col absolute z-30 mt-2 bg-white top-full left-0 w-[200px] border rounded-md shadow-lg py-4 '>  
            <Communities />
            </div>
        )
    }
 </div>

    </>
}
export default Directory;


