import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/app/atoms/authModal';
import { auth, Firestore } from '@/app/firebase/clientApp';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import { User } from 'firebase/auth';


type SignupProps = {
    
};

const Signup: React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    const [signUpForm, setSignupForm] = useState({
        email: "",
        password: "",
        confirmpassword: ""
    });

    const [error, setError] = useState("");

    const [
        createUserWithEmailAndPassword,
        userCred,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (error) {
            setError('');
        }
        if (signUpForm.password !== signUpForm.confirmpassword) {
            setError("Passwords do not match");
            return;
        }

        createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
            .catch((error) => {
                console.error("Error signing up: ", error);
                setError(error.message);
            });
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignupForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };


    const createUserDocument = async (user: User) => {
        await addDoc(collection(Firestore, "users"), JSON.parse(JSON.stringify(user)));
    };   

    useEffect(()=>{
        if(userCred) {
            createUserDocument(userCred.user);
        }
    }, [userCred]);

    return (
        <>
            <form onSubmit={onSubmit} className='flex flex-col gap-3 flex-start'>
                <input 
                    required
                    type="email"
                    name="email"
                    placeholder="input your email"
                    onChange={onChange}
                    className='bg-[#F6F8FC] p-3 rounded-2xl text placeholder-gray-500 placeholder-opacity-80
                    hover:bg-white hover:border 1px :hover:outline
                    hover:border-[#3182ce] focus:outline-none'
                /> 
                <input 
                    required
                    type="password"
                    placeholder="input your password"
                    name="password"
                    onChange={onChange}
                    className='bg-[#F6F8FC] p-3 rounded-2xl text placeholder-gray-500 placeholder-opacity-80
                    hover:bg-white hover:border 1px :hover:outline
                    hover:border-[#7f91a1] focus:outline-none'
                />
                <input 
                    required
                    type="password"
                    placeholder="confirm your password"
                    name="confirmpassword"
                    onChange={onChange}
                    className='bg-[#F6F8FC] p-3 rounded-2xl text placeholder-gray-500 placeholder-opacity-80
                    hover:bg-white hover:border 1px :hover:outline
                    hover:border-[#3182ce] focus:outline-none'
                />
                {error || userError && (
                    <div className='text-red-800 text-center'>{error || userError.message}</div>
                )}
                <Button type="submit" className='bg-[#3182ce] rounded-3xl '>
                    {loading ? 'Loading...' : 'Sign up'}
                </Button>
                <div className='flex justify-center'>
                    <p className='mr-1'>Already a Redditor</p>
                    <button className='text-[#3182ce] pointer' onClick={() => setAuthModalState(prev => ({
                        ...prev,
                        view: 'login'
                    }))}>LOG IN</button>
                </div>
            </form>
        </>
    );
};

export default Signup;
