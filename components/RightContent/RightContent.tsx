import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModal from '../Modal/Auth/AuthModal';
import { Button } from '../ui/button';
import { signOut, User } from 'firebase/auth';
import { auth } from '@/app/firebase/clientApp';
import Icons from '../Navbar/Icons';
import UserMenu from './UserMenu';



type RightContentProps = {
    user ?: User | null;
};

const RightContent:React.FC<RightContentProps> = ({user}) => {
    
    return(
        <>

        <AuthModal  />
        <div className='flex gap-4 items-center pl-4 justify-center'>
            {user ? <Icons /> :<AuthButtons />}

            {/*Menu content */}
            <UserMenu user={user} />
        </div>

        </>
    );
    

}
export default RightContent;