import React from 'react';
import { Box, Flex, Icon } from "@chakra-ui/react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";


type IconsProps = {
    
};

const Icons:React.FC<IconsProps> = () => {
    
    return <>
   <div>
    <div className='flex items-center border border-gray-300'>
   <div className='mr-[1.5px] ml-[1.5px] p-1 cursor-pointer rounded-md hover:bg-gray-200 hidden md:flex'>
    <BsArrowUpRightCircle className='text-2xl' />
   </div>

   <div className='mr-[1.5px] ml-[1.5px] p-1 cursor-pointer rounded-md hover:bg-gray-200 hidden md:flex'>
    <IoNotificationsOutline className='text-2xl' />
   </div>

   <div className='mr-[1.5px] ml-[1.5px] p-1 cursor-pointer rounded-md hover:bg-gray-200 hidden md:flex'>
    <IoVideocamOutline  className='text-2xl'/>
   </div>
   
   
    <>
    
    <div className='mr-[1.5px] ml-[1.5px] p-1 cursor-pointer rounded-md hover:bg-gray-200'>
    <BsChatDots className='text-2xl' />
   </div>

   <div className='mr-[1.5px] ml-[1.5px] p-1 cursor-pointer rounded-md flex hover:bg-gray-200'>
    <IoNotificationsOutline className='text-2xl' />
   </div>

   <div className=' mr-[1.5px] ml-[1.5px] p-1 cursor-pointer rounded-md hover:bg-gray-200 hidden md:flex'>
    <GrAdd  className='text-2xl' />
   </div>

    </>
    </div>
   </div>
    </>
}
export default Icons;