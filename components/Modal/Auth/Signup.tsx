import React, {useState} from 'react';
import { Button } from "@/components/ui/button"
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/app/atoms/authModal';

type SignupProps = {
    //
};
const Signup:React.FC<SignupProps> = () => {
    const setAuthModalState =useSetRecoilState(authModalState)

    const [signForm, setSignupForm] = useState({
        email: "",
        password:"",
        confirmpassword:""
    });

    const onSubmit = () => {
    };


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            // update form state
        setSignupForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))

    };
   

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
        hover:border-[#3182ce] focus:outline-none
        '/> 
        <input 
        required
        type="password"
        placeholder="input your password"
        name="password"
        onChange={onChange}
        className='bg-[#F6F8FC] p-3 rounded-2xl text placeholder-gray-500 placeholder-opacity-80
        hover:bg-white hover:border 1px :hover:outline
        hover:border-[#7f91a1] focus:outline-none'/>


      <input 
        required
        type="password"
        placeholder="confirm your password"
        name="confirmpassword"
        onChange={onChange}
        className='bg-[#F6F8FC] p-3 rounded-2xl text placeholder-gray-500 placeholder-opacity-80
        hover:bg-white hover:border 1px :hover:outline
        hover:border-[#3182ce] focus:outline-none'/>

        <Button type="submit" className='bg-[#3182ce] rounded-3xl '
       >Sign up</Button>

       <div  className='flex justify-center'>
        <p className='mr-1'></p>
        <button className='text-[#3182ce] pointer' onClick={()=> setAuthModalState(prev => ({
            ...prev,
            view: 'login'
        }))}>LOG IN</button>
       </div>
       </form>
       </> 
    )
}
export default Signup;