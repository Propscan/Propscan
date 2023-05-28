import React from 'react';

import Blank from "../components/Blank";
import PropertyInfo from '../components/propertyInfo';
import PropertyExtras from '../components/propertyExtras';

import Footer from '../components/footer/Footer';

export default function Property() {
    return (
        <div>
            Some Header Probably
            <PropertyInfo />
            <PropertyExtras />
            <Blank />
            <Footer />
        </div>
    )
}
