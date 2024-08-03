import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import GoogleLogo from '../../../public/images/google.png'
type OAuthButtonsProps = {
    
};

const OAuthButtons:React.FC<OAuthButtonsProps> = () => {
    
    return (

        <div  className='flex flex-col w-[80%] mx-auto mb-4'>
             <Button variant={'outline'} className='rounded-2xl hover:bg-[#3182ce] m-2'><Image src={GoogleLogo} alt="" className='h-[30px] w-[30px]' />
          Continue with Google</Button> 
          <Button variant={'outline'} className='rounded-2xl hover:bg-[#3182ce] m-2'>
          Some Other Provider</Button> 
        </div>
    );
}
export default OAuthButtons;