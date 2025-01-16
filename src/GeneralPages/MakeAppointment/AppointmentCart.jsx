import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import useAssignedphysician from '../../hooks/useAssignedphysician';
import AppointmentCartDisplay from './AppointmentCartDisplay';

const AppointmentCart = () => {
    const {user} = useAuth();
    const userEmail = user.email ||""
    const[physicians] = useAssignedphysician();
    const selectphysicians = physicians.filter(item => item.patient_email === userEmail);
    const currentphysician = selectphysicians.filter(item =>item.assigned_status === "current"); 
    
    return (
        <div>
            {
                currentphysician.map(item =><AppointmentCartDisplay key={item._id} item={item}></AppointmentCartDisplay>)   
            }
            
        </div>
    );
};

export default AppointmentCart;