import React from 'react';
import useAssignedphysician from '../../hooks/useAssignedphysician';
import SetvisitDisplay from './SetvisitDisplay';

const Setvisit = () => {
    const [doctors] = useAssignedphysician()
    return (
        <div>
            {
                doctors.map(item =><SetvisitDisplay key={item._id} item={item}></SetvisitDisplay>)
            }
        </div>
    );
};

export default Setvisit;