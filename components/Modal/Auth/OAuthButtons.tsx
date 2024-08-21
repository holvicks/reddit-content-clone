import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import GoogleLogo from '../../../public/images/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'; 
import { auth } from '@/app/firebase/clientApp';

type OAuthButtonsProps = {
};

const OAuthButtons:React.FC<OAuthButtonsProps> = () => {

    //fetch react hook from google
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    
    return (

        <div  className='flex flex-col w-[80%] mx-auto mb-4'>
             <Button variant={'outline'} className='rounded-2xl hover:bg-[#3182ce] m-2'
            

             onClick={()=> signInWithGoogle()}><Image src={GoogleLogo} alt="" className='h-[30px] w-[30px]' />
          {loading ? 'Loading...' : 'Continue with Google'}</Button> 
          <Button variant={'outline'} className='rounded-2xl hover:bg-[#3182ce] m-2'>
          Some Other Provider</Button> 
          {error && (<div className='text-red-800'>{error.message}</div>)}
        </div>
    );
}
export default OAuthButtons;