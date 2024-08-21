import React from 'react';
import { Input } from "@/components/ui/input"
import { User } from 'firebase/auth';


type SearchInputProps = {
   user?: User | null;
};

const SearchInput:React.FC<SearchInputProps> = ({user}) => {
    
    return(
        <>
       
        {user ? (
        <div className='flex w-full'>
        <Input type="text" placeholder="Search Reddit" className='rounded-md focus:outline-none pl-8 placeholder-gray-500 placeholder-opacity-10 flex-grow'  />
        </div>
    ) :(
        <div className='flex w-full'>
        <Input type="text" placeholder="Search Reddit" className='rounded-md focus:outline-none pl-8 placeholder-gray-500 placeholder-opacity-10 '  />
        </div>
       ) }

        </>
    );
}
export default SearchInput;