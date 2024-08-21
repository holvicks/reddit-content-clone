import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/app/atoms/authModal';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS } from '@/app/firebase/errors';
import { auth } from '@/app/firebase/clientApp';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const [success, setSuccess] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(""); // Clear success message before attempting login
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  useEffect(() => {
    if (user) {
      setSuccess("Logged in successfully");
    }
  }, [user]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <form onSubmit={onSubmit} className='flex flex-col gap-3 flex-start'>
        <Input
          required
          type="email"
          name="email"
          placeholder="Input your email"
          onChange={onChange}
          className='bg-[#F6F8FC] p-3 rounded-2xl text placeholder-gray-500 placeholder-opacity-80
            hover:bg-white hover:border-1px :hover:outline
            hover:border-[#3182ce] focus:outline-none'
        />
        <Input
          required
          type="password"
          name="password"
          placeholder="Input your password"
          onChange={onChange}
          className='bg-[#F6F8FC] p-3 rounded-2xl text placeholder-gray-500 placeholder-opacity-80
            hover:bg-white hover:border-1px :hover:outline
            hover:border-[#3182ce] focus:outline-none'
        />
{error && (
  <div className="text-red-800 text-center">
    {FIREBASE_ERRORS[error.code as keyof typeof FIREBASE_ERRORS] || 'Error logging in. Please try again.'}
  </div>
)}


        {success && (
          <div className='text-green-800 text-center'>
            {success}
          </div>
        )}

        <div className='flex justify-center'>
          <div className='flex gap-3 my-3'>
            <p className='text-md'>Forgot your pasword</p>
            <div className="text-md pointer text-[#3182ce] cursor-pointer" onClick={()=> setAuthModalState(prev=> ({
                ...prev,
            view: 'resetPassword'
            }))}>click here</div>
          </div>

        </div>
        <Button type="submit" className='bg-[#3182ce] rounded-3xl'>
          {loading ? 'Loading...' : 'Login'}
        </Button>




        <div className='flex justify-center'>
          <p className='mr-1'></p>
          <button className='text-[#3182ce] pointer' onClick={() => setAuthModalState(prev => ({
            ...prev,
            view: 'signup'
          }))}>SIGN UP</button>
        </div>
      </form>
    </>
  );
};

export default Login;
