import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const useProfile = () => {
    const[profile, setProfile] = useState([]);
    const[loading, setLoading] =useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/profile')
        .then(res =>res.json())
        .then(data =>{
            setProfile(data);
            setLoading(false)
        })
    },[])
    return [profile, loading];
};

export default useProfile;