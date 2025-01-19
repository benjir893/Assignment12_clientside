import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAssignedphysician from '../../hooks/useAssignedphysician';
import Cartifo from './Cartifo';

const Cart = () => {
    const {user} = useAuth();
    const [physicians] = useAssignedphysician();
    const selectPhuysicians = physicians.filter(item => item.patient_email === user.email);
    // const currentPhysicans = selectPhuysicians.filter(item =>item.assigned_status === 'current')

    return (
        <div className='grid md:grid-cols-2 justify-between'>
            {/**
             *  TODO:map to display all info from  assignedphysician table
             * then make a reactstateless component naming Addcart.jsx
             * use react hook form to display and encode info to make an appointment
            */}
            {
                selectPhuysicians.map(item =><Cartifo key={item._id} item={item}></Cartifo>)
            }
        </div>
    );
};

export default Cart;