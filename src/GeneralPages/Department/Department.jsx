import React from 'react';
import Cover from './Cover';
import coverpic from '../../assets/medical-banner4.webp';
import { Helmet } from 'react-helmet-async';
import Services from '../Home/Services';

const Department = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Benjir|Department
                </title>
            </Helmet>
            <Cover image={coverpic}></Cover>
            <Services></Services>
        </div>
    );
};

export default Department;