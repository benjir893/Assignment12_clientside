import React from 'react';
import Cover from './Cover';
import coverpic from '../../assets/medical-banner4.webp';
import { Helmet } from 'react-helmet-async';

const Department = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Benjir|Department
                </title>
            </Helmet>
            <Cover image={coverpic}></Cover>
        </div>
    );
};

export default Department;