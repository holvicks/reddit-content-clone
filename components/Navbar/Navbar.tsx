import React from 'react';
import Image from 'next/image';
import RedditFace from '../../public/images/reddit-face.png';
import RedditText from '../../public/images/reddit-text.png';
import SearchInput from './SearchInput';
import { FaSearch } from 'react-icons/fa';
import RightContent from '../RightContent/RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/clientApp';
import Directory from './Directory/Directory';


const Navbar:React.FC = () => {
  const [user, loading,error] = useAuthState(auth);
    return (
        <div className="flex items-center bg-white py-[10px] px-4 w-full justify-between">
        <div className="flex items-center gap-0 md:gap-3">
          <Image
            src={RedditFace}
            alt="Reddit Logo"
            className="h-[29px] w-[34px] md:h-[32px] md:w-[30px]"
          />
          <Image
            src={RedditText}
            alt="Reddit Logo"
            className="h-[50px] w-[65px] lg:block hidden"
          />
        </div>
       {user && <Directory />} 


       {user ? (
                <div className="flex-grow ml-4">
                <div className="relative flex items-center w-full">
                  <span className="absolute left-3 text-gray-500">
                    <FaSearch />
                  </span>
                  <SearchInput user={user} />
                </div>
              </div>
    
    ) :(
      <div className="flex-grow ml-4 max-w-[800px]">
      <div className="relative flex items-center w-full">
        <span className="absolute left-3 text-gray-500">
          <FaSearch />
        </span>
        <SearchInput user={user} />
      </div>
    </div>
        
       ) }



        {/* <Directory /> */}
        <RightContent user={user}/>
      </div>
        
    );
    
 

}
export default Navbar;