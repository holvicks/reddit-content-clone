import React from 'react';
import { Button } from "@/components/ui/button"
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/app/atoms/authModal';

type AuthButtonsProps = {
    
};

const AuthButtons:React.FC<AuthButtonsProps> = () => {
    const setAuthModalState =useSetRecoilState(authModalState)
    return (
        <>
        <div className='flex gap-2'>
        <Button className='outline rounded-3xl bg-transparent border-[#3182ce] text-[#3182ce] hover:text-white w-[100px] '
        onClick={()=> setAuthModalState({open: true, view: "login"})}>Login</Button>
        <Button className='bg-[#3182ce] rounded-3xl' onClick={()=> setAuthModalState({open: true, view: "signup"})}>Signup</Button>
        </div>
        </>
    );
}
export default AuthButtons;



