import React from 'react';
import { Button } from "@/components/ui/button"

type AuthButtonsProps = {
    
};

const AuthButtons:React.FC<AuthButtonsProps> = () => {
    return (
        <>
        <div className='flex gap-2'>
        <Button className='outline rounded-3xl bg-transparent border-[#3182ce] text-[#3182ce] hover:text-white w-[100px] '>Login</Button>
        <Button className='bg-[#3182ce] rounded-3xl'>Signup</Button>
        </div>
        </>
    );
}
export default AuthButtons;



