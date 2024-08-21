import React , {useEffect, useState }from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from '../ui/button';
import { FaRedditSquare, FaSearch } from 'react-icons/fa';
import { ChevronDownIcon } from 'lucide-react';
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogin } from "react-icons/hi";
import { Separator } from "@/components/ui/separator"
import { auth } from '@/app/firebase/clientApp';
import { signOut, User } from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { authModalState } from '@/app/atoms/authModal';
import { IoSparkles } from "react-icons/io5";


type UserMenuProps = {
    user?: User | null;
    
};

const UserMenu:React.FC<UserMenuProps> = ({ user }) => {
    const [open, setOpen] =  useState(false)
    const [modalState, setAuthModalState] = useRecoilState(authModalState);

       const menuOpen = () => {
        setOpen(!open)
       }

       const handleClickOutside = (event: MouseEvent) => {
        const menuElement = document.getElementById('user-menu');
        if (menuElement && !menuElement.contains(event.target as Node)) {
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
    <div className='relative p-1' id="user-menu">
    <Button onClick={menuOpen} className='bg-white text-[#000] flex gap-2 hover:bg-gray-100 border'>
    <>
            <FaRedditSquare className='text-[20px] text-gray-500'/>
            <div className="flex-col  hidden md:flex flex-start text[13px]">
            <p>{user ? user.displayName || user.email?.split("@")[0] : "Guest"}</p>
<div className="flex items-center gap-1 text-[13px] mt-[-5px]">
<IoSparkles className="text-red-700"/> 
<p className="text-gray-400 "> Karma</p>
</div>
</div>
            </>
       {user ? (
        <div className='flex items-center'>
           <ChevronDownIcon/>
        </div>
    ) :(
        <div>  <ChevronDownIcon/> </div>
       ) }

</Button>
    {
        open && (
            <div className='flex flex-col absolute z-30 mt-2 bg-white top-full right-0 w-[200px] border rounded-md shadow-lg py-4 '>
                {user ? (
                    <>
                <div className='hover:bg-blue-500 hover:text-white flex gap-2 px-2 py-1 items-center cursor-pointer'><CgProfile  />Profile
                </div>
                <Separator className="" orientation="horizontal" />
                <div onClick={() => signOut(auth)}    className='hover:bg-blue-500 hover:text-white flex  gap-2 px-2 py-1 items-center cursor-pointer'><HiOutlineLogin/>Logout
                </div>
                    </>
                ) : (
                    <>
                    <Separator className="" orientation="horizontal" />
                <div onClick={() => setAuthModalState({open: true, view:'login'})}    className='hover:bg-blue-500 hover:text-white flex  gap-2 px-2 py-1 items-center cursor-pointer'><HiOutlineLogin/>Login or Signup
                </div>
                    </>
                )
                }
            
               
                
                
            </div>
        )
    }
 </div>

    </>
}
export default UserMenu;