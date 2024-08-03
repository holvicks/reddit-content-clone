import React, { useState } from 'react';
import { CopyIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authModalState } from '@/app/atoms/authModal';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

type AuthModalProps = {
    
};

const AuthModal:React.FC<AuthModalProps> = () => {
    const [modalState, setModalState] = useRecoilState(authModalState)
    
    const handleClose = () => {
      setModalState(prev => ({
        ...prev,
        open: false,
      }))
    }
    return (
        <>
    <Dialog open={modalState.open} onOpenChange={handleClose}>
      {/* <DialogTrigger asChild>
        <Button variant="outline" className='bg-[#3182ce] rounded-3xl text-white hover:bg-[#3477b6]'>Open Modal</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-md ">
        <DialogHeader className="text-center">
          <DialogTitle>
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign up"}
            {modalState.view === "resetPassword" && "Reset Password"}
            </DialogTitle>
          {/* <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex  flex-col">
          <div className="grid flex-1 gap-1 p-3">



            {/*<ResetPassword/>*/}
            <OAuthButtons />
            <div className='text-gray-500 font-bold text-center mb-2'>OR</div>
             <AuthInputs/>


          </div>
          {/* <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            
            <CopyIcon className="h-4 w-4" />
          </Button> */}
        </div>
        <DialogFooter className="sm:justify-start">
          {/* <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </>
    );
}
export default AuthModal;