import React from 'react';
import { Input } from "@/components/ui/input"

type SearchInputProps = {
    //user
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return(
        <>
        <div className='flex w-full'>
        <Input type="text" placeholder="Search Reddit" className='rounded-md focus:outline-none pl-8 placeholder-gray-500 placeholder-opacity-10 flex-grow'  />
        </div>
        </>
    );
}
export default SearchInput;