import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs';
import { HiLockClosed } from 'react-icons/hi';
import { doc, getDoc, setDoc, serverTimestamp, runTransaction } from 'firebase/firestore';

import { auth, Firestore } from "../../../app/firebase/clientApp"
import { useAuthState } from 'react-firebase-hooks/auth';

type CreateCommunityModalProps = {
    open: boolean;
    handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({ open, handleClose }) => {
    if (!open) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    
    const[user] = useAuthState(auth);
    const [loading, setLoading] = useState(false)

    // Calculating the number of characters
    const [communityName, setCommunityName] = useState("");
    const [charsRemaining, setCharsRemaining] = useState(21);

    //errors for the create community
    const [error, setError] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 21) return;
        setCommunityName(event.target.value);
        setCharsRemaining(21 - event.target.value.length);
    };

    // State for community checking
    const [communityType, setCommunityType] = useState('public');

    const onCommunityTypeChange = (type: string) => {
        setCommunityType(type);
    };

    //a funtion to create a community
    const handleCreateCommunity = async() => {
        //validate community
        //create the community in firestore database

        if(error) setError("");

        const format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        if(format.test(communityName) || communityName.length < 3){
            setError('commuity names be between 3 nd 21 characters and can only contain letters, numbers or underscores')

            return;
        };

        setLoading(true)


        try{

                    //create the communit docyment in firestore
        // check that name is not taken
        /// if valid name,  create community

        //check if a community exist is by create doc reference

            const commmunityDocRef = doc(Firestore, 'communities', communityName)

            //creating transactions
            await  runTransaction(Firestore, async (transaction) => {

                            //check if community exist in db
            const communityDoc = await getDoc(commmunityDocRef)
    
            if(communityDoc.exists()){
             throw new Error(`sorry, r/s ${communityName} is taken, try another `)
                return;
            }

            })


    
            // create community

            await setDoc(commmunityDocRef, {
                // createid
                creatorId:user?.uid,
                createdAt:serverTimestamp(),
                numberOfMembers:1,
                privacyType: communityType,
    
                //createdAt,
                // number of numbers,
                // privacyType
            });


        }catch (error) {
            console.log('handleCreateCommunity Error', error);
            setError((error as Error).message);
        }
        

        setLoading(false)
    };


    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleOverlayClick}
        >

            <div className='bg-white rounded-lg sm:max-w-[500px]'>
            <div className=" w-full p-6 relative">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-xl font-semibold"
                >
                    &times;
                </button>
                <div>
                    <h2 className="text-lg text-gray-800 font-bold">Create Community</h2>
                </div>
                <div className="grid gap-2 py-4">
                    <h2>Name</h2>
                    <p className='text-[13px] text-gray-500'>Community names including capitalization cannot be changed</p>
                    <div className="grid grid-cols items-center gap-4 w-full py-2">
                        <p className='relative z-10 w-[10px] left-2'>r/</p>
                        <input
                            id="name"
                            defaultValue=""
                            className="absolute w-[90%] p-2 border border-gray-300 rounded pl-5"
                            onChange={handleChange}
                            value={communityName}
                        />
                    </div>

                    <p className={charsRemaining === 0 ? 'text-red-500' : 'text-green-600'}>{charsRemaining} Characters Remaining</p>
                    <div className='p-1 text-1xl text-red-700'> {error}</div>
                    <div>
                        <h2 className='text-1xl mb-4 font-bold'>Community Type</h2>
                        <div className="space-y-4">

                        <div className="space-y-4">
    {/* Public checkbox */}
    <div className="flex items-start space-x-2">
        <Checkbox
            checked={communityType === 'public'}
            onCheckedChange={() => onCommunityTypeChange('public')}
        />
        <div className="flex items-center">
            <BsFillPersonFill className="text-gray-500 mr-1" />
            <label htmlFor="public" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Public
            </label>
        </div>
        <p className="ml-1 text-[11px] text-gray-500">Anyone can view, post, and comment in this community</p>
    </div>

    {/* Restricted checkbox */}
    <div className="flex items-start space-x-2">
        <Checkbox
            checked={communityType === 'restricted'}
            onCheckedChange={() => onCommunityTypeChange('restricted')}
        />
        <div className="flex items-center">
            <BsFillEyeFill className="text-gray-500 mr-1" />
            <label htmlFor="restricted" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Restricted
            </label>
        </div>
        <p className="ml-1 text-[11px] text-gray-500">Only approved users can view and submit to this community</p>
    </div>

    {/* Private checkbox */}
    <div className="flex items-start space-x-2">
        <Checkbox
            checked={communityType === 'private'}
            onCheckedChange={() => onCommunityTypeChange('private')}
        />
        <div className="flex items-center">
            <HiLockClosed className="text-gray-500 mr-1" />
            <label htmlFor="private" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Private
            </label>
        </div>
        <p className="ml-1 text-[11px] text-gray-500">Only members can view and post in this community</p>
    </div>
</div>

                        </div>
                    </div>
                </div>

            </div>

            {/*footr*/}
            <div className="flex justify-end mt-4 bg-gray-100 rounded-[0px 0px 10px 10px] py-3  rounded-[0px 20px 0px 20px]">
                <div className='flex right-3 relative'>
                    <button
                        onClick={handleClose}
                        className="px-4 py-2 bg-gray-200 rounded-[40px] hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleCreateCommunity}
                        disabled={loading} // Disable button when loading
                        className={`ml-2 px-4 py-2 text-white rounded-[40px] flex ${
                            loading ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                    >
                       {loading ? 'Creating...' : 'Create Community'}
                    </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CreateCommunityModal;
