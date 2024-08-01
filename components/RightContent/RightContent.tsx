import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModal from '../Modal/Auth/AuthModal';


type RightContentProps = {
    //rightcontent
};

const RightContent:React.FC<RightContentProps> = () => {
    
    return(
        <>

        <AuthModal  />
        <div className='flex items-center pl-4 justify-center'>
            <AuthButtons />
        </div>

        </>
    );
    

}
export default RightContent;