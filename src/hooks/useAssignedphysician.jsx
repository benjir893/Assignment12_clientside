import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const useAssignedphysician = () => {
    const[physician, setPhysician] = useState([]);
    const[loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/assignedphysician')
        .then(res => res.json())
        .then(data =>{
            setPhysician(data);
            setLoading(false);
        })
    },[])
    return [physician, loading]
};

export default useAssignedphysician;