import { authModalState } from '@/app/atoms/authModal';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Login from './Login';
import Signup from './Signup'

type AuthInputsProps = {
    //
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const modalState = useRecoilValue(authModalState)
    return (
        <>
        <div className='flex flex-col justify-center mx-auto w-[80%]'>
            {modalState.view === "login" && <Login /> }
            {modalState.view === "signup" && <Signup /> }
        </div>
        </>
    )
}
export default AuthInputs;