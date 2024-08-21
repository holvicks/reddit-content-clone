// Communities.tsx
import React, { useState } from 'react';
import CreateCommunityModal from "../../Modal/CreateModal/CreateCommunityModal";
import { GrAdd } from 'react-icons/gr';

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <>
            <div>
                <CreateCommunityModal open={open} handleClose={handleClose} />
            </div>
            <div
                className='hover:bg-gray-100 hover:text-black flex gap-2 px-2 py-1 items-center cursor-pointer'
                onClick={() => setOpen(true)}
            >
                <GrAdd />
                Create Community
            </div>
        </>
    );
};

export default Communities;
