import React from 'react';
import Image from 'next/image';
import RedditFace from '../../public/images/reddit-face.png';
import RedditText from '../../public/images/reddit-text.png';
import SearchInput from './SearchInput';
import { FaSearch } from 'react-icons/fa';
import RightContent from '../RightContent/RightContent';


const Navbar:React.FC = () => {
    
    return (
        <div className="flex items-center bg-white py-[10px] px-6 w-full">
        <div className="flex items-center gap-3">
          <Image
            src={RedditFace}
            alt="Reddit Logo"
            className="h-[32px] w-[30px]"
          />
          <Image
            src={RedditText}
            alt="Reddit Logo"
            className="h-[50px] w-[65px] md:block hidden"
          />
        </div>
        <div className="flex-grow ml-4">
          <div className="relative flex items-center w-full">
            <span className="absolute left-3 text-gray-500">
              <FaSearch />
            </span>
            <SearchInput />
          </div>
        </div>
        {/* <Directory /> */}
        <RightContent />
      </div>
        
    );
    
 

}
export default Navbar;